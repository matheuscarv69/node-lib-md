import chalk from 'chalk'
import fs from 'fs'
import readAndGetLinksOfFile from "./FileLinksHelper.js"
import validateLinks from "./HttpValidationHelper.js"

const consoleArguments = process.argv

processText(consoleArguments)


async function processText(consoleArguments) {

  const path = consoleArguments[2]
  const toValidate = consoleArguments[3]

  try {
    fs.statSync(path)
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log(chalk.red("No such file or directory"));
    }
    return
  }

  if (fs.statSync(path).isFile()) {

    const listLinks = await readAndGetLinksOfFile(path)
    printListLinks(toValidate, listLinks)

  }

  if (fs.statSync(path).isDirectory()) {

    const files = await fs.promises.readdir(path)

    files.forEach(async (fileName) => {

      const listLinks = await readAndGetLinksOfFile(`${path}/${fileName}`)
      printListLinks(toValidate, listLinks, fileName)

    })

  }

}

async function printListLinks(validate, links, fileName = '') {

  if (validate) {

    const validatedLinks = await validateLinks(links)

    console.log(
      chalk.yellow("Listing Validated Links: "),
      chalk.black.bgBlue(fileName),
      validatedLinks
    )

    return;

  }

  console.log(
    chalk.yellow("Listing Validated Links: "),
    chalk.black.bgGreen(fileName),
    links
  )

}
