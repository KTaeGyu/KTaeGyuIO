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
    margin: 3px;
    scale: 1.25;
    stroke: ${theme.colors.vscode.txt[2]};
    stroke-width: 1.5px;
  }
`

const S = { Container }

export default S
