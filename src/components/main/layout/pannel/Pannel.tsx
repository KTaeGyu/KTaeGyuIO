import React from "react"
import { useLayoutContext } from "../../../../contexts/LayoutContext"
import S from "./Pannel.styles"
import Content from "./content/Content"
import Header from "./header/Header"

export default function Pannel() {
  const { state, getItem } = useLayoutContext()
  const isOpen = getItem(state.layouts, "Pannel").checked
  const PSB_isOpen = getItem(state.layouts, "Primary Side Bar").checked

  return isOpen ? (
    <S.Container $primarySideBar={PSB_isOpen}>
      <Header />
      <Content />
    </S.Container>
  ) : null
}
