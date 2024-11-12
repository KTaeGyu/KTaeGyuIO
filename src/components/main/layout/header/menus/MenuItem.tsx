import React from "react"
import { MenuItemType } from "./MenuItem.interface"
import S from "./MenuItem.styles"

export default function MenuItem({ text }: MenuItemType) {
  return (
    <S.Container>
      <S.Text>{text}</S.Text>
    </S.Container>
  )
}
