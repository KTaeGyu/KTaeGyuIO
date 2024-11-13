import styled from "styled-components"
import IconPath from "../../../../../assets/iconPath"
import { theme } from "../../../../../styles/theme.css"

const Container = styled.ul`
  display: flex;
  gap: ${theme.space[1.5]};
  padding: 0 4px;
`

const LayoutSettingIcon = styled(IconPath.LayoutSetting)`
  width: 22.5px;
  height: 22.5px;
  stroke: ${theme.colors.vscode.txt[1]};
  transform: rotate(270deg);
`

const S = { Container, LayoutSettingIcon }

export default S
