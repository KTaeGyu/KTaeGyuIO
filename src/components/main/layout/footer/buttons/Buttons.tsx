import React from "react"
import ButtonItem from "./ButtonItem"
import C from "./Buttons.constant"
import S from "./Buttons.styles"

export default function Buttons() {
  return (
    <S.Container>
      {C.BUTTONS.map((button, idx) => (
        <ButtonItem key={idx} {...button} />
      ))}
    </S.Container>
  )
}
