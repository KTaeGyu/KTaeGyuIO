import React from "react"
import IconPath from "../../../../../../assets/iconPath"
import { useAppDispatch } from "../../../../../../state/hooks"
import { setLayoutsChecked } from "../../../../../../state/slices/layoutSlice"
import S from "./Options.styles"

export default function Options() {
  const dispatch = useAppDispatch()

  return (
    <S.Container>
      {/* tabOptions */}
      <S.Button>
        <IconPath.Chevron viewBox="0 0 24 24" />
      </S.Button>
      <S.Button
        onClick={() => dispatch(setLayoutsChecked({ idx: 3, checked: false }))}
      >
        <IconPath.Close viewBox="0 0 24 24" />
      </S.Button>
    </S.Container>
  )
}
