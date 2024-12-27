import React from "react"
import { useAppDispatch, useAppSelector } from "../../../../../../state/hooks"
import {
  selectPannel,
  setPannel,
} from "../../../../../../state/slices/layoutSlice"
import S from "./Tab.styles"

export default function Tab({ title }: LayoutItem<PannelTabTitle>) {
  const disaptch = useAppDispatch()
  const pannel = useAppSelector(selectPannel)
  const isSelect = pannel === title

  return (
    <S.Container
      $isSelect={isSelect}
      onClick={() => disaptch(setPannel(title))}
    >
      <S.Title $isSelect={isSelect}>{title.toUpperCase()}</S.Title>
    </S.Container>
  )
}
