import * as React from "react"
import Footer from "../components/portfolio/layout/portfolioFooter"
import Header from "../components/portfolio/layout/portfolioHeader"
import "../styles/styles.css"

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
