import React from "react"
import IconPath from "../../../../../assets/iconPath"
import { ROTATE } from "./LayoutItem.constant"
import { ComponentProps } from "./LayoutItem.interface"
import S from "./LayoutItem.styles"

export default function LayoutItem({
  title,
  onClick,
  checked,
}: ComponentProps) {
  return (
    <S.Container onClick={onClick} $rotate={ROTATE[title]} $checked={checked}>
      <IconPath.Layout viewBox="0 0 24 24" />
    </S.Container>
  )
}
