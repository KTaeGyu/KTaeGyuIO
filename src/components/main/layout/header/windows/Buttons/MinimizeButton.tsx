import React from "react"
import IconPath from "../../../../../../assets/iconPath"
import S from "./Buttons.styles"

export default function MinimizeButton() {
  return (
    <S.Button>
      <IconPath.WindowMinimize />
    </S.Button>
  )
}
