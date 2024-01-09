#! node
// 

import { readFile, writeFile, readdir } from "fs/promises";
import { JSDOM } from "jsdom";
import fm from "front-matter";
import * as PATH from 'path';

const INPUT_PATH = `../_videos`;
const OUTPUT_FILE = `../_data/stats.yml`;

let sources = new Set();
let stats = { sources:0, lies:0, yikes:0 };
let list = [];

let files = await readdir(INPUT_PATH, { withFileTypes: true });
console.log(`Found ${files.length} files...`);
for (const f of files) {
	if (!f.isFile()) continue;
	if (PATH.extname(f.name) !== '.md') continue;
	list.push({ name:f.name, id: PATH.basename(f.name, ".md") });
}

let output = [];
for (const { name, id } of list) {
	console.log(`Processing ${id}...`);
	try {
		const data = fm(await readFile(PATH.join(INPUT_PATH, name), { flag: 'r', encoding:'utf8' }));
		if (data.frontmatter === undefined) continue;
		let jsdom = new JSDOM(data.body);
		
		let lines = countStatistics(jsdom.window.document, data.attributes);
		let vol = determineVolume(jsdom.window, jsdom.window.document);
		if (vol) lines.unshift(vol);
		if (!lines || lines.length === 0) continue;
		
		output.push( `${id}:`, ...lines.map(x=>`  ${x}`) );
	} catch (ex) {
		console.error(`Error processing file [${name}]:`, ex);
	}
}
output.push('');

// Fill in any extra stats
stats.sources = sources.size;

{ // Prepend global stats
	let lines = [ `_global:` ];
	for (const stat of Object.keys(stats)) {
		lines.push(`  ${stat}: ${stats[stat]}`);
	}
	output.unshift(...lines);
}
// Prepend header
output.unshift(
	`# This file is auto-generated using scripts/update-percentages.mjs`,
	`# Do not commit this file.`,
);

await writeFile(OUTPUT_FILE, output.join('\n'));

//-----------------------------------------------------------------------------

function determineVolume(window, document) {
	let nodes = Array.from(document.querySelectorAll("james")).map(n => {
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
	if (nodes.length === 0) return undefined;
	
	let total = nodes.map(n => n.total).reduce((a, b) => a + b);
	let p = ((nodes.map(n => n.p > 0 ? 1 : 0).reduce((a, b) => a + b) / nodes.length) * 100).toFixed(1);
	let m = ((nodes.map(n => n.m > 0 ? 1 : 0).reduce((a, b) => a + b) / nodes.length) * 100).toFixed(1);
	let y = ((nodes.map(n => n.y > 0 ? 1 : 0).reduce((a, b) => a + b) / nodes.length) * 100).toFixed(1);
	let w = ((nodes.map(n => n.pExact).reduce((a, b) => a + b) / total) * 100).toFixed(1);
	let v = nodes.map(n => n.pVid).reduce((a, b) => a + b);
	
	if (p === "0.0" && m === "0.0" && y === "0.0" && w === "0.0" && v === 0) return undefined;
	return `vol: { p: ${p}, m: ${m}, y: ${y}, w: ${w}, v: ${v} }`;
}

/**
 * 
 * @param {Document} document 
 * @param {Object} fm 
 */
function countStatistics(document, fm) {
	let out = []; // TODO, maybe add individual stats to files?
	Array.from(document.querySelectorAll("[stat:id]")).forEach(n => {
		let id = n.getAttribute("stat:id");
		stats[id] = (stats[id] ?? 0) + 1;
	});
	
	if (fm.cite === undefined) return;
	stats.lies += Object.keys(fm.cite.misinformation).length;
	stats.yikes += Object. keys(fm.cite.yikes).length;
	for (const source of Object.values(fm.cite.plagiarized)) {
		sources.add(`${source.full} ${source.url}`);
		
		if (checkStat('p-'+source.type, source.type !== undefined)) continue;
		if (checkStat('p-youtube', source.url.startsWith("https://www.youtube.com/"))) continue;
		if (checkStat('p-wiki', source.url.startsWith("https://en.wikipedia.org/"))) continue;
		if (checkStat('p-news', source.full.includes("</em> [News article]."))) continue;
	}
	return out;
}


function checkStat(stat, bool) {
	if (bool) {
		stats[stat] = (stats[stat] ?? 0) + 1;
	}
	return bool;
}