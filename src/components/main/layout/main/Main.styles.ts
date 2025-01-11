import styled from "styled-components"
import { theme } from "../../../../styles/theme.styles"
import { ContainerProps } from "./Main.interface"

const Container = styled.main<ContainerProps>`
  grid-row: ${({ $pannel }) => ($pannel ? "span 1" : "span 2")};
  grid-column: ${({ $primarySideBar }) =>
    $primarySideBar ? "span 1" : "span 2"};
  background-color: ${theme.colors.vscode.bg.black[7]};
  display: flex;
  flex-direction: column;
`

const S = { Container }

export default S
