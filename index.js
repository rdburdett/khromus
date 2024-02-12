import chalk from "chalk";

export default function log(...args) {
    args.forEach((data) => {
        let logColor;
        let type;
        switch (typeof data) {
            case "string":
                type = "String";
                logColor = "green";
                break;
            case "object":
                type = Array.isArray(data) ? "Array" : "Object";
                logColor = Array.isArray(data) ? "cyan" : "blue";
                if (Array.isArray(data)) {
                    data = `[${data.join(",")}]`; // Join array values with a comma
                } else {
                    data = JSON.stringify(data, null, 2); // Properly format objects
                }
                break;
            case "number":
                type = "Number";
                logColor = "yellow";
                break;
            case "boolean":
                type = "Boolean";
                logColor = "magenta";
                break;
            default:
                type = "Undefined/Error";
                logColor = "red";
                break;
        }
        console.log(chalk[logColor](`${type}: \n${data}\n`));
    });
}

log("Test Output.", [1, 2, 3], 42, true, undefined);
