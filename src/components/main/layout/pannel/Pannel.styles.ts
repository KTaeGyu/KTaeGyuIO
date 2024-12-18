import styled from "styled-components"
import { theme } from "../../../../styles/theme.styles"
import { ContainerProps } from "./Pannel.interface"

const Container = styled.div<ContainerProps>`
  grid-row-start: 3;
  grid-column-start: ${({ $primarysidebar }) => ($primarysidebar ? 3 : 2)};
  grid-column-end: 4;
  background-color: ${theme.colors.vscode.bg.black[7]};
`

const S = { Container }

export default S
