import styled from "styled-components"
import { theme } from "./../../../../../../styles/theme.css"

const Button = styled.div`
  display: flex;
  align-items: center;
  padding: 0 22px;
  &:hover {
    background-color: ${theme.colors.vscode.bg.black[4]};
  }
  & > svg {
    scale: 0.5;
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
