import fs from 'fs';
import chalk from 'chalk';


readFile("./arquivos/texto.md")


function readFile(path) {

  const encoding = "utf8";

  fs.promises
    .readFile(path, encoding)
    .then((text) => console.log(chalk.green(text)))
    .catch(handleError(error))

}

function handleError(error) {

  throw new Error(chalk.red(error.code, "No suce file or directory"))

}