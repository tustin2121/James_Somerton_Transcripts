#! node
// 

import { readFile, writeFile, readdir } from "fs/promises";
import { JSDOM } from "jsdom";
import fm from "front-matter";
import * as PATH from 'path';

const INPUT_PATH = `../_videos`;
const OUTPUT_FILE = `../_data/volume.yml`;
const STAT_FILE = `../_data/stats.json`;

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

let output = [
	`# This file is auto-generated using scripts/update-percentages.mjs`,
	`# Do not commit this file.`,
];
for (const { name, id } of list) {
	console.log(`Processing ${id}...`);
	try {
		const data = fm(await readFile(PATH.join(INPUT_PATH, name), { flag: 'r', encoding:'utf8' }));
		if (data.frontmatter === undefined) continue;
		let jsdom = new JSDOM(data.body);
		
		countStatistics(jsdom.window.document, data.attributes);
		
		let out = determineVolume(jsdom.window, jsdom.window.document);
		if (!out || out.length === 0) continue;
		
		output.push(
			`${id}:`,
			...out.map(x=>`  ${x}`),
		);
	} catch (ex) {
		console.error(`Error processing file [${name}]:`, ex);
	}
}
output.push('');

await writeFile(OUTPUT_FILE, output.join('\n'));

stats.sources = sources.size;
await writeFile(STAT_FILE, JSON.stringify(stats, null, 2));

//-----------------------------------------------------------------------------

function determineVolume(window, document) {
	let out = [];
	let nodes = Array.from(document.querySelectorAll("james")).map(n => {
		let total = n.textContent.split(" ").length;
		let p = 0, m = 0, y = 0;
		{
			let marks = Array.from(n.querySelectorAll("mark:not([fc])")).map(m => m.textContent.split(" ")).flat().length;
			let clips = Array.from(n.querySelectorAll("[visual]")).filter(m=>m.getAttribute("visual") !== "none").map(m => m.textContent.split(" ")).flat().length;
			p = marks + clips;
		}{
			let marks = Array.from(n.querySelectorAll("mark[fc]")).map(m => m.textContent.split(" ")).flat().length;
			m = marks;
		}{
			y = 0; // Not yet implemented
		}
		return { p, m, y, total };
	});
	if (nodes.length === 0) return out;
	{
		let p = nodes.map(n => n.p).reduce((a, b) => a + b);
		let m = nodes.map(n => n.m).reduce((a, b) => a + b);
		let y = nodes.map(n => n.y).reduce((a, b) => a + b);
		let total = nodes.map(n => n.total).reduce((a, b) => a + b);
		out.push(`words: { p: ${((p/total)*100).toFixed(1)}, m: ${((m/total)*100).toFixed(1)}, y: ${((y/total)*100).toFixed(1)} }`);
	}{
		let p = nodes.map(n => n.p > 0 ? 1 : 0).reduce((a, b) => a + b);
		let m = nodes.map(n => n.m > 0 ? 1 : 0).reduce((a, b) => a + b);
		let y = nodes.map(n => n.y > 0 ? 1 : 0).reduce((a, b) => a + b);
		let total = nodes.map(n => n.total > 0 ? 1 : 0).reduce((a, b) => a + b);
		out.push(`sections: { p: ${((p/total)*100).toFixed(1)}, m: ${((m/total)*100).toFixed(1)}, y: ${((y/total)*100).toFixed(1)} }`);
	}
	return out;
}

/**
 * 
 * @param {Document} document 
 * @param {Object} fm 
 */
function countStatistics(document, fm) {
	Array.from(document.querySelectorAll("[stat:id]")).forEach(n => {
		let id = n.getAttribute("stat:id");
		stats[id] = (stats[id] ?? 0) + 1;
	});
	
	if (fm.cite === undefined) return;
	stats.lies += Object.keys(fm.cite.misinformation).length;
	stats.yikes += Object. keys(fm.cite.yikes).length;
	for (const source of Object.values(fm.cite.plagiarized)) {
		sources.add(`${source.full} ${source.url}`);
	}
}

