import React from "react"
import { MenuItemType } from "./MenuItem.interface"
import S from "./MenuItem.styles"

export default function MenuItem({ text, media }: MenuItemType) {
  return (
    <S.Container media={media}>
      <S.Text>{text}</S.Text>
    </S.Container>
  )
}
