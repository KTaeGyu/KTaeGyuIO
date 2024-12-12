import React, { PropsWithChildren } from "react"
import { usePannelConext } from "../../../../contexts/PannelContext"
import { usePrimarySideBarConext } from "../../../../contexts/PrimarySideBarCotext"
import S from "./Main.styles"

export default function Main({ children }: PropsWithChildren) {
  const { state: primarySideBarState } = usePrimarySideBarConext()
  const { state: pannelState } = usePannelConext()

  return (
    <S.Container
      primarySideBarState={primarySideBarState}
      pannelState={pannelState}
    >
      {children}
    </S.Container>
  )
}
