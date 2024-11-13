import React, { useState } from "react"
import S from "./HambergurMenu.styles"
import HamburgerMenuItem from "./HamburgerMenuItem"
import ItemS from "./MenuItem.styles"
import C from "./Menus.constant"

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false)
  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <S.Container>
      <ItemS.Container onClick={toggleOpen}>
        <S.HamburgerIcon />
        <S.MoreIcon />
      </ItemS.Container>
      <S.Menus>
        {C.Menus.map((menu, idx) => (
          <HamburgerMenuItem key={idx} {...menu} />
        ))}
      </S.Menus>
    </S.Container>
  )
}
