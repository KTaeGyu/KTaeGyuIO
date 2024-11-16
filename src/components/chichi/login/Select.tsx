import React from "react"
import { ComponentProps } from "./Select.interface"
import S from "./Select.styles"

export default function Select({ options, selected }: ComponentProps) {
  return (
    <S.Container>
      {selected ? selected : "선택해주세요"}
      <S.Chevron />
    </S.Container>
  )
}
