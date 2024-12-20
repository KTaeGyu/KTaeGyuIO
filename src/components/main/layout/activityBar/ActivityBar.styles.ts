import styled from "styled-components"
import { theme } from "../../../../styles/theme.styles"

const Container = styled.div`
  grid-row: span 2;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.vscode.bg.black[6]};
  border-right: 1px solid ${theme.colors.vscode.bg.black[6]};
`

const S = { Container }

export default S
