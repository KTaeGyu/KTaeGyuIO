import axios from "axios"
import addPostToAuthor from "./addPostToAuthor"
import publishContent from "./publishContent"

export interface PostData {
  title: string
  description: string
  readerId: string
  authorId: string
  imgPath: string
}

export default async function createPost(postData: PostData) {
  try {
    // config
    const url = `https://api.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries`
    const data = {
      fields: {
        title: {
          "ko-KR": postData.title,
        },
        description: {
          "ko-KR": postData.description,
        },
        reader: {
          "ko-KR": {
            sys: {
              type: "Link",
              linkType: "Entry",
              id: postData.readerId,
            },
          },
        },
        author: {
          "ko-KR": {
            sys: {
              type: "Link",
              linkType: "Entry",
              id: postData.authorId,
            },
          },
        },
        imgPath: {
          "ko-KR": postData.imgPath,
        },
      },
    }
    const headers = {
      Authorization: `Bearer ${process.env.CONTENTFUL_MANAGEMENT_TOKEN}`,
      "Content-Type": "application/vnd.contentful.management.v1+json",
      "X-Contentful-Content-Type": "post",
    }
    // request
    const response = await axios.post(url, data, { headers })
    // post requests
    const createdPostId = response.data.sys.id
    await publishContent(createdPostId, response.data.sys.version)
    await addPostToAuthor(postData.readerId, createdPostId)
  } catch (error) {
    console.error("Error createing post:", error)
  }
}
