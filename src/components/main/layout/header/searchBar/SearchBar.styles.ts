import styled from "styled-components"
import IconPath from "../../../../../assets/iconPath"
import { theme } from "../../../../../styles/theme.styles"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  flex: 1;
  height: ${theme.sizes.token[1]};
  background-color: ${theme.colors.vscode.bg.black[2]};
  border: 1px solid ${theme.colors.vscode.border[1]};
  border-radius: ${theme.radii[1]};
  box-sizing: content-box;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.vscode.bg.black[3]};
    border: 1px solid ${theme.colors.vscode.border[2]};
  }
`

const SearchIcon = styled(IconPath.Search)`
  width: ${theme.sizes.icon[14]};
  height: ${theme.sizes.icon[14]};
  stroke: ${theme.colors.vscode.txt[1]};
  stroke-width: 1.5px;
`

const Title = styled.h1`
  user-select: none;
  color: ${theme.colors.vscode.txt[1]};
  font-size: ${theme.fontSizes[1]};
  font-weight: ${theme.fontWeights.medium};
`

const S = { Container, SearchIcon, Title }

export default S
