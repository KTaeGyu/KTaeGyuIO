import React from "react"
import { usePannelContext } from "../../../../../contexts/PannelContext"
import { usePrimarySideBarContext } from "../../../../../contexts/PrimarySideBarCotext"
import { LayoutItemType } from "./LayoutItem.interface"
import S from "./LayoutItem.styles"

export default function LayoutItem({ rotate, title }: LayoutItemType) {
  const { state: PSB_State, setState: setPrimarySideBarState } =
    usePrimarySideBarContext()
  const { state: P_State, setState: setPannelState } = usePannelContext()

  const disabled =
    title === "Primary Side Bar"
      ? !PSB_State
      : title === "Pannel"
      ? !P_State
      : true

  const onClick = () => {
    if (title === "Primary Side Bar")
      setPrimarySideBarState(PSB_State ? null : "Explorer")
    if (title === "Pannel") setPannelState(!P_State)
  }

  return (
    <S.Container onClick={onClick}>
      <S.LayoutIcon rotate={rotate} disabled={disabled} />
    </S.Container>
  )
}
