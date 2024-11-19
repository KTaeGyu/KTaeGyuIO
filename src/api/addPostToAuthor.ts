import axios from "axios"
import getExistingPosted from "./getexistingPosted"

export default async function addPostToAuthor(
  authorId: string,
  postId: string
) {
  // pre request
  const result = await getExistingPosted(authorId)
  if (!result) throw new Error("Cannot Get Existing Posted")
  // config
  const url = `https://api.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries/${authorId}`
  const updatedPosted = [
    ...result.existingPosted,
    {
      sys: {
        type: "Link",
        linkType: "Entry",
        id: postId,
      },
    },
  ]
  const updatedData = {
    fields: {
      posted: {
        "ko-KR": updatedPosted,
      },
    },
  }
  const headers = {
    Authorization: `Bearer ${process.env.CONTENTFUL_MANAGEMENT_TOKEN}`,
    "Content-Type": "application/vnd.contentful.management.v1+json",
    "X-Contentful-Version": result.currentVersion,
  }
  // request
  const updateResponse = await axios.put(url, updatedData, { headers })
  // result
  console.log("Author updated with new post:", updateResponse.data)
}
