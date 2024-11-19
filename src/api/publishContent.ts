import axios from "axios"

export interface PostData {
  title: string
  description: string
  readerId: string
  authorId: string
  imgPath: string
}

export default async function publishContent(postId: string, version: string) {
  // config
  const url = `https://api.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries/${postId}/published`
  const data = {}
  const headers = {
    Authorization: `Bearer ${process.env.CONTENTFUL_MANAGEMENT_TOKEN}`,
    "Content-Type": "application/vnd.contentful.management.v1+json",
    "X-Contentful-Version": version,
  }
  // request
  const response = await axios.put(url, data, { headers })
  // result
  console.log("Post published successfully:", response)
}
