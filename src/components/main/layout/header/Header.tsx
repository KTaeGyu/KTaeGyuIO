import React from "react"
import S from "./Header.styles"
import Menus from "./menus/Menus"
import Navigation from "./navigation/Navigation"
import SearchBar from "./searchBar/SearchBar"

export default function Header() {
  return (
    <S.Container>
      <S.Logo src="/images/charactor_s_removebg.png" />
      <Menus />
      <Navigation />
      <SearchBar />
      <S.Space />
    </S.Container>
  )
}
