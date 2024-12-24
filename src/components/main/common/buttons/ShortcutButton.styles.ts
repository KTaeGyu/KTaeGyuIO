import styled from "styled-components"
import { theme } from "../../../../styles/theme.styles"

const Container = styled.div`
  font-size: ${theme.fontSizes[1]};
  color: ${theme.colors.vscode.txt[2]};
`

const Key = styled.div`
  position: relative;
  z-index: 1;
  display: inline-block;
  height: 16px;
  padding: ${theme.space.token[2]};
  margin: 0 1px;
  font-size: 8px;
  line-height: 8px;
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: ${theme.radii[1]};
    background-color: ${theme.colors.vscode.bg.black[10]};
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
  }
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: -1px;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    background-color: ${theme.colors.vscode.bg.black[10]};
    border-radius: ${theme.radii[1]};
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
  }
`

const Join = styled.span`
  margin: ${theme.space.token[1]};
`

const S = { Container, Key, Join }

export default S
