import fs from 'fs';
import chalk from 'chalk';


readFile("./arquivos/texto.md")


function readFile(path) {

  const encoding = "utf8"

  fs.readFile(path, encoding, (error, text) => {

    if (error) {
      handleError(error);
    }

    console.log(chalk.green(text))
  })

}

function handleError(error) {

  throw new Error(chalk.red(error.code, "No suce file or directory"))

}