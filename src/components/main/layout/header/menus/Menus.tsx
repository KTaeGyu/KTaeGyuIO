import React from "react"
import { useAppSelector } from "../../../../../state/hooks"
import { selectMenus } from "../../../../../state/slices/layoutSlice"
import HamburgerMenu from "./hamburger/HamburgerMenu"
import MenuItem from "./MenuItem"
import { MEDIA } from "./Menus.constant"
import S from "./Menus.styles"

export default function Menus() {
  const menus = useAppSelector(selectMenus) as LayoutItem<MenusTitle>[]

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
