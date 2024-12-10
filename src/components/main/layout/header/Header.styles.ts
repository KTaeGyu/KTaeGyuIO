import styled from "styled-components"
import { theme } from "../../../../styles/theme.css"

const Container = styled.header`
  display: flex;
  grid-column: span 4;
  align-items: center;
  background-color: ${theme.colors.vscode.bg.black[1]};
`

const Logo = styled.img`
  width: 20px;
  height: 20px;
  margin: 12px;
`

const Space = styled.div`
  flex: 0.51;
`

const S = { Container, Logo, Space }

export default S
