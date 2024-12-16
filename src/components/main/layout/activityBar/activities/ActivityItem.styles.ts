import styled from "styled-components"
import SettingS from "../settings/SettingItem.styles"
import { theme } from "./../../../../../styles/theme.css"
import { ContainerProps, HignlightProps } from "./ActivityItem.interface"

const Container = styled(SettingS.Container)<ContainerProps>`
  position: relative;

  & > svg {
    stroke: ${({ selected }) =>
      selected ? theme.colors.vscode.txt.white : theme.colors.vscode.txt[2]};
  }
`

const Highlight = styled.div<HignlightProps>`
  position: absolute;
  left: 0;
  top: 0;
  display: ${({ selected }) => (selected ? "block" : "none")};
  background-color: ${theme.colors.vscode.border.white};
  width: 2px;
  height: 100%;
`

const S = { Container, Highlight }

export default S
