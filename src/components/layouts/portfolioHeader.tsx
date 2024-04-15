import React from "react"
import useActiveHeader from "../../hooks/useActiveHeader"
import {
  Content,
  NavItem,
  Navbar,
  Title,
  Wrapper,
} from "../../styles/layouts/portfolioHeader"

const Header = () => {
  const { isTop } = useActiveHeader()

  return (
    <Wrapper className={isTop ? "active" : "deactive"}>
      <Content>
        <Title>KTG's Portfolio</Title>
        <Navbar>
          <NavItem>About Me</NavItem>
          <NavItem>Skills</NavItem>
          <NavItem>Projects</NavItem>
          <NavItem>Contact</NavItem>
        </Navbar>
      </Content>
    </Wrapper>
  )
}

export default Header
