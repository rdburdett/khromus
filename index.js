import chalk from "chalk";

export default function log(data) {
    console.log((chalk.magenta(data)))
}

log('Hi')