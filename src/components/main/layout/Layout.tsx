import React, { PropsWithChildren, useState } from "react"
import ActivityBar from "./activityBar/ActivityBar"
import Header from "./header/Header"
import { ContainerProps } from "./Layout.interface"
import S from "./Layout.styles"

export default function Layout({ children }: PropsWithChildren) {
  const [dimmensions, setDimensions] = useState<ContainerProps>({
    pannelheight: 240,
    primarysidebarwidht: 320,
    secondarysidebarwidth: 0,
  }) // 나중에 컨택스트로 만들기

  return (
    <S.Container {...dimmensions}>
      <Header />
      <ActivityBar />
      {children}
    </S.Container>
  )
}
