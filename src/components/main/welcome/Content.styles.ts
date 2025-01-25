import { styled } from "styled-components"
import { theme } from "../../../styles/theme.styles"

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${theme.space.token[12]};
`

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.space.token[5]};
`

const Title = styled.h2`
  padding: ${theme.space.token[1]} 0;
  color: ${theme.colors.vscode.txt[1]};
  font-size: ${theme.fontSizes[6]};
  font-weight: ${theme.fontWeights.normal};
`

const S = { Wrapper, Container, Title }

export default S
