import React from "react"
import IconPath from "../../../../../assets/iconPath"
import { SettingItemType } from "./SettingItem.interface"
import S from "./SettingItem.styles"

export default function SettingItem({ title }: SettingItemType) {
  const Icon = IconPath[title]

  return (
    <S.Container>
      <Icon />
    </S.Container>
  )
}
