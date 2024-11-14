import styled from "styled-components"
import IconPath from "../../../../../assets/iconPath"
import { theme } from "../../../../../styles/theme.css"
import { LayoutIconProps } from "./LayoutItem.interface"

const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: ${theme.radii[1]};
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.vscode.bg[2]};
  }
`

const LayoutIcon = styled(IconPath.Layout)<LayoutIconProps>`
  width: 22.5px;
  height: 22.5px;
  stroke: ${theme.colors.vscode.txt[1]};
  rotate: ${(props) => props.rotate};
  & path:first-of-type {
    fill: ${(props) => props.active && theme.colors.vscode.txt[1]};
  }
`

const S = { Container, LayoutIcon }

export default S
