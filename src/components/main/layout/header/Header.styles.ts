import styled from "styled-components"
import { theme } from "../../../../styles/theme.css"

const Container = styled.header`
  display: flex;
  align-items: center;
  height: 44px;
  background-color: ${theme.colors.vscode.bg[1]};
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
