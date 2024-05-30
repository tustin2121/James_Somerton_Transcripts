#! node
// 

import { readFile, writeFile, readdir } from "fs/promises";
import fm from "front-matter";
import * as PATH from 'path';

// const TYPE = 'readme'; //'tasklist';
const TYPE = process.argv[2] || 'readme';
const INPUT_PATH = `../_videos`;
const OUTPUT_FILE = `output.txt`;

let list = [];

let files = await readdir(INPUT_PATH, { withFileTypes: true });
console.log(`Found ${files.length} files...`);
for (const f of files) {
	if (!f.isFile()) continue;
	if (PATH.extname(f.name) !== '.md') continue;
	list.push({ name:f.name, id: PATH.basename(f.name, ".md") });
}

let output = [];

switch (TYPE) {
	case 'tasklist':
		output.push(`Type,Title,Parent,Schedule Date,Due Date,End Date,Start Date,Labels,Note,Subtasks,Duration,Priority`);
		break;
	case 'issues':
		output.push(`title,body,assignee,labels,milestone`);
		break;
	case 'readme':
		output.push(`| Video ID | Status | Title |`);
		output.push(`|:---|:---:|:----|`);
		break;
	case 'titles': break;
	case 'history': 
		output.push(`# History`);
		output.push(`# Please copy the following into the video's frontmatter:`);
		break;
}

for (const { name, id } of list) {
	console.log(`Processing ${id}...`);
	try {
		const data = fm(await readFile(PATH.join(INPUT_PATH, name), { flag: 'r', encoding:'utf8' }));
		if (data.frontmatter === undefined) continue;
		data.id = id;
		
		switch (TYPE) {
			case 'tasklist': 
				output.push(line_tasklist(data).join(','));
				break;
			case 'issues': 
				output.push(line_issues(data).join(','));
				break;
			case 'readme': 
				output.push(line_readme(data).join(','));
				break;
			case 'titles': 
				output.push(line_titles(data).join(','));
				break;
			case 'history': 
				output.push(line_history(data).join('\n'));
				break;
				
		}
		
	} catch (ex) {
		console.error(`Error processing file [${name}]:`, ex);
	}
}

await writeFile(OUTPUT_FILE, output.join('\n'));

function line_tasklist(data) {
	let subtasks = [];
	if (data.attributes["status"] == "Finished") {
		subtasks.push(`Format (Done)`);
		subtasks.push(`Add Sources`);
		subtasks.push(`Highlight`);
	} else if (data.attributes["status"] == "Complete") {
		subtasks.push(`Format (Done)`);
		subtasks.push(`Add Sources (Done)`);
		subtasks.push(`Highlight (Done)`);
	} else {
		subtasks.push(`Format`);
		subtasks.push(`Add Sources`);
		subtasks.push(`Highlight`);
	}
	
	return [
		"task", // Type
		`"${data.attributes["title"].replace(/["]/g, "”")}"`, // Title
		`"James Somerton Project"`, // Parent
		"", // Schedule Date
		"", // Due Date
		"", // End Date
		`${data.attributes["date"].toISOString().split('T')[0]}`, // Start Date
		"", // Labels
		`"${data.id}"`, // Note
		`"${subtasks.join("\\n")}"`, // Subtasks
		"", // Duration
		"", // Priority
	];
}
function line_issues(data) {
	let subtasks = [];
	
	return [
		`"${data.attributes["title"].replace(/["]/g, "”")}"`, // Title
		`"${subtasks.join('\\n')}"`, // Body
		``, // Assignee
		`"video"`, // Labels
		`"Final Deadline"`, // Milestone
	];
}
function line_readme(data) {
	return [`| [${data.id}](_videos/${data.id}.md) | ${data.attributes["status"].concat(" ".repeat(12)).slice(0, 11)} | ${data.attributes["title"]}`];
}
function line_titles(data) {
	return [`[${data.id}] ${data.attributes["title"]}`];
}

function line_history(data) {
	if (data.attributes['history'] !== undefined) return [];
	let out = [
		`${data.id}:`,
		`  ${data.attributes['date'].toISOString().split('T')[0]}: First published.`,
	];
	if (!data.attributes['notes']) {
		out.push(`  2023-12-07: Privated post-callout.`);
		return out;
	}
	
	if (data.attributes['notes'].includes('dec2-delete')) {
		out.push(`  2023-12-03: Deleted less than an hour post-callout.`);
	}
	else if (data.attributes['notes'].includes('dec5-delete')) {
		out.push(`  2023-12-05: Deleted post-callout.`);
	} 
	else {
		out.push(`  2023-12-07: Privated post-callout.`);
	}
	if (data.attributes['notes'].includes('comp-delete')) {
		out.push(`  2000-01-01: Deleted in favor of the compilation video. # Replace with parent date`);
	}
	if (data.attributes['notes'].includes('feb26-unprivate')) {
		out.push(`  2024-02-26: Unprivated with apology 2, claiming no plagiarism.`);
	}
	return out;
}


