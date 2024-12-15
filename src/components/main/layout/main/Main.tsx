import React, { PropsWithChildren } from "react"
import { usePannelContext } from "../../../../contexts/PannelContext"
import { usePrimarySideBarContext } from "../../../../contexts/PrimarySideBarCotext"
import S from "./Main.styles"

export default function Main({ children }: PropsWithChildren) {
  const { state: PSB_State } = usePrimarySideBarContext()
  const { state: P_State } = usePannelContext()

  return (
    <S.Container $primarysidebar={PSB_State} $pannel={P_State}>
      {children}
    </S.Container>
  )
}
