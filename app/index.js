import testData from "../test/test-data.js";
import { processEntries } from "./functions.js";

export default function log(...args) {
	return processEntries(args)
}

// log(...testData);
log('Apple', 34)

