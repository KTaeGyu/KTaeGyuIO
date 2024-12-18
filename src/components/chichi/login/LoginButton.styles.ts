import styled from "styled-components"
import { theme } from "../../../styles/theme.styles"

const Container = styled.button`
  background-color: ${theme.colors.notion.red};
  margin: 0 16px;
  padding: 8px 0;
  color: ${theme.colors.notion.red_bg};
  font-size: large;
  font-weight: 600;
  &:disabled {
    opacity: 0.9;
  }
`

const S = { Container }

export default S
