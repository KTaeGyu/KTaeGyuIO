import React from "react"
import IconPath from "../../../../../assets/iconPath"
import { useAppDispatch, useAppSelector } from "../../../../../state/hooks"
import {
  selectLayouts,
  setLayoutsChecked,
} from "../../../../../state/slices/layoutSlice"
import LayoutItem from "./LayoutItem"
import ItemS from "./LayoutItem.styles"
import S from "./Layouts.styles"

export default function Layouts() {
  const dispatch = useAppDispatch()
  const layouts = useAppSelector(selectLayouts) as LayoutItem<LayoutsTitle>[]
  const onClickItem = (idx: number) => (checked: boolean) => {
    dispatch(setLayoutsChecked({ idx, checked }))
  }

  return (
    <S.Container>
      <ItemS.Container $rotate={270}>
        <IconPath.LayoutSetting viewBox="0 0 24 24" />
      </ItemS.Container>
      {layouts.map(
        (layout, idx) =>
          !layout.disabled && (
            <LayoutItem key={idx} {...layout} onClick={onClickItem(idx)} />
          )
      )}
    </S.Container>
  )
}
