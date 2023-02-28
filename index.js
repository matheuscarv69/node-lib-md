import fs from 'fs';
import chalk from 'chalk';


const text = await readFile("./arquivos/texto.md")
console.log("\n");

toExtractLinks(text)

async function readFile(path) {
  const encoding = "utf8"

  try {

    const result = await fs.promises.readFile(path, encoding)
    // console.log(chalk.white(result));

    return result;

  } catch (error) {
    handleError(error)
  }

}

async function toExtractLinks(textSource) {
  textSource = String(textSource)

  const regex = /\[([^\[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm

  // match all return iterators, then I use spread operator to separate each one in a array
  const filteredTexts = [...textSource.matchAll(regex)]

  const results = filteredTexts.map(filteredText =>
  (
    {
      [filteredText[1]]: filteredText[2]
    }
  ))

  console.log(results)
}

function handleError(error) {

  throw new Error(chalk.red(error.code, "No such file or directory"))

}