import { axios } from "axios"

export default async function getExistingAuthor(authorId: string) {
  // config
  const url = `https://api.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries/${authorId}`
  const headers = {
    Authorization: `Bearer ${process.env.CONTENTFUL_MANAGEMENT_TOKEN}`,
    "Content-Type": "application/vnd.contentful.management.v1+json",
  }
  // request
  const response = await axios.get(url, { headers })
  // response
  const fields = response.data.fields
  const currentVersion = response.data.sys.version
  // result
  return { fields, currentVersion }
}
