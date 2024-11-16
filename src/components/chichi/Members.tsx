import React from "react"
import MemberItem from "./MemberItem"
import { ComponenetProps } from "./Members.interface"
import S from "./Members.styles"

export default function Members({ onClick, authors }: ComponenetProps) {
  return (
    <S.Container>
      {authors.map((author) => (
        <MemberItem
          key={author.username}
          onClick={() => onClick(author)}
          {...author}
        />
      ))}
    </S.Container>
  )
}
