import React from "react"
import useDropdown from "../../../../hooks/useDropdown"
import Dropdown from "../dropdown/Dropdown"
import { ComponentProps } from "./More.interface"
import S from "./More.styles"

export default function More({ items }: ComponentProps) {
  const { ref, isOpen, open } = useDropdown()

  return (
    <S.Container ref={ref}>
      <S.Button className={isOpen ? "active" : ""} onClick={open}>
        <S.Icon viewBox="0 0 28 16" />
      </S.Button>
      {isOpen && <Dropdown subsets={items} position="just-down" />}
    </S.Container>
  )
}
