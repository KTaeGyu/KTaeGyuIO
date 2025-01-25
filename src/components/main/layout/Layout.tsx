import React, { PropsWithChildren } from "react"
import DIMMENSIONS from "../../../constants/dimmensions"
import S from "./Layout.styles"
import ActivityBar from "./activityBar/ActivityBar"
import Footer from "./footer/Footer"
import Header from "./header/Header"
import Main from "./main/Main"
import Pannel from "./pannel/Pannel"
import PrimarySideBar from "./primarySideBar/PrimarySideBar"

export default function Layout({ children }: PropsWithChildren) {
  return (
    <S.Container {...DIMMENSIONS}>
      <Header />
      <ActivityBar />
      <PrimarySideBar />
      <Main>{children}</Main>
      <Pannel />
      <Footer />
    </S.Container>
  )
}
