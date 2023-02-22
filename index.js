import fs from 'fs';
import chalk from 'chalk';


readFile("./arquivos/texto.md")


function readFile(path) {
  const encoding = "utf8"

  fs.readFile(path, encoding, (_, text) => {
    console.log(chalk.green(text))
  })

}