import { navigate } from "gatsby"
import React, { MouseEventHandler, useRef } from "react"
import IconPath from "../../../../../assets/iconPath"
import selectPathIcon from "../../../../../functions/selectPathIcon"
import useIsLocation from "../../../../../hooks/useIsLocation"
import { useAppDispatch } from "../../../../../state/hooks"
import { removeEditor } from "../../../../../state/slices/folderSlice"
import { ComponentProps } from "./Tab.interface"
import S from "./Tab.styles"

export default function Tab({ title, route, idx }: ComponentProps) {
  const closeRef = useRef(null)
  const dispatch = useAppDispatch()
  // Icon
  const src = selectPathIcon(title)
  // Hightlight
  const isLocation = useIsLocation(route)
  // onClickClose
  const onClickClose: MouseEventHandler = (e) => {
    e.stopPropagation()
    dispatch(removeEditor({ idx, isLocation }))
  }

  return (
    <S.Container $isLocation={isLocation} onClick={() => navigate(route)}>
      <S.Icon src={`/images/path/${src}.png`} />
      <S.Title $isLocation={isLocation}>{title}</S.Title>
      <S.CloseButton
        ref={closeRef}
        $isLocation={isLocation}
        onClick={onClickClose}
      >
        <IconPath.Close viewBox="0 0 24 24" />
      </S.CloseButton>
    </S.Container>
  )
}
