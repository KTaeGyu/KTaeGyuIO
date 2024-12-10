import styled from "styled-components"
import { theme } from "../../../../../styles/theme.css"

const Button = styled.div`
  display: flex;
  align-items: center;
  padding: 0 22px;
  &:hover {
    background-color: ${theme.colors.vscode.bg.black[4]};
  }
  & > svg {
    width: 12px;
    height: 12px;
    fill: ${theme.colors.vscode.txt[1]};
  }
`

const CloseButton = styled(Button)`
  &:hover {
    background-color: ${theme.colors.vscode.bg.red[1]};
  }
`

const S = { Button, CloseButton }

export default S
