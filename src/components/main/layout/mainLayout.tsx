import React, { PropsWithChildren } from "react"
import Header from "./header/Header"
import S from "./mainLayout.styles"
import Tabs from "./mainTabs"

export default function Layout({ children }: PropsWithChildren) {
  return (
    <S.Container>
      <Header />
      <Tabs />
      {children}
    </S.Container>
  )
}
