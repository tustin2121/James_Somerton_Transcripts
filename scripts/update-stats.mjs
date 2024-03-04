#! node
// 

import { readFile, writeFile, readdir } from "fs/promises";
import { JSDOM } from "jsdom";
import YAML from "js-yaml";
import fm from "front-matter";
import * as PATH from 'path';

const PATH_INPUT_VIDEOS = `../_videos`;
const PATH_INPUT_THEMES = `../_themes`;
const PATH_INPUT_COMMON = `../_data/cite.yml`;

const PATH_OUTPUT_STATS = `../_data/stats.yml`;
const PATH_OUTPUT_THEMES = `../_data/themes.yml`;

//-------------------------------------------------------------------
/*
type TranscriptStatus = 'Missing'|'Superseded'|'Script'|'Auto'|'Auto Script'|'In Progress'|'Finished'|'Complete';
interface Citation {
	color?: number | string;
	short?: string;
	full: string;
	url?: string;
	chain?: Record<string, Citation>;
	type?: string;
	style?: string;
};
interface Quotation {
	source: string;
	id: string;
	quote: string;
};
interface ThemeFrontmatter {
	stat_id: string;
};
interface VideoFrontmatter {
	redirect_from?: string[];
	parent?: string;
	prev_ids?: string[];
	date: Date;
	title: string;
	runtime?: number;
	status: TranscriptStatus;
	aka?: string[];
	topics?: string[];
	links?: string[];
	description?: string;
	notes?: string[];
	
	history: Map<Date, string>;
	recs: Array<{ title?:string, author?:string, url?:string }>;
	contributors?: Record<string, string | string[]>;
	
	cite: {
		clips: Record<string, Citation>;
		notes: Record<string, string>;
		yikes: Record<string, string>;
		misinformation: Record<string, string>;
		plagiarized: Record<string, string | Citation>;
	}
};
type FMResult = FrontMatterResult<VideoFrontmatter> & { id?:string };
type float = number | string;
type volume = { p:float, m:float, y:float, w?:float, v?:float, total?:number, segments?:number };
interface Statistics {
	vol?: volume;
	_words?: volume;
	_volRecalc?: Array<volume>;
	[k:string]: any;
}
*/
//-------------------------------------------------------------------
// Veriables

const sources/*: Map<string, Citation>*/ = new Map();
const themes/*: Record<string, Quotation[]>*/ = {};

const info/*: Map<string, Statistics>*/ = new Map();
const stats/*: Statistics*/ = { 
	vol: { p:0, m:0, y:0, w:0, v:0, total:0, segments:0 },
	'p-total':0, 'm-total':0, 'y-total':0
};
const list/*: Array<{ name:string, id:string }>*/ = [];

//-------------------------------------------------------------------

const common = YAML.load(await readFile(PATH_INPUT_COMMON, { flag: 'r', encoding:'utf8' }))/* as Record<string, any>*/;

{ // Determine the list of theme files
	let files = await readdir(PATH_INPUT_THEMES, { withFileTypes: true });
	console.log(`Found ${files.length} themes...`);
	for (const f of files) {
		if (!f.isFile()) continue;
		if (PATH.extname(f.name) !== '.md') continue;
		
		const data = fm/*<ThemeFrontmatter>*/(await readFile(PATH.join(PATH_INPUT_THEMES, f.name), { flag: 'r', encoding:'utf8' }));
		if (data.frontmatter === undefined) continue;
		if (data.attributes['stat_id'] === undefined) continue;
		
		themes[data.attributes['stat_id']] = [];
	}
}

{ // Determine the list of video files
	let files = await readdir(PATH_INPUT_VIDEOS, { withFileTypes: true });
	console.log(`Found ${files.length} videos...`);
	for (const f of files) {
		if (!f.isFile()) continue;
		if (PATH.extname(f.name) !== '.md') continue;
		list.push({ name:f.name, id: PATH.basename(f.name, ".md") });
		info.set(PATH.basename(f.name, ".md"), {});
	}
}

// Process each file
for (const { name, id } of list) {
	console.log(`Processing ${id}...`);
	try {
		const data/*: FMResult*/ = fm/*<VideoFrontmatter>*/(await readFile(PATH.join(PATH_INPUT_VIDEOS, name), { flag: 'r', encoding:'utf8' }));
		if (data.frontmatter === undefined) continue;
		let jsdom = new JSDOM(data.body);
		data.id = id;
		
		let obj = info.get(id);
		countStatistics(obj, jsdom.window.document, data);
		determineVolume(obj, jsdom.window, jsdom.window.document);
		collectForParent(id, data.attributes);
		
		// let lines = countStatistics(jsdom.window.document, data.attributes);
		// let vol = determineVolume(jsdom.window, jsdom.window.document);
		// if (vol) lines.unshift(vol);
		// if (!lines || lines.length === 0) continue;
		
		// output.push( `${id}:`, ...lines.map(x=>`  ${x}`) );
	} catch (ex) {
		console.error(`Error processing file [${name}]:`, ex);
	}
}

