import styled from "styled-components"
import IconPath from "../../../../../assets/iconPath"
import { theme } from "../../../../../styles/theme.styles"

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${theme.sizes.token[3]};
  background-color: ${theme.colors.vscode.bg.green[1]};
  &:hover {
    background-color: ${theme.colors.vscode.bg.green[2]};
  }
`

const Icon = styled(IconPath.RemoteWindow)`
  width: ${theme.sizes.icon[16]};
  height: ${theme.sizes.icon[16]};
  stroke: ${theme.colors.vscode.txt.white};
  stroke-width: 2px;
`

const S = { Container, Icon }

export default S
