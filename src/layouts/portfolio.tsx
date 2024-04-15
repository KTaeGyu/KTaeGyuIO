import * as React from "react"
import Header from "../components/layouts/portfolioHeader"
import "../styles/styles.css"

interface LayoutProps {
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout