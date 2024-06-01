import React, { MouseEventHandler, useContext } from "react"
import { PortfolioContext } from "../../../contexts/PortfolioContext"
import useActiveHeader from "../../../hooks/useActiveHeader"
import {
  Content,
  NavItem,
  Navbar,
  Title,
  Wrapper,
} from "../../../styles/layouts/portfolioHeader"

const Header = () => {
  const { isTop } = useActiveHeader()
  const { introRef, aboutRef, skillsRef, projectsRef, contactRef } =
    useContext(PortfolioContext) || {}

  const navigation: MouseEventHandler = (e) => {
    const target = e.target as HTMLLIElement | HTMLHeadingElement
    const innerText = target.innerText
    let top = 0
    switch (innerText) {
      case "KTG's Portfolio":
        top = introRef.current.getBoundingClientRect().top
        break
      case "About Me":
        top = aboutRef.current.getBoundingClientRect().top
        break
      case "Skills":
        top = skillsRef.current.getBoundingClientRect().top
        break
      case "Projects":
        top = projectsRef.current.getBoundingClientRect().top
        break
      case "Contact":
        top = contactRef.current.getBoundingClientRect().top
        break
      default:
        console.log(innerText)
        break
    }
    window.scrollTo({
      top: top + window.scrollY,
      behavior: "smooth",
    })
  }

  return (
    <Wrapper className={isTop ? "active" : "deactive"}>
      <Content>
        <Title onClick={navigation}>KTG's Portfolio</Title>
        <Navbar>
          <NavItem onClick={navigation}>About Me</NavItem>
          <NavItem onClick={navigation}>Skills</NavItem>
          <NavItem onClick={navigation}>Projects</NavItem>
          <NavItem onClick={navigation}>Contact</NavItem>
        </Navbar>
      </Content>
    </Wrapper>
  )
}

export default Header
