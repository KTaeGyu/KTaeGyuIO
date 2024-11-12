import styled from "styled-components"
import { theme } from "../../../../../styles/theme.css"

const Container = styled.li`
  border-radius: ${theme.radii.button[12]};
  padding: ${theme.space.button[12]};
  &:hover {
    background-color: ${theme.colors.vscode.bg[2]};
  }
`

const Text = styled.p`
  user-select: none;
  color: ${theme.colors.vscode.txt[1]};
  font-size: ${theme.fontSizes.button[12]};
  line-height: ${theme.fontSizes.button[12]};
  font-weight: ${theme.fontWeights.medium};
`

const S = { Container, Text }

export default S
