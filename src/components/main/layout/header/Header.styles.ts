import styled from "styled-components"
import { theme } from "../../../../styles/theme.styles"

const Container = styled.header`
  display: flex;
  grid-column: span 4;
  background-color: ${theme.colors.vscode.bg.black[1]};
`

const Logo = styled.img`
  width: 20px;
  height: 20px;
  margin: 12px;
`

const Section = styled.div`
  display: flex;
  align-items: center;
`

const Left = styled(Section)`
  width: 28%;
`

const Right = styled(Section)`
  flex: 1;
`

const Center = styled(Section)`
  width: 42%;
`

const S = { Container, Logo, Left, Right, Center }

export default S
