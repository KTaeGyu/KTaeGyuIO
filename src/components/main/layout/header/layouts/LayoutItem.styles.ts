import styled from "styled-components"
import { theme } from "../../../../../styles/theme.styles"
import { ContainerProps } from "./LayoutItem.interface"

const Container = styled.li<ContainerProps>`
  ${theme.buttons.icon[22]}
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.vscode.bg.black[2]};
  }
  & > svg {
    rotate: ${({ $rotate }) => $rotate}deg;
    & path:first-of-type {
      ${({ $checked }) => $checked && `fill: ${theme.colors.vscode.txt[1]};`}
    }
    & path:last-of-type {
      stroke: ${theme.colors.vscode.txt[1]};
      stroke-width: 1.5px;
    }
  }
`

const S = { Container }

export default S
