import React from "react"
import S from "./ButtonItem.styles"
import { Button } from "./Buttons.interface"

export default function ButtonItem({ text }: Button) {
  return <S.Container>{text && <S.Text>{text}</S.Text>}</S.Container>
}
