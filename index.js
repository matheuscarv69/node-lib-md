import fs from 'fs';
import chalk from 'chalk';


readFile("./arquivos/texto.md")

async function readFile(path) {
  const encoding = "utf8"

  try {

    const result = await fs.promises.readFile(path, encoding)
    console.log(chalk.green(result));

  } catch (error) {
    handleError(error)
  }

}

function handleError(error) {
  // console.log(error);
  throw new Error(chalk.red(error.code, "No such file or directory"))

}