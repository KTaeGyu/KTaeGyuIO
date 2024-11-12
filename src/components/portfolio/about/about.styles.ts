import styled from "styled-components"
import { theme } from "../../../styles/theme.css"

const Section = styled.section`
  display: flex;
  height: 100vh;
  padding: 5.5rem 0 1rem 0;
`

const Wrapper = styled.div`
  padding: 3rem;
  margin: 0 auto;
  width: ${theme.sizes.container};
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  font-size: 3rem;
`

const Info = styled.p`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  font-size: 14px;
`

const Hr = styled.hr`
  width: 100%;
  margin: 1rem 0 1rem 0;
`

const Content = styled.ul`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  padding: 3rem 0;
  justify-content: space-between;
  & > li:nth-of-type(2n) {
    align-self: flex-start;
  }
  & > li:nth-of-type(2n + 1) {
    align-self: flex-end;
  }
`

export { Content, Hr, Info, Section, Title, Wrapper }
