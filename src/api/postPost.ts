import axios from "axios"

export interface PostData {
  title: string
  description: string
  readerId: string
  authorId: string
  imgPath: string
}

export default async function createPost(postData: PostData) {
  try {
    console.log(process.env)

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
      contentType: "post",
    }
    const headers = {
      Authorization: `Bearer ${process.env.CONTENTFUL_MANAGEMENT_TOKEN}`,
      "Content-Type": "application/vnd.contentful.management.v1+json",
    }

    const response = await axios.post(url, data, { headers })
    console.log("Post created successfully:", response.data)
    return true
  } catch (error) {
    console.error("Error creating post:", error.response?.data || error.message)
    return false
  }
}
