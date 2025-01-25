import React, { PropsWithChildren } from "react"
import useIsUseRoute from "../../../../hooks/useIsUseRoute"
import { useAppSelector } from "../../../../state/hooks"
import { selectOpenEditors } from "../../../../state/slices/folderSlice"
import {
  selectPannelIsOpen,
  selectPsbIsOpen,
} from "../../../../state/slices/layoutSlice"
import S from "./Main.styles"
import NoContent from "./noContent/NoContent"
import Route from "./route/Route"
import Tabs from "./tabs/Tabs"

export default function Main({ children }: PropsWithChildren) {
  const openEditors = useAppSelector(selectOpenEditors)
  const PSB_isOpen = useAppSelector(selectPsbIsOpen)
  const pannelIsOpen = useAppSelector(selectPannelIsOpen)
  const isUseRoute = useIsUseRoute()

  return (
    <S.Container $primarySideBar={PSB_isOpen} $pannel={pannelIsOpen}>
      {openEditors.length ? <Tabs /> : null}
      {openEditors.length && isUseRoute ? <Route /> : null}
      {openEditors.length ? children : <NoContent />}
    </S.Container>
  )
}
