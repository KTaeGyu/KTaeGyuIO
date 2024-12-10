import styled from "styled-components"
import IconPath from "../../../../../assets/iconPath"
import { theme } from "../../../../../styles/theme.css"

const Container = styled.button`
  width: 44px;
  background-color: ${theme.colors.vscode.bg.green[1]};
  &:hover {
    background-color: ${theme.colors.vscode.bg.green[2]};
  }
`

const Icon = styled(IconPath.RemoteWindow)`
  stroke: ${theme.colors.original.white};
  width: 18px;
  height: 18px;
`

const S = { Container, Icon }

export default S
