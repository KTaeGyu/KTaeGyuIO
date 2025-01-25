import styled from "styled-components"
import { theme } from "../../../../../../styles/theme.styles"

const Container = styled.ul`
  display: flex;
  align-items: center;
  gap: ${theme.space.token[2]};
`

const Button = styled.li`
  position: relative;
  z-index: 2;
  ${theme.buttons.icon[22]}
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.vscode.bg.black[8]};
  }
  & > svg {
    stroke: ${theme.colors.vscode.txt[1]};
    stroke-width: 2px;
  }
`

const S = { Container, Button }

export default S
