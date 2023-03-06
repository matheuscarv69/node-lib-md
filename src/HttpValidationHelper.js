
function toExtractLinks(linkList) {

  return linkList.map((linkObject) => Object.values(linkObject).join())

}

export default function validateLinks(linkList) {

  return toExtractLinks(linkList)

}