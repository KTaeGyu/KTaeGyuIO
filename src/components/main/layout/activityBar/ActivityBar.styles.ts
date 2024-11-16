import styled from "styled-components"
import { theme } from "../../../../styles/theme.css"

const Container = styled.div`
  grid-row: span 2;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.vscode.bg[6]};
`

const S = { Container }

export default S
