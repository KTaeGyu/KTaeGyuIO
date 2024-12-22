import React from "react"
import S from "./Header.styles"
import Options from "./options/Options"
import Tabs from "./tabs/Tabs"

export default function Header() {
  return (
    <S.Container>
      <Tabs />
      <Options />
    </S.Container>
  )
}
