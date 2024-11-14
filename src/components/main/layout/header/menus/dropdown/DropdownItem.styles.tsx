import styled from "styled-components"
import IconPath from "../../../../../../assets/iconPath"
import { theme } from "../../../../../../styles/theme.css"
import { ContainerProps } from "../MenuItem.interface"

const Container = styled.div<ContainerProps>`
  position: relative;
  display: ${({ media }) => (media ? "none" : "flex")};
  align-items: center;
  padding: 0 16px 0 32px;
  width: 222px;
  height: 35px;
  border-radius: ${theme.radii[2]};
  cursor: pointer;

  ${({ active }) =>
    active && `background-color: ${theme.colors.vscode.bg.blue};`}

  &:hover {
    background-color: ${theme.colors.vscode.bg.blue};
  }

  ${({ media }) =>
    media && `@media (max-width: ${media}px) { display: flex; };`}
`

const Text = styled.p`
  user-select: none;
  flex: 1;
  color: ${theme.colors.vscode.txt.white};
`

const ChevronIcon = styled(IconPath.Chevron)`
  stroke: ${theme.colors.vscode.txt.white};
  rotate: 90deg;
`

const S = { Container, Text, ChevronIcon }

export default S
