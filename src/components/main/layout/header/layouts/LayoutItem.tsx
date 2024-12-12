import React from "react"
import { usePannelConext } from "../../../../../contexts/PannelContext"
import { usePrimarySideBarConext } from "../../../../../contexts/PrimarySideBarCotext"
import { LayoutItemType } from "./LayoutItem.interface"
import S from "./LayoutItem.styles"

export default function LayoutItem({ rotate, title }: LayoutItemType) {
  const { state: primarySideBarState, setState: setPrimarySideBarState } =
    usePrimarySideBarConext()
  const { state: pannelState, setState: setPannelState } = usePannelConext()

  const disabled =
    title === "Primary Side Bar"
      ? !primarySideBarState
      : title === "Pannel"
      ? !pannelState
      : true

  const onClick = () => {
    if (title === "Primary Side Bar")
      setPrimarySideBarState(primarySideBarState ? null : "Explorer")
    if (title === "Pannel") setPannelState(!pannelState)
  }

  return (
    <S.Container onClick={onClick}>
      <S.LayoutIcon rotate={rotate} disabled={disabled} />
    </S.Container>
  )
}
