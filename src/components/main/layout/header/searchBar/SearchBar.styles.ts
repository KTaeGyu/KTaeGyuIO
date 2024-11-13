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
  background-color: ${theme.colors.vscode.bg[2]};
  border: 1px solid ${theme.colors.vscode.border[1]};
  border-radius: ${theme.radii[2]};
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.vscode.bg[3]};
    border: 1px solid ${theme.colors.vscode.border[2]};
  }
`

const SearchIcon = styled(IconPath.Search)`
  width: 20.5px;
  height: 20.5px;
  stroke: ${theme.colors.vscode.txt[1]};
  transform: scaleX(-1);
`

const Title = styled.h1`
  color: ${theme.colors.vscode.txt[1]};
  font-size: ${theme.fontSizes[1]};
  font-weight: ${theme.fontWeights.medium};
`

const S = { Container, SearchIcon, Title }

export default S
