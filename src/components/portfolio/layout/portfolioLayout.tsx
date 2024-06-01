import * as React from "react"
import "../../../styles/styles.css"
import Footer from "./portfolioFooter"
import Header from "./portfolioHeader"

interface LayoutProps {
  children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
