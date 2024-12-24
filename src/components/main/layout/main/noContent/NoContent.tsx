import React from "react"
import S from "./NoContent.styles"
import Shortcuts from "./Shortcuts"

export default function NoContent() {
  return (
    <S.Container>
      <S.Logo src="/images/charactor_s_romobedetail.png" />
      <Shortcuts />
    </S.Container>
  )
}
