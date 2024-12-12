import React, { PropsWithChildren } from "react"
import PannelProvider from "../../../contexts/PannelContext"
import PrimarySideBarProvider from "../../../contexts/PrimarySideBarCotext"
import ActivityBar from "./activityBar/ActivityBar"
import Footer from "./footer/Footer"
import Header from "./header/Header"
import S from "./Layout.styles"
import Main from "./main/Main"
import Pannel from "./pannel/Pannel"
import PrimarySideBar from "./primarySideBar/PrimarySideBar"

export default function Layout({ children }: PropsWithChildren) {
  const dimmensions = {
    pannelheight: 240,
    primarysidebarwidht: 320,
    secondarysidebarwidth: 0,
  } // 나중에 컨택스트로 만들기

  return (
    <S.Container {...dimmensions}>
      <PrimarySideBarProvider>
        <PannelProvider>
          <Header />
          <ActivityBar />
          <PrimarySideBar />
          <Main>{children}</Main>
          <Pannel />
        </PannelProvider>
      </PrimarySideBarProvider>
      <Footer />
    </S.Container>
  )
}
