import React from "react"
import LayoutItem from "./LayoutItem"
import ItemS from "./LayoutItem.styles"
import C from "./Layouts.contant"
import S from "./Layouts.styles"

export default function Layouts() {
  return (
    <S.Container>
      {C.Layouts.map((layout, idx) => (
        <LayoutItem key={idx} {...layout} />
      ))}
      <ItemS.Container>
        <S.LayoutSettingIcon />
      </ItemS.Container>
    </S.Container>
  )
}
