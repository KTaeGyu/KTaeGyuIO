import React, { PropsWithChildren } from "react"
import { useFoldersContext } from "../../../../contexts/FoldersContext"
import { useLayoutContext } from "../../../../contexts/LayoutContext"
import S from "./Main.styles"
import NoContent from "./noContent/NoContent"
import Tabs from "./tabs/Tabs"

export default function Main({ children }: PropsWithChildren) {
  const { state, getItem } = useLayoutContext()
  const { openEditors } = useFoldersContext()
  const PSB_isOpen = getItem(state.layouts, "Primary Side Bar").checked
  const pannelIsOpen = getItem(state.layouts, "Pannel").checked

  return (
    <S.Container $primarySideBar={PSB_isOpen} $pannel={pannelIsOpen}>
      {openEditors.length ? <Tabs /> : null}
      {openEditors.length ? children : <NoContent />}
    </S.Container>
  )
}
