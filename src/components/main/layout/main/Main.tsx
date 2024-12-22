import React, { PropsWithChildren } from "react"
import { useLayoutContext } from "../../../../contexts/LayoutContext"
import S from "./Main.styles"

export default function Main({ children }: PropsWithChildren) {
  const { state, getItem } = useLayoutContext()
  const PSB_isOpen = getItem(state.layouts, "Primary Side Bar").checked
  const pannelIsOpen = getItem(state.layouts, "Pannel").checked

  return (
    <S.Container $primarySideBar={PSB_isOpen} $pannel={pannelIsOpen}>
      {children}
    </S.Container>
  )
}
