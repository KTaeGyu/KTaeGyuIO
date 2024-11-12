import React, { useContext } from "react"
import { PortfolioContext } from "../../../contexts/PortfolioContext"
import useActiveHeader from "../../../hooks/useActiveHeader"
import S from "./portfolioHeader.styles"

type NavItem = "intro" | "about" | "skills" | "projects" | "contact"

const Header = () => {
  const { isTop, target } = useActiveHeader()
  const { introRef, aboutRef, skillsRef, projectsRef, contactRef } =
    useContext(PortfolioContext)

  const navigation = (to: NavItem) => {
    const options: ScrollIntoViewOptions = {
      behavior: "smooth",
      block: "start",
    }
    if (to === "intro") introRef.current.scrollIntoView(options)
    else if (to === "about") aboutRef.current.scrollIntoView(options)
    else if (to === "skills") skillsRef.current.scrollIntoView(options)
    else if (to === "projects") projectsRef.current.scrollIntoView(options)
    else if (to === "contact") contactRef.current.scrollIntoView(options)
  }

  return (
    <>
      <S.Wrapper className={isTop ? "active" : "deactive"}>
        <S.Content>
          <S.Title onClick={() => navigation("intro")}>KTG's Portfolio</S.Title>
          <S.Navbar>
            <S.NavItem onClick={() => navigation("about")}>About Me</S.NavItem>
            <S.NavItem onClick={() => navigation("skills")}>Skills</S.NavItem>
            <S.NavItem onClick={() => navigation("projects")}>
              Projects
            </S.NavItem>
            <S.NavItem onClick={() => navigation("contact")}>Contact</S.NavItem>
          </S.Navbar>
        </S.Content>
      </S.Wrapper>
      <div ref={target} />
    </>
  )
}

export default Header
