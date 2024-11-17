import styled from "styled-components"
import { theme } from "../../styles/theme.css"

const Layout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 8px;
  height: 100dvh;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url("/images/chichi/tree.png");
    background-size: cover;
    background-position: center;
    z-index: -1;
  }
`

const LayoutWithShadow = styled(Layout)`
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${theme.colors.original.black};
    opacity: 0.3;
    z-index: -1;
  }
`

const S = { Layout, LayoutWithShadow }

export default S
