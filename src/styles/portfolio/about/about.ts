import styled from "styled-components"
import { theme } from "../../theme.css"

const Section = styled.section``

const Wrapper = styled.div`
  margin: 0 auto;
  width: ${theme.sizes.container};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 3rem;
`

const Title = styled.h1`
  font-size: 3rem;
`

const Hr = styled.hr`
  width: 100%;
  margin: 4rem 0;
`

const Content = styled.ul`
  width: 100%;
  height: 25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > li:nth-of-type(2n) {
    align-self: flex-start;
  }
  & > li:nth-of-type(2n + 1) {
    align-self: flex-end;
  }
`

export { Content, Hr, Section, Title, Wrapper }
