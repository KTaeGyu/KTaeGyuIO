import React from "react"
import S from "./Header.styles"
import Layouts from "./layouts/Layouts"
import Menus from "./menus/Menus"
import Navigation from "./navigation/Navigation"
import SearchBar from "./searchBar/SearchBar"
import Windows from "./windows/Windows"

export default function Header() {
  return (
    <S.Container>
      <S.Left>
        <S.Logo src="/images/charactor_s_removebg.png" />
        <Menus />
      </S.Left>
      <S.Center>
        <Navigation />
        <SearchBar />
      </S.Center>
      <S.Right>
        <Layouts />
        <Windows />
      </S.Right>
    </S.Container>
  )
}
