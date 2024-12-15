import styled from "styled-components"
import { ContainerProps } from "./Main.interface"

const Container = styled.main<ContainerProps>`
  grid-row: ${({ $pannel }) => ($pannel ? "span 1" : "span 2")};
  grid-column: ${({ $primarysidebar }) =>
    $primarysidebar ? "span 1" : "span 2"};
  background-color: aliceblue;
`

const S = { Container }

export default S
