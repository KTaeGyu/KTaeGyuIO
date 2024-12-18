import styled from "styled-components"
import { theme } from "../../../styles/theme.styles"

const Wrapper = styled.header`
  z-index: 3;
  position: fixed;
  transition: 0.4s ease;
  width: 100%;
  color: ${theme.colors.original.white};
  background: transparent;
  &.active {
    color: ${theme.colors.bootstrap.dark};
    background: ${theme.colors.bootstrap.light};
    border-bottom: 1px solid ${theme.colors.bootstrap.border};
  }
`

const Content = styled.div`
  width: ${theme.sizes.container};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 2rem;
  margin: 0 auto;
`

const Title = styled.h2`
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: ${theme.colors.bootstrap.primary};
  }
`

const Navbar = styled.ul`
  display: flex;
`

const NavItem = styled.li`
  font-weight: 600;
  line-height: 2rem;
  padding: 0 1rem;
  cursor: pointer;
  &:hover {
    color: ${theme.colors.bootstrap.primary};
  }
`

const S = { Content, NavItem, Navbar, Title, Wrapper }

export default S
