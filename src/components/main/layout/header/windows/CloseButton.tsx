import React from "react"
import IconPath from "../../../../../assets/iconPath"
import S from "./Button.styles"

export default function CloseButton() {
  // 나중에 바탕화면처럼 만들고 창을 새로 열도록 해서 구현하기

  return (
    <S.CloseButton>
      <IconPath.WindowClose />
    </S.CloseButton>
  )
}
