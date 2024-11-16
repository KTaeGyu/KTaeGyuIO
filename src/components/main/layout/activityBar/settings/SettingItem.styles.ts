import styled from "styled-components"
import { theme } from "./../../../../../styles/theme.css"

const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  cursor: pointer;

  &:hover {
    & > svg {
      stroke: ${theme.colors.vscode.txt.white};
    }
  }

  & > svg {
    width: 30px;
    height: 30px;
    stroke: ${theme.colors.vscode.txt[2]};
  }
`

const S = { Container }

export default S
