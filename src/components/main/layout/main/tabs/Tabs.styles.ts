import styled from "styled-components"
import { theme } from "../../../../../styles/theme.styles"

const Container = styled.div`
  background-color: ${theme.colors.vscode.bg.black[5]};
`

const Box = styled.ul`
  display: flex;
  gap: 1px;
  width: fit-content;
`

const S = { Container, Box }

export default S
