import React from "react"
import IconPath from "../../../../../assets/iconPath"
import S from "./Button.styles"

export default function MinimizeButton() {
  return (
    <S.Button>
      <IconPath.WindowMinimize />
    </S.Button>
  )
}
