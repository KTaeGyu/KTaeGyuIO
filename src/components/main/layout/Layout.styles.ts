import styled from "styled-components"
import { theme } from "../../../styles/theme.styles"
import { ContainerProps } from "./Layout.interface"

const Container = styled.div<ContainerProps>`
  display: grid;
  grid-template-rows: ${theme.sizes.header.height} 1fr ${({ $pannelheight }) =>
      `${$pannelheight}px`} ${theme.sizes.token[1]};
  grid-template-columns:
    ${theme.sizes.token[4]}
    ${({ $primarySideBarwidht }) => `${$primarySideBarwidht}px`}
    1fr
    ${({ $secondarysidebarwidth }) => `${$secondarysidebarwidth}px`};
  min-height: 100dvh;
`

const S = { Container }

export default S
