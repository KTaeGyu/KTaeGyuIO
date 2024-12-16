import React from "react"
import styled from "styled-components"
import { usePrimarySideBarContext } from "../../../../../contexts/PrimarySideBarCotext"
import { ActivityItemType } from "./ActivityItem.interface"
import S from "./ActivityItem.styles"

export default function ActivityItem({ title, Icon }: ActivityItemType) {
  const { state, setState } = usePrimarySideBarContext()
  const selected = title === state
  const onClick = () => {
    setState(selected ? null : title)
  }
  const StyledIcon = styled(Icon)``

  return (
    <S.Container selected={selected} onClick={onClick}>
      <S.Highlight selected={selected} />
      <Icon />
    </S.Container>
  )
}
