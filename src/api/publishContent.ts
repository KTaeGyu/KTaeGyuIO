import axios from "axios"

export default async function publishContent(postId: string, version: string) {
  try {
    // config
    const url = `https://api.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries/${postId}/published`
    const data = {}
    const headers = {
      Authorization: `Bearer ${process.env.CONTENTFUL_MANAGEMENT_TOKEN}`,
      "Content-Type": "application/vnd.contentful.management.v1+json",
      "X-Contentful-Version": version,
    }
    // request
    await axios.put(url, data, { headers })
  } catch (error) {
    console.error("Error publish content:", error)
  }
}
