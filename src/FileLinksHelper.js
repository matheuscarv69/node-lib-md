import fs from 'fs';
import chalk from 'chalk';


async function readAndGetLinksOfFile(filePath) {

  const text = await readFile(filePath)

  const linksResult = toExtractLinks(text)

  return linksResult

}

async function readFile(path) {
  const encoding = "utf8"

  try {

    const result = await fs.promises.readFile(path, encoding)

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

    return results
}

function handleError(error) {

  throw new Error(chalk.red(error.code, "No such file or directory"))

}


export default readAndGetLinksOfFile