import React from "react"
import MenuItem from "./MenuItem"
import { ComponentProps } from "./Menus.interface"
import S from "./Menus.styles"

export default function Menus({ items }: ComponentProps) {
  return (
    <S.Container>
      {items.map((item) =>
        item.checked ? <MenuItem key={item.text} {...item} /> : null
      )}
    </S.Container>
  )
}
