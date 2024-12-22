import React, { useState } from "react"
import PROJECT_NAME from "../../../../../../constants/projectName"
import Content from "./Content"
import { ComponentProps } from "./MenuItem.interface"
import S from "./MenuItem.styles"

export default function MenuItem({ title, isFirst }: ComponentProps) {
  const isFolder = title === "Folders"
  const filteredTitle = isFolder ? PROJECT_NAME : title
  const [isOpen, setIsOpen] = useState(isFolder)

  return (
    <S.Container $isFirst={isFirst} $isFolder={isFolder} $isOpen={isOpen}>
      <S.TitleBox onClick={() => setIsOpen(!isOpen)}>
        <S.ChevronIcon $isOpen={isOpen} viewBox="0 0 24 24" />
        <S.Title>{filteredTitle.toUpperCase()}</S.Title>
      </S.TitleBox>
      {isOpen && <Content type={title} />}
    </S.Container>
  )
}
