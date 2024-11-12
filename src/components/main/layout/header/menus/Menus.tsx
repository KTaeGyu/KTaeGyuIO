import React from "react"
import MenuItem from "./MenuItem"
import C from "./Menus.constant"
import S from "./Menus.styles"

export default function Menus() {
  return (
    <S.Container>
      {C.Menus.map((menu) => (
        <MenuItem {...menu} />
      ))}
    </S.Container>
  )
}
