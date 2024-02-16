class dataIndex {
	constructor(data) {
		this.data = data;
	}

	logColor;
	logType;

	chooseType = (data) => {
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
	};
}

dataIndex.chooseType(data)