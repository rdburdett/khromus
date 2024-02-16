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
	let outputGather = [];
	let pref = {
		type: true,
		color: true,
		newLine: true,
	};
	try {
		args.forEach((data) => {
			const dataType = typeof data;
			const typeMap = {
				string: {
					logType: "String",
					logColor: "green",
				},
				object: {
					logType: Array.isArray(data) ? "Array" : "Object",
					logColor: Array.isArray(data) ? "cyan" : "blue",
					data: formatObject(data),
				},
				number: {
					logType: "Number",
					logColor: "yellow",
				},
				function: {
					logType: "Function",
					logColor: "gray",
					data: data.toString(),
				},
				boolean: {
					logType: "Boolean",
					logColor: "magenta",
				},
				undefined: {
					logType: "Undefined",
					logColor: "red",
				},
			};

			const {
				logType,
				logColor,
				data: formattedData,
			} = typeMap[dataType] || {
				logType: "Unsupported",
				logColor: "red",
			};

			let color = pref.color ? logColor : "gray";
			let type = pref.type ? `${logType}: ` : "";

			outputGather.push(
				chalk[color](
					`${type}${
						formattedData !== undefined ? formattedData : data
					}`
				)
			);
		});
		console.log(outputGather.join(pref.newLine ? "\n" : ", "));
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
