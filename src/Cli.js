import readAndGetLinksOfFile from "./FileLinksHelper.js"

const consoleArgsArray = process.argv 

// This second position of consoleArgsArray contains our filePath of text file md
const filePath = consoleArgsArray[2]

const linksResult = await readAndGetLinksOfFile(filePath)

console.log(linksResult)