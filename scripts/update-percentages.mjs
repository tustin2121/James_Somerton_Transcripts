#! node
// 

import { readFile, writeFile, readdir } from "fs/promises";
import { JSDOM } from "jsdom";
import YAML from "js-yaml";
import fm from "front-matter";
import * as PATH from 'path';

const INPUT_PATH = `../_videos`;
const OUTPUT_FILE = `../_data/stats.yml`;

let sources = new Map();
let info = new Map();
let stats = { 'p-total':0, 'm-total':0, 'y-total':0 };
let list = [];

// Determine the list of files
let files = await readdir(INPUT_PATH, { withFileTypes: true });
console.log(`Found ${files.length} files...`);
for (const f of files) {
	if (!f.isFile()) continue;
	if (PATH.extname(f.name) !== '.md') continue;
	list.push({ name:f.name, id: PATH.basename(f.name, ".md") });
	info.set(PATH.basename(f.name, ".md"), {});
}

// Process each file
for (const { name, id } of list) {
	console.log(`Processing ${id}...`);
	try {
		const data = fm(await readFile(PATH.join(INPUT_PATH, name), { flag: 'r', encoding:'utf8' }));
		if (data.frontmatter === undefined) continue;
		let jsdom = new JSDOM(data.body);
		
		let obj = info.get(id);
		countStatistics(obj, jsdom.window.document, data.attributes);
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
	let p = obj._volRecalc.reduce((a, b) => a + b.p, 0);
	let m = obj._volRecalc.reduce((a, b) => a + b.m, 0);
	let y = obj._volRecalc.reduce((a, b) => a + b.y, 0);
	let w = obj._volRecalc.reduce((a, b) => a + b.w, 0);
	let v = obj._volRecalc.reduce((a, b) => a + b.v, 0);
	
	p = ((p / total) * 100).toFixed(1);
	m = ((m / total) * 100).toFixed(1);
	y = ((y / total) * 100).toFixed(1);
	w = ((w / total) * 100).toFixed(1);
	
	obj.vol = { p, m, y, w, v };
}

// Fill in any extra stats
stats["p-total"] = sources.size;

let output = [];
{ // Prepend global stats
	output.push(YAML.dump({ _global: stats }, { flowLevel: 2, quotingType: '"' }));
}{
	output.push(YAML.dump({ _all: [...sources.values()] }, { flowLevel: 2, quotingType: '"' }));
}
for (const [id, obj] of info) {
	let x = [];
	if (obj.sources) {
		x.push(YAML.dump({ [id]: {
			plagiarized: obj.sources,
			misinformation: obj.misinfo,
			yikes: obj.yikes,
		}}, { flowLevel: 3, quotingType: '"' }));
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
	`# This file is auto-generated using scripts/update-percentages.mjs`,
	`# Do not commit this file.`,
);
output.push(""); // Add a newline to the end

await writeFile(OUTPUT_FILE, output.join('\n'));

//-----------------------------------------------------------------------------

/**
 * @param {Object} obj
 * @param {Window} window
 * @param {Document} document 
 */
function determineVolume(obj, window, document) {
	let nodes = Array.from(document.querySelectorAll("james:not([meta])")).map(n => {
		let total = n.textContent.split(" ").length;
		let p = 0; //plagiarism
		let m = 0; //misinformation
		let y = 0; //yikes
		let pVid = 0; //plagiarized video
		let pExact = 0; //plagiarized exact text
		{
			let marks = Array.from(n.querySelectorAll("mark:not([fc])"));
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
			y = 0; // Not yet implemented
		}
		return { p, m, y, pVid, pExact, total };
	});
	if (nodes.length === 0) return;
	
	let total = nodes.map(n => n.total).reduce((a, b) => a + b);
	let p = nodes.map(n => n.p > 0 ? 1 : 0).reduce((a, b) => a + b);
	let m = nodes.map(n => n.m > 0 ? 1 : 0).reduce((a, b) => a + b);
	let y = nodes.map(n => n.y > 0 ? 1 : 0).reduce((a, b) => a + b);
	let w = nodes.map(n => n.pExact).reduce((a, b) => a + b);
	let v = nodes.map(n => n.pVid).reduce((a, b) => a + b);
	
	obj._words = { p, m, y, w, v, total };
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
 * @param {Object} fm 
 */
function countStatistics(obj, document, fm) {
	Array.from(document.querySelectorAll("[stat:id]")).forEach(n => {
		let id = n.getAttribute("stat:id");
		stats[id] = (stats[id] ?? 0) + 1;
	});
	
	if (fm.cite === undefined) return;
	stats["m-total"] += Object.keys(fm.cite.misinformation).length;
	stats["y-total"] += Object.keys(fm.cite.yikes).length;
	for (const source of Object.values(fm.cite.plagiarized)) {
		sources.set(`${source.full} ${source.url}`, source);
		
		if (checkStat('p-'+source.type, source.type !== undefined)) continue;
		if (checkStat('p-youtube', source.url.startsWith("https://www.youtube.com/"))) continue;
		if (checkStat('p-wiki', source.url.startsWith("https://en.wikipedia.org/"))) continue;
		if (checkStat('p-news', source.full.includes("</em> [News article]."))) continue;
	}
}

/**
 * 
 * @param {String} id
 * @param {Object} fm 
 */
function collectForParent(vid, fm) {
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
	if (info.get(vid)._words) {
		parentInfo._volRecalc ??= [];
		parentInfo._volRecalc.push(info.get(vid)._words);
	}
}


function checkStat(stat, bool) {
	if (bool) {
		stats[stat] = (stats[stat] ?? 0) + 1;
	}
	return bool;
}