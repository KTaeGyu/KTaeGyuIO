import styled from "styled-components"
import IconPath from "../../../../../assets/iconPath"
import { theme } from "../../../../../styles/theme.styles"
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
    background-color: ${theme.colors.vscode.bg.black[2]};
  }
`

const LayoutIcon = styled(IconPath.Layout)<LayoutIconProps>`
  rotate: ${({ rotate }) => rotate};
  & path:first-of-type {
    ${({ disabled }) => !disabled && `fill: ${theme.colors.vscode.txt[1]};`}
  }
  & path:last-of-type {
    stroke: ${theme.colors.vscode.txt[1]};
    stroke-width: 1.5px;
  }
`

const S = { Container, LayoutIcon }

export default S
