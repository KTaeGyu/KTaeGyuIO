import React, { useState } from "react"
import { ExplorerMoreItem } from "../Explorer.interface"
import Content from "./Content"
import S from "./MenuItem.styles"

export default function MenuItem({ text, isFirst }: ExplorerMoreItem) {
  const isFolder = text === "Folders"
  const title = isFolder ? process.env.PROJECT_NAME : text
  const [isOpen, setIsOpen] = useState(isFolder)

  return (
    <S.Container $isfirst={isFirst}>
      <S.TitleBox onClick={() => setIsOpen(!isOpen)}>
        <S.ChevronIcon $isopen={isOpen} />
        <S.Title>{title.toUpperCase()}</S.Title>
      </S.TitleBox>
      {isOpen && <Content type={text} />}
    </S.Container>
  )
}
