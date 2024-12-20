import styled from "styled-components"
import { theme } from "../../../../../../styles/theme.styles"

const Button = styled.div`
  display: flex;
  align-items: center;
  padding: 0 ${theme.space.token[9]};
  &:hover {
    background-color: ${theme.colors.vscode.bg.black[4]};
  }
  & > svg {
    width: ${theme.sizes.icon[10]};
    height: ${theme.sizes.icon[10]};
    stroke: ${theme.colors.vscode.txt[1]};
    stroke-width: 2px;
  }
`

const CloseButton = styled(Button)`
  &:hover {
    background-color: ${theme.colors.vscode.bg.red[1]};
  }
`

const S = { Button, CloseButton }

export default S
