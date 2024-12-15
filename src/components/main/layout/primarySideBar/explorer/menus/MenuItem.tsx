import React from "react"
import IconPath from "../../../../../../assets/iconPath"
import { ExplorerMoreItem } from "../Explorer.interface"
import Content from "./Content"
import S from "./MenuItem.styles"

export default function MenuItem({ text }: ExplorerMoreItem) {
  const title = text === "Folders" ? "KTaeGyuIO" : text

  return (
    <S.Container>
      <S.TitleBox>
        <IconPath.Chevron />
        <S.Title>{title.toUpperCase()}</S.Title>
      </S.TitleBox>
      <Content type={text} />
    </S.Container>
  )
}
