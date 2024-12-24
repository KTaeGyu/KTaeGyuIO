import styled from "styled-components"
import { theme } from "../../../../styles/theme.styles"
import { ContainerProps } from "./Main.interface"

const Container = styled.main<ContainerProps>`
  grid-row: ${({ $pannel }) => ($pannel ? "span 1" : "span 2")};
  grid-column: ${({ $primarySideBar }) =>
    $primarySideBar ? "span 1" : "span 2"};
  background-color: ${theme.colors.vscode.bg.black[7]};
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const Logo = styled.img`
  width: 300px;
  height: 300px;
  margin: 16px;
`

const S = { Container, Box, Logo }

export default S
