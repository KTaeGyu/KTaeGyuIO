import styled from "styled-components"
import { theme } from "../../styles/theme.css"

const Title = styled.h1`
  color: ${theme.colors.original.white};
`

const Description = styled.p`
  color: ${theme.colors.original.white};
`

const Green = styled.span`
  color: ${theme.colors.notion.green};
`

const S = { Title, Description, Green }

export default S
