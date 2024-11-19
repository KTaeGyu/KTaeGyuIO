import axios from "axios"

export default async function getAuthorByName(authorName: string) {
  try {
    const headers = {
      Authorization: `Bearer ${process.env.CONTENTFUL_MANAGEMENT_TOKEN}`,
      "Content-Type": "application/vnd.contentful.management.v1+json",
    }

    const searchUrl = `https://api.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?content_type=author&fields.name=${authorName}`

    const response = await axios.get(searchUrl, { headers })

    if (response.data.items.length === 0) {
      console.log("No author found with the provided name.")
      return null
    }

    const authorId = response.data.items[0].sys.id
    console.log("Found authorId:", authorId)
    return authorId
  } catch (error) {
    console.error(
      "Error fetching author by name:",
      error.response?.data || error.message
    )
    return null
  }
}
