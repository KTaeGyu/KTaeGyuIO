import styled from "styled-components"
import { theme } from "../../../../styles/theme.styles"

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: ${theme.space.token[6]};
  row-gap: ${theme.space.token[8]};
`

const Title = styled.p`
  display: flex;
  align-items: center;
  justify-content: end;
  font-size: ${theme.fontSizes[1]};
  color: ${theme.colors.vscode.txt[2]};
`

const S = { Container, Title }

export default S
