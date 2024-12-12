import styled from "styled-components"
import { ContainerProps } from "./Main.interface"

const Container = styled.main<ContainerProps>`
  grid-row: ${({ pannelState }) => (pannelState ? "span 1" : "span 2")};
  grid-column: ${({ primarySideBarState }) =>
    primarySideBarState ? "span 1" : "span 2"};
  background-color: aliceblue;
`

const S = { Container }

export default S
