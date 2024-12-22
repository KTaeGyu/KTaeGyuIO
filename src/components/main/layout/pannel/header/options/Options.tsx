import React from "react"
import IconPath from "../../../../../../assets/iconPath"
import { useLayoutContext } from "../../../../../../contexts/LayoutContext"
import S from "./Options.styles"

export default function Options() {
  const { setState } = useLayoutContext()

  return (
    <S.Container>
      {/* tabOptions */}
      <S.Button>
        <IconPath.Chevron viewBox="0 0 24 24" />
      </S.Button>
      <S.Button onClick={() => setState.setLayoutsChecked(3, false)}>
        <IconPath.Close viewBox="0 0 24 24" />
      </S.Button>
    </S.Container>
  )
}
