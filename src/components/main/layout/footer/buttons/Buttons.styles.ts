import styled from "styled-components"
import { theme } from "../../../../../styles/theme.styles"

const Container = styled.ul`
  flex: 1;
  display: flex;
  justify-content: end;
  padding-right: ${theme.space.token[4]};
`

const S = { Container }

export default S
