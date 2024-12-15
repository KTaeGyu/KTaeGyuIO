import styled from "styled-components"
import IconPath from "../../../../../assets/iconPath"
import { theme } from "../../../../../styles/theme.css"

const Container = styled.ul`
  display: flex;
  gap: ${theme.space[1.5]};
  padding: 0 4px;
`

const LayoutSettingIcon = styled(IconPath.LayoutSetting)`
  stroke: ${theme.colors.vscode.txt[1]};
  stroke-width: 1.5px;
  rotate: 270deg;
`

const S = { Container, LayoutSettingIcon }

export default S
