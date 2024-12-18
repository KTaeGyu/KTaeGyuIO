import React, { PropsWithChildren } from "react"
import LayoutProvider from "../../../contexts/LayoutContext"
import S from "./Layout.styles"
import ActivityBar from "./activityBar/ActivityBar"
import Footer from "./footer/Footer"
import Header from "./header/Header"
import Main from "./main/Main"
import Pannel from "./pannel/Pannel"
import PrimarySideBar from "./primarySideBar/PrimarySideBar"

export default function Layout({ children }: PropsWithChildren) {
  const dimmensions = {
    $pannelheight: 240,
    $primarysidebarwidht: 320,
    $secondarysidebarwidth: 0,
  } // 나중에 컨택스트로 만들기

  return (
    <LayoutProvider>
      <S.Container {...dimmensions}>
        <Header />
        <ActivityBar />
        <PrimarySideBar />
        <Main>{children}</Main>
        <Pannel />
        <Footer />
      </S.Container>
    </LayoutProvider>
  )
}
