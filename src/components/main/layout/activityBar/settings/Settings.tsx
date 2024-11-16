import React from "react"
import SettingItem from "./SettingItem"
import C from "./Settings.constant"
import S from "./Settings.styles"

export default function Settings() {
  return (
    <S.Container>
      {C.Settings.map((setting, idx) => (
        <SettingItem key={idx} {...setting} />
      ))}
    </S.Container>
  )
}
