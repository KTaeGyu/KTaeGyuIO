import React from "react"
import PROJECT_NAME from "../../../../../constants/projectName"
import S from "./SearchBar.styles"

export default function SearchBar() {
  return (
    <S.Container>
      <S.SearchIcon viewBox="0 0 24 24" />
      <S.Title>{PROJECT_NAME}</S.Title>
    </S.Container>
  )
}
