import React from "react"
import { usePannelConext } from "../../../../contexts/PannelContext"
import { usePrimarySideBarConext } from "../../../../contexts/PrimarySideBarCotext"
import S from "./Pannel.styles"

export default function Pannel() {
  const { state: pannelState } = usePannelConext()
  const { state: primarySideBarState } = usePrimarySideBarConext()
  return pannelState ? (
    <S.Container primarySideBarState={primarySideBarState}>pannel</S.Container>
  ) : null
}
