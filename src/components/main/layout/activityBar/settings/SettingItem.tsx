import React from "react"
import { ActivityItemType } from "../activities/ActivityItem.interface"
import S from "./SettingItem.styles"

export default function SettingItem({ Icon }: ActivityItemType) {
  return (
    <S.Container>
      <Icon />
    </S.Container>
  )
}
