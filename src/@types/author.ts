interface Author {
  id: string
  nickname: string
  name: string
  username: string
  password: string
  charactor: Media
  contentful_id: string
  posted?: Partial<Post>[]
}
