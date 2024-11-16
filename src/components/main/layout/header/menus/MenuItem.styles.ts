import styled from "styled-components"
import { theme } from "../../../../../styles/theme.css"
import { ContainerProps } from "./MenuItem.interface"

const Container = styled.li<ContainerProps>`
  position: relative;
  display: flex;
  align-items: center;
  height: 28px;
  border-radius: ${theme.radii[1]};
  padding: ${theme.space.button[12]};

  &.active {
    background-color: ${theme.colors.vscode.bg[2]};
  }

  &:hover {
    background-color: ${theme.colors.vscode.bg[2]};
  }

  ${({ media }) =>
    media && `@media (max-width: ${media}px) { display: none; };`}
`

const Text = styled.p`
  user-select: none;
  color: ${theme.colors.vscode.txt[1]};
  font-size: ${theme.fontSizes.button[12]};
  line-height: ${theme.fontSizes.button[12]};
  font-weight: ${theme.fontWeights.medium};
`

const S = { Container, Text }

export default S
