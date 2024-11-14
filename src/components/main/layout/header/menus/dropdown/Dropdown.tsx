import React from "react"
import { ComponentProps } from "./Dropdown.interface"
import S from "./Dropdown.styles"
import DropdownItem from "./DropdownItem"

export default function Dropdown({ subsets, position }: ComponentProps) {
  return (
    <S.Container position={position}>
      {subsets.map((menu, idx) => (
        <DropdownItem key={idx} {...menu} />
      ))}
    </S.Container>
  )
}
