import styled from "styled-components"
import { theme } from "../../../../styles/theme.css"

const Container = styled.footer`
  display: flex;
  grid-column: span 4;
  background-color: ${theme.colors.vscode.bg.blue[2]};
`

const S = { Container }

export default S
