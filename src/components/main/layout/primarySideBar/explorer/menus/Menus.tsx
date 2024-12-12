import React from "react"
import { ComponentProps } from "./Menus.interface"
import S from "./Menus.styles"
import MenusItem from "./MenusItem"

export default function Menus({ items }: ComponentProps) {
  return (
    <S.Container>
      {items.map((item) =>
        item.checked ? <MenusItem key={item.text} {...item} /> : null
      )}
    </S.Container>
  )
}
