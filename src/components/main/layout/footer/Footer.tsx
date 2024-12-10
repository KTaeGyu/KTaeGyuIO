import React from "react"
import Buttons from "./buttons/Buttons"
import S from "./Footer.styles"
import RemoteWindow from "./remoteWindow/RemoteWindow"

export default function Footer() {
  return (
    <S.Container>
      <RemoteWindow />
      <Buttons />
    </S.Container>
  )
}
