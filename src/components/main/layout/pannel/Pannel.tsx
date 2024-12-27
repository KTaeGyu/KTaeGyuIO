import React from "react"
import { useAppSelector } from "../../../../state/hooks"
import {
  selectPannelIsOpen,
  selectPsbIsOpen,
} from "../../../../state/slices/layoutSlice"
import S from "./Pannel.styles"
import Content from "./content/Content"
import Header from "./header/Header"

export default function Pannel() {
  const isOpen = useAppSelector(selectPannelIsOpen)
  const PSB_isOpen = useAppSelector(selectPsbIsOpen)

  return isOpen ? (
    <S.Container $primarySideBar={PSB_isOpen}>
      <Header />
      <Content />
    </S.Container>
  ) : null
}
