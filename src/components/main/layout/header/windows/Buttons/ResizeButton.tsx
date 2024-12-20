import React from "react"
import IconPath from "../../../../../../assets/iconPath"
import useFullscreenStatus from "../../../../../../hooks/useFullscreenStatus"
import S from "./Buttons.styles"

export default function ResizeButton() {
  const { isFull, requestFull, exitFull } = useFullscreenStatus()

  return (
    <S.Button onClick={isFull ? exitFull : requestFull}>
      {isFull ? (
        <IconPath.WindowRestore viewBox="0 0 24 24" />
      ) : (
        <IconPath.WindowMaximize viewBox="0 0 24 24" />
      )}
    </S.Button>
  )
}
