import { processEntries } from "./lib/functions.js";

export default function log(...args) {
	return processEntries(args);
}