// Recalculate volume on any parents
for (const [id, obj] of info) {
	if (obj._volRecalc === undefined) continue;
	let total = obj._volRecalc.reduce((a, b) => a + b.total, 0);
	let segments = obj._volRecalc.reduce((a, b) => a + b.segments, 0);
	let p/*:float*/ = obj._volRecalc.reduce((a, b) => a + (b.p/*! as number*/), 0);
	let m/*:float*/ = obj._volRecalc.reduce((a, b) => a + (b.m/*! as number*/), 0);
	let y/*:float*/ = obj._volRecalc.reduce((a, b) => a + (b.y/*! as number*/), 0);
	let w/*:float*/ = obj._volRecalc.reduce((a, b) => a + (b.w/*! as number*/), 0);
	let v/*:float*/ = obj._volRecalc.reduce((a, b) => a + (b.v/*! as number*/), 0);
	
	p = ((p / segments) * 100).toFixed(1);
	m = ((m / segments) * 100).toFixed(1);
	y = ((y / segments) * 100).toFixed(1);
	w = ((w / total) * 100).toFixed(1);
	
	obj.vol = { p, m, y, w, v };
}{
	let { p, m, y, w, v, total, segments }/*: Record<string, any>*/ = stats.vol;
	
	p = ((p / segments) * 100).toFixed(1);
	m = ((m / segments) * 100).toFixed(1);
	y = ((y / segments) * 100).toFixed(1);
	w = ((w / total) * 100).toFixed(1);
	
	stats.vol = { p, m, y, w, v };
}

// Fill in any extra stats
stats["p-total"] = sources.size;

await Promise.all([(async ()=>{
	let output/*:string[]*/ = [];
	{ // Prepend global stats
		output.push(YAML.dump({ _global: stats }, { flowLevel: 2, quotingType: '"' }));
	}{
		output.push(YAML.dump({ _all: [...sources.values()] }, { flowLevel: 2, forceQuotes:true, quotingType: '"' }));
	}
	for (const [id, obj] of info) {
		let x/*:string[]*/ = [];
		if (obj.sources) {
			x.push(YAML.dump({ [id]: {
				plagiarized: obj.sources,
				misinformation: obj.misinfo,
				yikes: obj.yikes,
			}}, { flowLevel: 3, forceQuotes:true, quotingType: '"' }));
		}
		if (obj.vol) {
			if (x.length === 0) x.push(`${id}:`);
			const { p, m, y, w, v } = obj.vol;
			// Can't use YAML.dump here because we need to force these to by floats
			x.push(`  vol: { p: ${p}, m: ${m}, y: ${y}, w: ${w}, v: ${v} }`);
		}
		if (x.length) output.push(...x.map(x=>x.trimEnd()));
	}
	// Prepend header
	output.unshift(
		`# This file is auto-generated using scripts/update-percentages.mts`,
		`# Do not commit this file.`,
	);
	output.push(""); // Add a newline to the end
	
	console.log(`Writing ${PATH_OUTPUT_STATS}...`);
	await writeFile(PATH_OUTPUT_STATS, output.join('\n'));
})(), (async ()=>{
	let output/*:string[]*/ = [];
	
	output.push(YAML.dump(themes, { flowLevel: 2, quotingType: '"' }));
	
	// Prepend header
	output.unshift(
		`# This file is auto-generated using scripts/update-percentages.mts`,
		`# Do not commit this file.`,
	);
	output.push(""); // Add a newline to the end
	
	console.log(`Writing ${PATH_INPUT_THEMES}...`);
	await writeFile(PATH_OUTPUT_THEMES, output.join('\n'));
})()]);

//-----------------------------------------------------------------------------

/**
 * @param {Object} obj
 * @param {Window} window
 * @param {Document} document 
 */
