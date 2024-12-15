import React from "react"
import PROJECT_NAME from "../../../../../constants/projectName"
import S from "./SearchBar.styles"

export default function SearchBar() {
  return (
    <S.Container>
      <S.SearchIcon />
      <S.Title>{PROJECT_NAME}</S.Title>
    </S.Container>
  )
}
