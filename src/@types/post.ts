interface Post {
  id: string
  title: string
  description: {
    description: string
  }
  publishedAt: string
  author: Author
  reader: Author
  imgPath: string
}
