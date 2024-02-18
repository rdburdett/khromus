import chalk from "chalk";
import pref from "./preferences.js";
import { Item } from "./itemFactory.js";

export function typeLookup(data) {
	let type = typeof data;
	let isArray = Array.isArray(data);
	let isDate = data instanceof Date;

	if (type !== "object") return type;
	if (isArray) return "array";
	if (isDate) return "date";
	return "object";
}

export function formatDate(data) {
	return data.toISOString();
}

export function formatObject(data) {
	let type = typeLookup(data);
	if (type === "date") {
		return formatDate(data);
	}
	if (type === "array") {
		return `[${data.join(",")}]`;
	}
	if (type === "object") {
		return JSON.stringify(data, null, 2);
	}
	return data;
}

export function logError(error, data) {
	console.error(chalk.red(`Error logging data: ${error.message}`));
	console.error(chalk.red("Data causing error:", data));
}

export function colorizeData(data) {
	let item = new Item(data);
	let color = pref.color ? `${item.color}` : "gray";
	let type = pref.type ? `${item.name}: ` : "";

	return chalk[color](`${type}${item.data}`);
}

export function joinItems(array) {
	return array.join(pref.newLine ? "\n" : ", ");
}

export function processEntries(args) {
	let array = [];
	args.forEach((data) => {
		try {
			array.push(colorizeData(data));
		} catch (error) {
			logError(error, data);
		}
	});
	console.log(joinItems(array));
}