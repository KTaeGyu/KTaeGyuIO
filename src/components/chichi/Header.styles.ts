import styled from "styled-components"
import { theme } from "../../styles/theme.styles"

const Container = styled.header`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 32px 16px 0 16px;
`
const Title = styled.h1`
  color: ${theme.colors.original.white};
`

const Description = styled.p`
  color: ${theme.colors.original.white};
`

const Green = styled.span`
  color: ${theme.colors.notion.green};
`

const S = { Container, Title, Description, Green }

export default S
