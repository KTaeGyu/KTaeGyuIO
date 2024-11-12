import styled from "styled-components"
import { theme } from "../../../../styles/theme.css"

const Container = styled.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 12px;
  height: 44px;
  background-color: ${theme.colors.vscode.bg[1]};
`

const Logo = styled.img`
  width: 20px;
  height: 20px;
`

const Space = styled.div`
  flex: 1;
`

const S = { Container, Logo, Space }

export default S
