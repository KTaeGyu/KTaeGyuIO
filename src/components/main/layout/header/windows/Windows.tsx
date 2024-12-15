import React from "react"
import CloseButton from "./Buttons/CloseButton"
import MinimizeButton from "./Buttons/MinimizeButton"
import ResizeButton from "./Buttons/ResizeButton"
import S from "./Windows.styles"

export default function Windows() {
  return (
    <S.Container>
      <MinimizeButton />
      <ResizeButton />
      <CloseButton />
    </S.Container>
  )
}
