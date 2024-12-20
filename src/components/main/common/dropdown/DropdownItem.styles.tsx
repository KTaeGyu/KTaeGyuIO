import styled from "styled-components"
import IconPath from "../../../../assets/iconPath"
import { theme } from "../../../../styles/theme.styles"
import {
  ContainerProps,
  TextProps,
} from "../../layout/header/menus/MenuItem.interface"

const Container = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  min-width: 152px;
  align-items: center;
  padding: 0 ${theme.space.token[7]} 0 ${theme.space.token[13]};
  height: ${theme.sizes.token[2]};
  border-radius: ${theme.radii[2]};
  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};

  &:hover {
    background-color: ${({ disabled }) =>
      disabled ? "transparent" : theme.colors.vscode.bg.blue[1]};
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -${theme.space.token[3]};
    width: calc(100% + ${theme.space.token[6]});
    height: 100%;
  }

  background-color: ${({ $isSelect }) =>
    $isSelect && theme.colors.vscode.bg.blue[1]};
`

const CheckIcon = styled(IconPath.Check)`
  width: ${theme.sizes.icon[18]};
  height: ${theme.sizes.icon[18]};
  position: absolute;
  left: ${theme.space.token[3]};
  stroke: ${theme.colors.vscode.txt[1]};
  stroke-width: 2px;
  transform: scaleX(0.8);
`

const TextBox = styled.div`
  display: flex;
  flex: 1;
  gap: ${theme.space.token[24]};
  justify-content: space-between;
  & p:first-of-type {
    margin-right: ${theme.space.token[26]};
  }
`

const Text = styled.p<TextProps>`
  font-size: ${theme.fontSizes[1]};
  white-space: nowrap;
  user-select: none;
  color: ${({ disabled }) =>
    disabled ? theme.colors.vscode.txt[3] : theme.colors.vscode.txt.white};
`

const ChevronIcon = styled(IconPath.Chevron)`
  width: ${theme.sizes.icon[18]};
  height: ${theme.sizes.icon[18]};
  stroke: ${theme.colors.vscode.txt.white};
  rotate: 90deg;
`

const S = { Container, TextBox, Text, CheckIcon, ChevronIcon }

export default S
