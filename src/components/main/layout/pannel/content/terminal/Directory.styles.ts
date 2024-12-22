import styled from "styled-components"
import { theme } from "../../../../../../styles/theme.styles"
import LineS from "./Terminal.styles"

const Container = styled(LineS.Line)`
  margin-top: ${theme.space.token[8]};
`

const User = styled.span`
  color: ${theme.colors.vscode.txt.green};
`

const System = styled.span`
  color: ${theme.colors.vscode.txt.purple};
`

const Path = styled.span`
  color: ${theme.colors.vscode.txt.yellow};
`

const S = { Container, User, System, Path }

export default S
