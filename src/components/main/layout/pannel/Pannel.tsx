import React from "react"
import { usePannelContext } from "../../../../contexts/PannelContext"
import { usePrimarySideBarContext } from "../../../../contexts/PrimarySideBarCotext"
import S from "./Pannel.styles"

export default function Pannel() {
  const { state: P_State } = usePannelContext()
  const { state: PSB_State } = usePrimarySideBarContext()
  return P_State ? (
    <S.Container $primarysidebar={PSB_State}>pannel</S.Container>
  ) : null
}
