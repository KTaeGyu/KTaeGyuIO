import styled from "styled-components"
import IconPath from "../../../../../../assets/iconPath"
import { theme } from "../../../../../../styles/theme.styles"
import { MEDIA } from "../Menus.constant"

const Container = styled.div`
  position: relative;
  z-index: 2;
  display: none;

  @media (max-width: ${MEDIA[MEDIA.length - 1]}px) {
    display: block;
  } ;
`

const MoreIcon = styled(IconPath.More)`
  width: 28px;
  height: 16px;
  fill: ${theme.colors.vscode.txt[1]};

  @media (max-width: ${MEDIA[0]}px) {
    display: none;
  } ;
`
const HamburgerIcon = styled(IconPath.Hamburger)`
  display: none;
  width: 28px;
  height: 16px;
  stroke: ${theme.colors.vscode.txt[1]};

  @media (max-width: ${MEDIA[0]}px) {
    display: block;
  } ;
`

const S = { Container, HamburgerIcon, MoreIcon }

export default S
