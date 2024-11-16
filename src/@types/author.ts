interface Author {
  id: string
  nickname: string
  name: string
  username: string
  password: string
  charactor: Media
  posting?: Post[]
  posted?: Post[]
}
