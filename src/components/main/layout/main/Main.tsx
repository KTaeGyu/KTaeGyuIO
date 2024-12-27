import React, { PropsWithChildren } from "react"
import { useAppSelector } from "../../../../state/hooks"
import { selectOpenEditors } from "../../../../state/slices/folderSlice"
import {
  selectPannelIsOpen,
  selectPsbIsOpen,
} from "../../../../state/slices/layoutSlice"
import S from "./Main.styles"
import NoContent from "./noContent/NoContent"
import Tabs from "./tabs/Tabs"

export default function Main({ children }: PropsWithChildren) {
  const openEditors = useAppSelector(selectOpenEditors)
  const PSB_isOpen = useAppSelector(selectPsbIsOpen)
  const pannelIsOpen = useAppSelector(selectPannelIsOpen)

  return (
    <S.Container $primarySideBar={PSB_isOpen} $pannel={pannelIsOpen}>
      {openEditors.length ? <Tabs /> : null}
      {openEditors.length ? children : <NoContent />}
    </S.Container>
  )
}
