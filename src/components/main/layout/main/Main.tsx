import React, { PropsWithChildren } from "react"
import { useFoldersContext } from "../../../../contexts/FoldersContext"
import { useLayoutContext } from "../../../../contexts/LayoutContext"
import S from "./Main.styles"
import Shortcuts from "./Shortcuts"
import Tabs from "./Tabs"

export default function Main({ children }: PropsWithChildren) {
  const { state, getItem } = useLayoutContext()
  const { openEditors } = useFoldersContext()
  const PSB_isOpen = getItem(state.layouts, "Primary Side Bar").checked
  const pannelIsOpen = getItem(state.layouts, "Pannel").checked

  return (
    <S.Container $primarySideBar={PSB_isOpen} $pannel={pannelIsOpen}>
      {openEditors.length ? <Tabs /> : null}
      {openEditors.length ? (
        children
      ) : (
        <S.Box>
          <S.Logo src="/images/charactor_s_romobedetail.png" />
          <Shortcuts />
        </S.Box>
      )}
    </S.Container>
  )
}
