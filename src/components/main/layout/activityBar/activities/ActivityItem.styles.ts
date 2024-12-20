import styled from "styled-components"
import { theme } from "../../../../../styles/theme.styles"
import SettingS from "../settings/SettingItem.styles"
import { ContainerProps } from "./ActivityItem.interface"

const Container = styled(SettingS.Container)<ContainerProps>`
  position: relative;

  & > svg {
    stroke: ${({ $selected }) =>
      $selected ? theme.colors.vscode.txt.white : theme.colors.vscode.txt[2]};
    stroke-width: 2px;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    display: ${({ $selected }) => ($selected ? "block" : "none")};
    background-color: ${theme.colors.vscode.border.white};
    width: 2px;
    height: 100%;
  }
`

const S = { Container }

export default S
