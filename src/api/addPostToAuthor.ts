import axios from "axios"
import getExistingAuthor from "./getExistingAuthor"
import publishContent from "./publishContent"

export default async function addPostToAuthor(
  authorId: string,
  postId: string
) {
  try {
    // pre request
    const result = await getExistingAuthor(authorId)
    if (!result) throw new Error("Cannot Get Existing Posted")

    // config
    const url = `https://api.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries/${authorId}`
    const updatedPosted = result.fields.posted
      ? [
          ...result.fields.posted["ko-KR"],
          { sys: { type: "Link", linkType: "Entry", id: postId } },
        ]
      : [{ sys: { type: "Link", linkType: "Entry", id: postId } }]
    const data = {
      fields: {
        ...result.fields,
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
    const response = await axios.put(url, data, { headers })
    // post request
    await publishContent(authorId, response.data.sys.version)
  } catch (error) {
    console.error("Error updating author:", error)
  }
}
