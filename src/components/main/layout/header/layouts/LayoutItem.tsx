import React from "react"
import { LayoutItemType } from "./LayoutItem.interface"
import S from "./LayoutItem.styles"

export default function LayoutItem({ rotate }: LayoutItemType) {
  return (
    <S.Container>
      <S.LayoutIcon rotate={rotate} />
    </S.Container>
  )
}
