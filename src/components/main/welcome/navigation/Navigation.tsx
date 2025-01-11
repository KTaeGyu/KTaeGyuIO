import React from "react"
import S from "../Content.styles"
import Indexes from "./index/Indexes"
import OuterLinks from "./outerLink/OuterLinks"

export default function Navigation() {
  return (
    <S.Wrapper>
      <Indexes />
      <OuterLinks />
    </S.Wrapper>
  )
}
