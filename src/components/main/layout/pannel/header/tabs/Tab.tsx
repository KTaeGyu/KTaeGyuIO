import React from "react"
import { useLayoutContext } from "../../../../../../contexts/LayoutContext"
import S from "./Tab.styles"

export default function Tab({ title }: LayoutItem<PannelTabTitle>) {
  const { state, setState } = useLayoutContext()
  const isSelect = state.pannel === title

  return (
    <S.Container $isSelect={isSelect} onClick={() => setState.setPannel(title)}>
      <S.Title $isSelect={isSelect}>{title.toUpperCase()}</S.Title>
    </S.Container>
  )
}
