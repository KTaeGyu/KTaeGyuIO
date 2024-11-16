import React from "react"
import useDropdown from "../../../../../../hooks/useDropdown"
import Dropdown from "./Dropdown"
import { ComponentProps } from "./DropdownItem.interface"
import S from "./DropdownItem.styles"

export default function DropdownItem({
  text,
  media,
  subsets,
  onClick,
  position,
}: ComponentProps) {
  const { ref, isOpen, toggleOpen, onMouseEnter, onMouseLeave } = useDropdown()

  return (
    <S.Container
      ref={ref}
      media={media}
      className={isOpen ? "active" : ""}
      onClick={subsets ? toggleOpen : onClick}
      onMouseEnter={subsets && onMouseEnter}
      onMouseLeave={subsets && onMouseLeave}
    >
      <S.Text>{text}</S.Text>
      {subsets && <S.ChevronIcon />}
      {isOpen && <Dropdown subsets={subsets} position={position} />}
    </S.Container>
  )
}
