import React from "react"
import CloseButton from "./CloseButton"
import MinimizeButton from "./MinimizeButton"
import ResizeButton from "./ResizeButton"
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
