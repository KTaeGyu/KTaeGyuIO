import styled from "styled-components"
import IconPath from "../../../../../assets/iconPath"
import { theme } from "../../../../../styles/theme.styles"

const Container = styled.div`
  display: flex;
  padding: 0 ${theme.space.token[4]};
`

const Icon = styled.img`
  display: inline;
  width: 14px;
  height: 14px;
`

const TitleBox = styled.p`
  display: flex;
  align-items: center;
  height: ${theme.sizes.token[1]};
`

const Title = styled.span`
  margin-left: 8px;
  color: ${theme.colors.vscode.txt[1]};
  font-size: ${theme.fontSizes[1]};
  line-height: ${theme.fontSizes[1]};
`

const Chevron = styled(IconPath.Chevron)`
  display: inline;
  width: 18px;
  height: 18px;
  stroke: ${theme.colors.vscode.txt[1]};
  stroke-width: 2px;
  rotate: 90deg;
`

const S = { Container, Icon, Title, Chevron, TitleBox }

export default S
