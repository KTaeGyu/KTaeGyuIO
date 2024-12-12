import styled from "styled-components"
import IconPath from "../../../../../assets/iconPath"
import { theme } from "../../../../../styles/theme.css"

const Container = styled.div`
  display: none;
  position: relative;
  z-index: 2;

  @media (max-width: 1250px) {
    display: block;
  }
`

const MoreIcon = styled(IconPath.More)`
  width: 28px;
  height: 16px;
  fill: ${theme.colors.vscode.txt[1]};

  @media (max-width: 1020px) {
    display: none;
  }
`
const HamburgerIcon = styled(IconPath.Hamburger)`
  display: none;
  width: 28px;
  height: 16px;
  stroke: ${theme.colors.vscode.txt[1]};

  @media (max-width: 1020px) {
    display: block;
  }
`

const S = { Container, HamburgerIcon, MoreIcon }

export default S
