import styled from "styled-components"
import { theme } from "../../../../../styles/theme.styles"

const Container = styled.ul`
  display: flex;
  flex: 1;
  justify-content: end;
  gap: ${theme.space.token[2]};
`

const S = { Container }

export default S
