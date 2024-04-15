import styled from "styled-components"
import { theme } from "../theme.css"

const Section = styled.section`
  background: ${theme.colors.light};
  padding: 3rem 0;
`

const Wrapper = styled.div`
  width: 70rem;
  border-radius: 10px;
  margin: 0 auto;
  background: ${theme.colors.light};
  box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px,
    rgba(15, 15, 15, 0.4) 0px 2px 8px;
  padding: 3rem;
`

const Title = styled.h1`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 3rem;
`

const Hr = styled.hr`
  margin: 4rem 0;
`

export { Hr, Section, Title, Wrapper }
