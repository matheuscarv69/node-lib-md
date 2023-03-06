import chalk from "chalk"

function toExtractLinks(linkList) {

  return linkList.map((linkObject) => Object.values(linkObject).join())

}

async function toCheckStatusOfLinks(urlList) {

  const statusUrlArray = await Promise.all(
    urlList.map(async (url) => {

      try {

        const response = await fetch(url)
        return `${response.status} - ${response.statusText}`

      } catch (error) {
        return handleError(error)
      }

    })
  )

  return statusUrlArray

}

function handleError(error) {

  if (error.cause.code === 'ENOTFOUND') {
    return 'Link not found'
  }

  return 'Ocurred something error'

}


export default async function validateLinks(linkList) {

  const urlList = toExtractLinks(linkList)
  const status = await toCheckStatusOfLinks(urlList)

  return linkList.map((linkObject, index) => ({
    ...linkObject, // using spread operator for to populate the new object ({}) created in map
    status: status[index]
  }))

}
