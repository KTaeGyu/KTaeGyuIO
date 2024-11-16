import React from "react"
import useDropdown from "../../../../../hooks/useDropdown"
import Dropdown from "./dropdown/Dropdown"
import { MenuItemType } from "./MenuItem.interface"
import S from "./MenuItem.styles"

export default function MenuItem({
  text,
  media,
  subsets,
  onClick,
}: MenuItemType) {
  const { ref, isOpen, toggleOpen } = useDropdown()

  return (
    <S.Container
      ref={ref}
      media={media}
      className={isOpen ? "active" : ""}
      onClick={subsets ? toggleOpen : onClick}
    >
      <S.Text>{text}</S.Text>
      {isOpen && <Dropdown subsets={subsets} position="down" />}
    </S.Container>
  )
}