function determineVolume(obj/*:Record<string, any>*/, window/*:DOMWindow*/, document/*:Document*/) {
	let nodes = Array.from(document.querySelectorAll("james:not([meta])")).map(n => {
		let total = n.textContent.split(" ").length;
		let p = 0; //plagiarism
		let m = 0; //misinformation
		let y = 0; //yikes
		let pVid = 0; //plagiarized video
		let pExact = 0; //plagiarized exact text
		{
			let marks = Array.from(n.querySelectorAll("mark:not([fc]):not([meta]):not([yikes])"));
			p = marks.map(m => m.textContent.split(" ")).flat().length;
			pExact = p - marks.filter(m => m.hasAttribute("x")).map(m => m.textContent.split(" ")).flat().length;
			
			// Make sure to count block quotes which just have an empty <mark> at the start
			marks.filter(m =>m.textContent.trim().length === 0).forEach(m => {
				while (m.parentElement && m.parentElement.tagName !== "BLOCKQUOTE") {
					m = m.parentElement;
				}
				if (m.parentElement) {
					let n = m.parentElement.textContent.split(" ").length;
					p += n; pExact += n;
				}
			});
		}{
			let clips = Array.from(n.querySelectorAll("[visual]")).filter(m=>m.getAttribute("visual") && m.getAttribute("visual") !== "none");
			pVid = clips.length;
			p += clips.map(m => m.textContent.split(" ")).flat().length;
		}{
			let marks = Array.from(n.querySelectorAll("mark[fc]"));
			marks = marks.filter(m => m.getAttribute("fc") === "false");
			m = marks.map(m => m.textContent.split(" ")).flat().length;;
		}{
			let marks = Array.from(n.querySelectorAll("mark[yikes]"));
			y = marks.map(m => m.textContent.split(" ")).flat().length;;
		}
		return { p, m, y, pVid, pExact, total };
	});
	if (nodes.length === 0) return;
	
	let total = nodes.map(n => n.total).reduce((a, b) => a + b);
	let p/*:float*/ = nodes.map((n)/*:number*/ => n.p > 0 ? 1 : 0).reduce((a, b) => a + b);
	let m/*:float*/ = nodes.map((n)/*:number*/ => n.m > 0 ? 1 : 0).reduce((a, b) => a + b);
	let y/*:float*/ = nodes.map((n)/*:number*/ => n.y > 0 ? 1 : 0).reduce((a, b) => a + b);
	let w/*:float*/ = nodes.map((n)/*:number*/ => n.pExact).reduce((a, b) => a + b);
	let v/*:float*/ = nodes.map((n)/*:number*/ => n.pVid).reduce((a, b) => a + b);
	
	obj._words = { p, m, y, w, v, total, segments:nodes.length };
	(stats.vol.p/* as number*/) += p;
	(stats.vol.m/* as number*/) += m;
	(stats.vol.y/* as number*/) += y;
	(stats.vol.w/* as number*/) += w;
	(stats.vol.v/* as number*/) += v;
	stats.vol.total += total;
	stats.vol.segments += nodes.length;
	
	if (total === 0) return;
	if (p === 0 && m === 0 && y === 0 && w === 0 && v === 0) return;
	
	p = ((p / nodes.length) * 100).toFixed(1);
	m = ((m / nodes.length) * 100).toFixed(1);
	y = ((y / nodes.length) * 100).toFixed(1);
	w = ((w / total) * 100).toFixed(1);
	
	obj.vol = { p, m, y, w, v };
}

/**
 * 
 * @param {Object} obj
 * @param {Document} document 
 * @param {import("front-matter").FrontMatterResult} data 
 */
function countStatistics(obj/*:Record<string, any>*/, document/*:Document*/, data/*:FMResult*/) {
	const fm = data.attributes;
	fm.notes?.forEach(n => {
		stats[n] = (stats[n] ?? 0) + 1;
	});
	Array.from(document.querySelectorAll("[stat:id]")).forEach(n => {
		let id = n.getAttribute("stat:id");
		stats[id] = (stats[id] ?? 0) + 1;
	});
	for (const theme of Object.keys(themes)) {
		Array.from(document.querySelectorAll(`[stat:id="${theme}"]`)).forEach(n => {
			themes[theme].push({ source:data.id, id:n.id, quote:n.textContent });
		});
	}
	
	if (fm.cite === undefined) return;
	stats["m-total"] += Object.keys(fm.cite.misinformation).length;
	stats["y-total"] += Object.keys(fm.cite.yikes).length;
	for (let source of Object.values(fm.cite.plagiarized)) {
		if (typeof source === "string") {
			if (source.startsWith("$cite$")) source = common[source.slice(6)]/* as Citation*/;
			else throw new TypeError(`Unknown source: ${source}`);
		}
		
		sources.set(`${source.full} ${source.url}`, source);
		
		if (checkStat('p-'+source.type, source.type !== undefined)) continue;
		if (checkStat('p-youtube', source.url?.startsWith("https://www.youtube.com/"))) continue;
		if (checkStat('p-wiki', source.url?.startsWith("https://en.wikipedia.org/"))) continue;
		if (checkStat('p-news', source.full.includes("</em> [News article]."))) continue;
	}
}

/**
 * 
 * @param {String} id
 * @param {Object} fm 
 */
function collectForParent(vid/*:string*/, fm/*: VideoFrontmatter*/) {
	if (fm.cite === undefined) return;
	let key = fm.parent;
	if (fm.notes?.includes("multipart")) key = vid;
	if (!key) return;
	
	let parentInfo = info.get(key);
	
	parentInfo.sources ??= {};
	parentInfo.misinfo ??= {};
	parentInfo.yikes ??= {};
	
	for (const [id, src] of Object.entries(fm.cite.plagiarized)) {
		parentInfo.sources[id] = src;
	}
	for (const [id, src] of Object.entries(fm.cite.misinformation)) {
		parentInfo.misinfo[`${vid}$${id}`] = src;
	}
	for (const [id, src] of Object.entries(fm.cite.yikes)) {
		parentInfo.yikes[`${vid}$${id}`] = src;
	}
	if (info.get(vid)?._words) {
		parentInfo._volRecalc ??= [];
		parentInfo._volRecalc.push(info.get(vid)._words);
	}
}


function checkStat(stat/*: string*/, bool/*?: boolean*/) {
	if (bool) {
		stats[stat] = (stats[stat] ?? 0) + 1;
	}
	return bool;
}