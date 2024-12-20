import React from "react"
import IconPath from "../../../../../assets/iconPath"
import { useLayoutContext } from "../../../../../contexts/LayoutContext"
import LayoutItem from "./LayoutItem"
import ItemS from "./LayoutItem.styles"
import S from "./Layouts.styles"

export default function Layouts() {
  const { state, setState } = useLayoutContext()

  return (
    <S.Container>
      <ItemS.Container $rotate={270}>
        <IconPath.LayoutSetting viewBox="0 0 24 24" />
      </ItemS.Container>
      {state.layouts.map(
        (layout, idx) =>
          !layout.disabled && (
            <LayoutItem
              key={idx}
              {...layout}
              onClick={() => setState.setLayoutsChecked(idx)}
            />
          )
      )}
    </S.Container>
  )
}
