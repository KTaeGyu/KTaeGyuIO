import styled from "styled-components"
import { theme } from "../../../../../styles/theme.styles"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${theme.sizes.token[3]};
  padding: 0 ${theme.space.token[4]};
`

const S = { Container }

export default S
