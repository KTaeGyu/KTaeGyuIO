import styled from "styled-components"
import { theme } from "../../../../styles/theme.styles"

const Container = styled.div`
  grid-row: span 2;
  display: flex;
  flex-direction: column;
  color: ${theme.colors.vscode.txt[1]};
  background-color: ${theme.colors.vscode.bg.black[5]};
`

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  padding: ${theme.space.token[3]} ${theme.space.token[6]}
    ${theme.space.token[3]} ${theme.space.token[10]};
`

const Title = styled.h4`
  font-size: ${theme.fontSizes[2]};
  font-weight: ${theme.fontWeights.normal};
  user-select: none;
`

const TitleButtonBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
`

const S = { Container, TitleBox, Title, TitleButtonBox }

export default S
