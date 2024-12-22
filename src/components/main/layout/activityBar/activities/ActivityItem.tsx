import React from "react"
import IconPath from "../../../../../assets/iconPath"
import { useLayoutContext } from "../../../../../contexts/LayoutContext"
import { ComponentProps } from "./ActivityItem.interface"
import S from "./ActivityItem.styles"

export default function ActivityItem({ title }: ComponentProps) {
  const Icon = IconPath[title]
  const { state, getItem, setState } = useLayoutContext()
  const isOpen = getItem(state.layouts, "Primary Side Bar").checked
  const selected = state.primarySideBar === title && isOpen
  const onClick = () => {
    setState.setPrimarySideBar(title)
  }

  return (
    <S.Container $selected={selected} onClick={onClick}>
      <Icon viewBox="0 0 24 24" />
    </S.Container>
  )
}
