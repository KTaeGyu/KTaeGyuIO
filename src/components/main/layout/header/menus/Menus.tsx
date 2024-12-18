import React from "react"
import { useLayoutContext } from "../../../../../contexts/LayoutContext"
import HamburgerMenu from "./hamburger/HamburgerMenu"
import MenuItem from "./MenuItem"
import { MEDIA } from "./Menus.constant"
import S from "./Menus.styles"

export default function Menus() {
  const { state: menus } = useLayoutContext()

  return (
    <S.Container>
      <S.MenuItemBox>
        {menus.map((menu, idx) => (
          <MenuItem key={menu.title} {...menu} media={MEDIA[idx]} />
        ))}
        <HamburgerMenu />
      </S.MenuItemBox>
    </S.Container>
  )
}
