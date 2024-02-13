import chalk from "chalk";

// Helper function to format date objects
function formatDate(data) {
	return data instanceof Date ? data.toISOString() : null;
}

// Helper function to format objects
function formatObject(data) {
	return Array.isArray(data)
		? `[${data.join(",")}]`
		: JSON.stringify(data, null, 2);
}

// Helper function to handle logging errors
function logError(error, data) {
	console.error(chalk.red(`Error logging data: ${error.message}`));
	console.error(chalk.red("Data causing error:", data));
}

export default function log(...args) {
	try {
		let array = [];
		let pref = {
			type: true,
			color: true,
			newLine: true,
		};
		args.forEach((data) => {
			let logColor;
			let logType;
			switch (typeof data) {
				case "string":
					logType = "String";
					logColor = "green";
					break;
				case "object":
					const formattedDate = formatDate(data);
					if (formattedDate !== null) {
						logType = "Date";
						logColor = "yellow";
						data = formattedDate;
					} else {
						logType = Array.isArray(data) ? "Array" : "Object";
						logColor = Array.isArray(data) ? "cyan" : "blue";
						data = formatObject(data);
					}
					break;
				case "number":
					logType = "Number";
					logColor = "yellow";
					break;
				case "function":
					logType = "Function";
					logColor = "gray";
					data = data.toString();
					break;
				case "boolean":
					logType = "Boolean";
					logColor = "magenta";
					break;
				case "undefined":
					logType = "Undefined";
					logColor = "red";
					break;
				default:
					throw new Error("Unsupported data type");
			}
			let color = pref.color ? logColor : "gray";
			let type = pref.type ? `${logType}: ` : "";
			array.push(chalk[color](`${type}${data}`));
		});
		let newLine = pref.newLine ? "\n" : ", ";
		console.log(array.join(newLine));
	} catch (error) {
		logError(error, data);
	}
}

log(
	"Test Output.",
	[1, 2, 3],
	42,
	true,
	{},
	undefined,
	new Date(),
	function () {
		console.log("Hello!");
	}
);