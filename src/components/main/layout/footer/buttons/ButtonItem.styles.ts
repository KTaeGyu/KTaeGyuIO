import styled from "styled-components"
import { theme } from "../../../../../styles/theme.styles"

const Container = styled.li`
  display: flex;
  align-items: center;
  padding: 0 ${theme.space.token[3]};
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.vscode.bg.blue[3]};
  }
`

const Text = styled.p`
  color: ${theme.colors.vscode.txt.white};
  font-size: ${theme.fontSizes[3]};
`

const S = { Container, Text }

export default S
