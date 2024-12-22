import styled from "styled-components"
import { theme } from "../../../../../../styles/theme.styles"

const Container = styled.div`
  display: flex;
  gap: ${theme.space.token[2]};
  padding: 0 ${theme.space.token[2]};
`

const Button = styled.button`
  ${theme.buttons.icon[22]}
  &:hover {
    background-color: ${theme.colors.vscode.bg.black[6]};
  }
  & > svg {
    width: ${theme.sizes.icon[18]};
    height: ${theme.sizes.icon[18]};
    stroke: ${theme.colors.vscode.txt[1]};
    stroke-width: 1.5px;
  }
`

const S = { Container, Button }

export default S
