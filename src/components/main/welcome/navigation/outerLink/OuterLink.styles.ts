import styled from "styled-components"
import { theme } from "../../../../../styles/theme.styles"

const Container = styled.div``

const Title = styled.a`
  font-size: ${theme.fontSizes[1]};
  color: ${theme.colors.vscode.txt.link};
  text-decoration: none;
  user-select: none;
`

const Href = styled.span`
  margin-left: ${theme.space.token[7]};
  font-size: ${theme.fontSizes[1]};
  color: ${theme.colors.vscode.txt[1]};
`

const S = { Container, Title, Href }

export default S
