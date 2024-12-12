import styled from "styled-components"
import { theme } from "../../../../styles/theme.css"

const Container = styled.div`
  grid-row: span 2;
  color: ${theme.colors.vscode.txt[1]};
  background-color: ${theme.colors.vscode.bg.black[5]};
`

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 14px 8px 24px;
`

const Title = styled.h4`
  font-size: ${theme.fontSizes[0]};
  font-weight: ${theme.fontWeights.normal};
`

const TitleButtonBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
`

const S = { Container, TitleBox, Title, TitleButtonBox }

export default S
