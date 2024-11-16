import React from "react"
import useDropdown from "../../../../../hooks/useDropdown"
import Dropdown from "./dropdown/Dropdown"
import S from "./HambergurMenu.styles"
import ItemS from "./MenuItem.styles"
import C from "./Menus.constant"

export default function HamburgerMenu() {
  const { ref, isOpen, toggleOpen } = useDropdown()

  return (
    <S.Container ref={ref}>
      <ItemS.Container className={isOpen ? "active" : ""} onClick={toggleOpen}>
        <S.HamburgerIcon />
        <S.MoreIcon />
      </ItemS.Container>
      {isOpen && <Dropdown subsets={C.Menus} position="down" />}
    </S.Container>
  )
}
