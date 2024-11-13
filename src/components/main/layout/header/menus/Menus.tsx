import React from "react"
import HamburgerMenu from "./HamburgerMenu"
import MenuItem from "./MenuItem"
import C from "./Menus.constant"
import S from "./Menus.styles"

export default function Menus() {
  return (
    <S.Container>
      {C.Menus.map((menu, idx) => (
        <MenuItem key={idx} {...menu} />
      ))}
      <HamburgerMenu />
    </S.Container>
  )
}
