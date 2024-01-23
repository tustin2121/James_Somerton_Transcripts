#! node
// 

import { readFile, writeFile, readdir } from "fs/promises";
import fm from "front-matter";
import * as PATH from 'path';

const TYPE = 'titles'; //'tasklist';
const INPUT_PATH = `../_videos`;
const OUTPUT_FILE = `output.csv`;

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
}

for (const { name, id } of list) {
	console.log(`Processing ${id}...`);
	let line = [];
	try {
		const data = fm(await readFile(PATH.join(INPUT_PATH, name), { flag: 'r', encoding:'utf8' }));
		if (data.frontmatter === undefined) continue;
		data.id = id;
		
		switch (TYPE) {
			case 'tasklist': line = line_tasklist(data); break;
			case 'issues': line = line_issues(data); break;
			case 'readme': line = line_readme(data); break;
			case 'titles': line = line_titles(data); break;
		}
		
		output.push(line.join(',')); // Add the line to the output
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


