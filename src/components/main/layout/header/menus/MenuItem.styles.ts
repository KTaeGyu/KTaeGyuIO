import styled from "styled-components"
import { theme } from "../../../../../styles/theme.styles"
import { ContainerProps } from "./MenuItem.interface"

const Container = styled.li<ContainerProps>`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  height: ${theme.sizes.token[1]};
  border-radius: ${theme.radii[1]};
  ${theme.buttons.text[22]}
  transform: translateY(1px);

  &.active {
    background-color: ${theme.colors.vscode.bg.black[2]};
  }

  &:hover {
    background-color: ${theme.colors.vscode.bg.black[2]};
  }

  ${({ $media }) =>
    $media && `@media (max-width: ${$media}px) { display: none; };`}
`

const Text = styled.p`
  user-select: none;
  color: ${theme.colors.vscode.txt[1]};
  font-weight: ${theme.fontWeights.medium};
  transform: translateY(-1px);
`

const S = { Container, Text }

export default S
