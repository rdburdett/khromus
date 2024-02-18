import typeMap from "./types.js";
import * as functions from "./functions.js";

export class Item {
	constructor(data) {
		this.type = functions.typeLookup(data);
		this.data = functions.formatObject(data);
		this.color = typeMap[this.type].color;
		this.name = typeMap[this.type].name;
	}
}
