import React from "react"
import S from "../Header.styles"

export default function Header() {
  return (
    <S.Container>
      <S.Title>
        내 <S.Green>트리</S.Green>를 꾸며줘
      </S.Title>
      <S.Description>
        한 해동안 고생한 치치들!
        <br />
        서로에게 응원의 한마디를 남겨주세요!
      </S.Description>
    </S.Container>
  )
}
