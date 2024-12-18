import React from "react"
import { ComponentProps } from "./DropdownGroup.interface"
import S from "./DropdownGroup.styles"
import DropdownItem from "./DropdownItem"

export default function DropdownGrop({
  subset,
  isEnd,
  ...select
}: ComponentProps) {
  return (
    <S.Container $isEnd={isEnd}>
      {subset.map((item) => (
        <DropdownItem key={item.title} {...item} {...select} />
      ))}
    </S.Container>
  )
}
