import React from "react"
import { usePrimarySideBarConext } from "../../../../../contexts/PrimarySideBarCotext"
import { ActivityItemType } from "./ActivityItem.interface"
import S from "./ActivityItem.styles"

export default function ActivityItem({ title, Icon }: ActivityItemType) {
  const { state, setState } = usePrimarySideBarConext()
  const selected = title === state
  const onClick = () => {
    setState(selected ? null : title)
  }

  return (
    <S.Container selected={selected} onClick={onClick}>
      <Icon />
    </S.Container>
  )
}
