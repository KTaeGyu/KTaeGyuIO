import styled from "styled-components"
import { theme } from "../../../../../styles/theme.css"

const Container = styled.li`
  display: flex;
  align-items: center;
  padding: 0 6px;
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.vscode.bg.blue[3]};
  }
`

const Text = styled.p`
  color: ${theme.colors.vscode.txt.white};
  font-size: ${theme.fontSizes[1]};
`

const S = { Container, Text }

export default S
