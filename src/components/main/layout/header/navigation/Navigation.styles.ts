import styled from "styled-components"
import IconPath from "../../../../../assets/iconPath"
import { theme } from "../../../../../styles/theme.styles"

const Container = styled.div`
  display: flex;
  gap: ${theme.space.token[2]};
`

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${theme.sizes.token[1]};
  height: ${theme.sizes.token[1]};
  &:hover {
    background-color: ${theme.colors.vscode.bg.black[2]};
  }
  &:disabled:hover {
    background-color: transparent;
  }
  &:disabled > svg {
    stroke: ${theme.colors.vscode.txt[2]};
  }
`

const BackIcon = styled(IconPath.Arrow)`
  width: ${theme.sizes.icon[12]};
  height: ${theme.sizes.icon[12]};
  stroke: ${theme.colors.vscode.txt[1]};
  stroke-width: 2px;
`

const ForwardIcon = styled(BackIcon)`
  rotate: 180deg;
`

const S = { Container, Button, BackIcon, ForwardIcon }

export default S
