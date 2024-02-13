import chalk from "chalk";

export default function log(...args) {
	try {
		args.forEach((data) => {
			let logColor;
			let type;
			let logtype = true;
			switch (typeof data) {
				case "string":
					type = "String";
					logColor = "green";
					break;
				case "object":
					type = Array.isArray(data) ? "Array" : "Object";
					logColor = Array.isArray(data) ? "cyan" : "blue";
					data = Array.isArray(data)
						? `[${data.join(",")}]`
						: JSON.stringify(data, null, 2);
					break;
				case "number":
					type = "Number";
					logColor = "yellow";
					break;
				case "function":
					type = "Function";
					logColor = "gray";
					data = data.toString();
					break;
				case "boolean":
					type = "Boolean";
					logColor = "magenta";
					break;
				case "undefined":
					type = "Undefined";
					logColor = "red";
					break;
				default:
					throw new Error("Unsupported data type");
			}
			console.log(chalk[logColor](`${type}: ${data}`));
		});
	} catch (error) {
		console.error(chalk.red(`Error logging data: ${error.message}`));
		console.error(chalk.red("Data causing error:", data));
	}
}

log("Test Output.", [1, 2, 3], 42, true, undefined, new Date(), function () {
	console.log("Hello!");
});

// Todo: Create ability to toggle display of log type
