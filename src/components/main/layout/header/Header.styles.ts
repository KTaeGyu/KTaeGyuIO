import styled from "styled-components"
import { theme } from "../../../../styles/theme.styles"

const Container = styled.header`
  display: flex;
  grid-column: span 4;
  background-color: ${theme.colors.vscode.bg.black[1]};
  border-bottom: 1px solid ${theme.colors.vscode.bg.black[1]};
`

const Logo = styled.img`
  width: ${theme.sizes.token[3]};
  height: ${theme.sizes.token[3]};
  padding: ${theme.space.token[5]};
`

const Section = styled.div`
  display: flex;
  align-items: center;
`

const Left = styled(Section)`
  width: 31.67%;
`

const Right = styled(Section)`
  display: flex;
  width: 31.67%;
  gap: ${theme.space.token[4]};
`

const Center = styled(Section)`
  display: flex;
  flex: 1;
  gap: ${theme.space.token[5]};
`

const S = { Container, Logo, Left, Right, Center }

export default S
