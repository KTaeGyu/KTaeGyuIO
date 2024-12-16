import React from "react"
import { SettingItemType } from "./SettingItem.interface"
import S from "./SettingItem.styles"

export default function SettingItem({ Icon }: SettingItemType) {
  return (
    <S.Container>
      <Icon />
    </S.Container>
  )
}
