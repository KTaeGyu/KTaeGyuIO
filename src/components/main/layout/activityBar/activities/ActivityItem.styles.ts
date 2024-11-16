import styled from "styled-components"
import SettingS from "../settings/SettingItem.styles"
import { theme } from "./../../../../../styles/theme.css"
import { ContainerProps } from "./ActivityItem.interface"

const Container = styled(SettingS.Container)<ContainerProps>`
  border-color: ${theme.colors.vscode.border.white};
  border-width: 0 0 0 2px;
  border-style: ${({ selected }) => selected && "solid"};

  & > svg {
    stroke: ${({ selected }) =>
      selected ? theme.colors.vscode.txt.white : theme.colors.vscode.txt[2]};
  }
`

const S = { Container }

export default S
