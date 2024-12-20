import React from "react"
import IconPath from "../../../../../../assets/iconPath"
import S from "./Buttons.styles"

export default function MinimizeButton() {
  return (
    <S.Button>
      <IconPath.WindowMinimize viewBox="0 0 24 24" />
    </S.Button>
  )
}
