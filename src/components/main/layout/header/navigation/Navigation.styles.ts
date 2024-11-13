import styled from "styled-components"
import IconPath from "../../../../../assets/iconPath"
import { theme } from "../../../../../styles/theme.css"

const Container = styled.div`
  display: flex;
  gap: ${theme.space[1.5]};
  padding: 0 12px;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  &:hover {
    background-color: ${theme.colors.vscode.bg[2]};
  }
  &:disabled:hover {
    background-color: transparent;
  }
  &:disabled > svg {
    stroke: ${theme.colors.vscode.txt[2]};
  }
`

const BackIcon = styled(IconPath.Arrow)`
  width: 16.5px;
  height: 16.5px;
  stroke: ${theme.colors.vscode.txt[1]};
`

const ForwardIcon = styled(BackIcon)`
  rotate: 180deg;
`

const S = { Container, Button, BackIcon, ForwardIcon }

export default S
