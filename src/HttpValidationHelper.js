
function toExtractLinks(linkList) {

  return linkList.map((linkObject) => Object.values(linkObject).join())

}

async function toCheckStatusOfLinks(urlList) {

  const statusUrlArray = await Promise.all(
    urlList.map(async (url) => {

      const response = await fetch(url)
      return response.status

    })
  )

  return statusUrlArray

}

export default async function validateLinks(linkList) {

  const urlList = toExtractLinks(linkList)
  const status = await toCheckStatusOfLinks(urlList)

  return linkList.map((linkObject, index) => ({
    ...linkObject, // using spread operator for to populate the new object ({}) created in map
    status: status[index]
  }))

}
