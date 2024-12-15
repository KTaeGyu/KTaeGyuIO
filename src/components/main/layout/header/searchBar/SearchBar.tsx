import React from "react"
import S from "./SearchBar.styles"

export default function SearchBar() {
  return (
    <S.Container>
      <S.SearchIcon />
      <S.Title>{process.env.PROJECT_NAME}</S.Title>
    </S.Container>
  )
}
