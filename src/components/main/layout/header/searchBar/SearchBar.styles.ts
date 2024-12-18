import styled from "styled-components"
import IconPath from "../../../../../assets/iconPath"
import { theme } from "../../../../../styles/theme.css"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.space[1]};
  flex: 1.48;
  height: 30px;
  background-color: ${theme.colors.vscode.bg.black[2]};
  border: 1px solid ${theme.colors.vscode.border[1]};
  border-radius: ${theme.radii[2]};
  overflow: hidden;
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.vscode.bg.black[3]};
    border: 1px solid ${theme.colors.vscode.border[2]};
  }
`

const SearchIcon = styled(IconPath.Search)`
  scale: 0.75;
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
