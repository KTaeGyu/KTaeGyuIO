import React from "react"
import IconPath from "../../../../../assets/iconPath"
import { usePrimarySideBarContext } from "../../../../../contexts/PrimarySideBarCotext"
import { ComponentProps } from "./ActivityItem.interface"
import S from "./ActivityItem.styles"

export default function ActivityItem({ title }: ComponentProps) {
  const Icon = IconPath[title]
  const { state, onClickActivity } = usePrimarySideBarContext()
  const selected = state === title

  return (
    <S.Container $selected={selected} onClick={() => onClickActivity(title)}>
      <Icon viewBox="0 0 24 24" />
    </S.Container>
  )
}
