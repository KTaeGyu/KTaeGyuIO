import styled from "styled-components"
import { ContainerProps } from "./Layout.interface"

const Container = styled.div<ContainerProps>`
  display: grid;
  grid-template-rows: 44px 1fr ${({ pannelheight }) => `${pannelheight}px`} 26px;
  grid-template-columns:
    60px
    ${({ primarysidebarwidht }) => `${primarysidebarwidht}px`}
    1fr
    ${({ secondarysidebarwidth }) => `${secondarysidebarwidth}px`};
  min-height: 100dvh;
`

const S = { Container }

export default S
