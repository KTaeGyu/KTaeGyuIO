import React from "react"
import S from "../Header.styles"

export default function Header() {
  return (
    <>
      <S.Title>
        내 <S.Green>트리</S.Green>를 꾸며줘
      </S.Title>
      <S.Description>자신이 누구인지 선택해주세요</S.Description>
    </>
  )
}
