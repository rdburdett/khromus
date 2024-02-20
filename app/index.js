import { processEntries } from "./functions.js";

export default function log(...args) {
	return processEntries(args);
}
