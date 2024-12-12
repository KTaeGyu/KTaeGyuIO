import React from "react"
import useDropdown from "../../../../hooks/useDropdown"
import Dropdown from "../dropdown/Dropdown"
import { ComponentProps } from "./More.interface"
import S from "./More.styles"

export default function More({ items }: ComponentProps) {
  const { ref, isOpen, toggleOpen } = useDropdown()

  return (
    <S.Container ref={ref}>
      <S.Button className={isOpen ? "active" : ""} onClick={toggleOpen}>
        <S.Icon />
      </S.Button>
      {isOpen && <Dropdown subsets={items} position="down" />}
    </S.Container>
  )
}
