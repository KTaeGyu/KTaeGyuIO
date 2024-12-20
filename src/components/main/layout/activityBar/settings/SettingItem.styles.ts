import styled from "styled-components"
import { theme } from "../../../../../styles/theme.styles"

const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.space.token[6]} 0;
  cursor: pointer;

  &:hover {
    & > svg {
      stroke: ${theme.colors.vscode.txt.white};
    }
  }

  & > svg {
    stroke: ${theme.colors.vscode.txt[2]};
    stroke-width: 1.5px;
  }
`

const S = { Container }

export default S
