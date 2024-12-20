import React from "react"
import MenuItem from "./MenuItem"
import { ComponentProps } from "./Menus.interface"
import S from "./Menus.styles"

export default function Menus({ items }: ComponentProps) {
  const checkedItem = items.filter((item) => item.checked)

  return (
    <S.Container>
      {checkedItem.map((item, idx) => (
        <MenuItem key={item.title} isFirst={!idx} {...item} />
      ))}
    </S.Container>
  )
}
