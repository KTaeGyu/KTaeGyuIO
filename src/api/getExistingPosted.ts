import axios from "axios"

export default async function getExistingPosted(authorId: string) {
  // config
  const url = `https://api.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries/${authorId}`
  const headers = {
    Authorization: `Bearer ${process.env.CONTENTFUL_MANAGEMENT_TOKEN}`,
    "Content-Type": "application/vnd.contentful.management.v1+json",
  }
  // request
  const authorResponse = await axios.get(url, { headers })
  // response
  const currentVersion = authorResponse.data.sys.version
  const existingPosted = authorResponse.data.fields.posted?.["ko-KR"] || []
  // result
  return { existingPosted, currentVersion }
}
