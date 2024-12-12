import React from "react"
import { MenuItemType } from "../../../header/menus/MenuItem.interface"
import S from "./MenusItem.styles"

export default function MenusItem({ text }: MenuItemType) {
  const title = text === "Folders" ? "KTaeGyuIO" : text

  return (
    <S.Container>
      <S.TitleBox>
        <S.ChevronIcon />
        <S.Title>{title.toUpperCase()}</S.Title>
      </S.TitleBox>
    </S.Container>
  )
}
