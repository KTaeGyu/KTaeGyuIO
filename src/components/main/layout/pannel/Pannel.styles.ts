import styled from "styled-components"
import { theme } from "../../../../styles/theme.styles"
import { ContainerProps } from "./Pannel.interface"

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  grid-row-start: 3;
  grid-column-start: ${({ $primarySideBar }) => ($primarySideBar ? 3 : 2)};
  grid-column-end: 4;
  background-color: ${theme.colors.vscode.bg.black[7]};
  border-top: 1px solid ${theme.colors.vscode.bg.black[9]};
`

const S = { Container }

export default S
