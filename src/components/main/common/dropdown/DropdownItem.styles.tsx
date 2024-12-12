import styled from "styled-components"
import IconPath from "../../../../assets/iconPath"
import { theme } from "../../../../styles/theme.css"
import {
  ContainerProps,
  TextProps,
} from "../../layout/header/menus/MenuItem.interface"

const Container = styled.div<ContainerProps>`
  position: relative;
  display: ${({ media }) => (media ? "none" : "flex")};
  gap: 48px;
  align-items: center;
  padding: 0 16px 0 32px;
  height: 35px;
  border-radius: ${theme.radii[2]};
  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};

  &:hover {
    background-color: ${({ disabled }) =>
      disabled ? "transparent" : theme.colors.vscode.bg.blue[1]};
  }

  ${({ media }) =>
    media && `@media (max-width: ${media}px) { display: flex; };`}
`

const CheckIcon = styled(IconPath.Check)`
  position: absolute;
  inset: 8px 0;
  left: 8px;
  width: 20px;
  height: 20px;
  scale: 0.9 1;
  stroke: ${theme.colors.vscode.txt[1]};
`

const Text = styled.p<TextProps>`
  margin-right: 48px;
  white-space: nowrap;
  user-select: none;
  flex: 1;
  color: ${({ disabled }) =>
    disabled ? theme.colors.vscode.txt[3] : theme.colors.vscode.txt.white};
`

const ChevronIcon = styled(IconPath.Chevron)`
  stroke: ${theme.colors.vscode.txt.white};
  rotate: 90deg;
`

const S = { Container, Text, CheckIcon, ChevronIcon }

export default S
