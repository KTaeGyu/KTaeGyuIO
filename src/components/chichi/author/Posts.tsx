import React from "react"
import { ComponentProps } from "./Posts.interface"
import S from "./Posts.styles"

export default function Posts({ posts, isMe, onClick }: ComponentProps) {
  // 데이터 row 별로 나누기
  const rows = () => {
    let result: (Post | null)[][] = []
    if (!posts?.length) return result
    let chunkSize = 1
    for (let i = 0; i < posts.length; i += chunkSize - 1) {
      result.push(posts.slice(i, i + chunkSize))
      chunkSize = chunkSize + 1
    }
    return result
  }

  return (
    <S.Wrapper>
      <S.Container>
        {rows().map((row) => (
          <S.Row>
            {row?.map(({ id, imgPath, title }) => (
              <S.Cell key={id} onClick={isMe ? () => onClick(id) : undefined}>
                <S.Decoration src={imgPath} alt={title} />
              </S.Cell>
            ))}
          </S.Row>
        ))}
      </S.Container>
    </S.Wrapper>
  )
}
