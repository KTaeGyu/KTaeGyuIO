import React from "react"
import { ComponentProps } from "./ActivityItem.interface"
import S from "./ActivityItem.styles"

export default function ActivityItem({ selected, Icon }: ComponentProps) {
  return (
    <S.Container selected={selected}>
      <Icon />
    </S.Container>
  )
}
