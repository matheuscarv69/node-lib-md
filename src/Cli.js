import chalk from 'chalk'
import fs from 'fs'
import readAndGetLinksOfFile from "./FileLinksHelper.js"

const consoleArguments = process.argv

// This second position of consoleArguments contains our path of text or directory
const path = consoleArguments[2]

processText(path)


async function processText(path) {

  if (fs.statSync(path).isFile()) {

    const listLinks = await readAndGetLinksOfFile(path)
    printListLinks(listLinks)

  }

  if (fs.statSync(path).isDirectory()) {

    const files = await fs.promises.readdir(path)

    files.forEach(async (fileName) => {

      const listLinks = await readAndGetLinksOfFile(`${path}/${fileName}`)
      printListLinks(listLinks)

    })

  }

}

function printListLinks(links) {

  console.log(chalk.yellow("Listing Links: "), links);

}