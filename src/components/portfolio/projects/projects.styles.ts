import styled from "styled-components"
import { theme } from "../../../styles/theme.css"

const Section = styled.section`
  background: aliceblue;
  height: 100vh;
  padding: 5.5rem 0 1rem 0;
`

const Wrapper = styled.div`
  width: ${theme.sizes.container};
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin: 0 auto;
  background: ${theme.colors.bootstrap.light};
  border: 1px solid ${theme.colors.bootstrap.border};
  box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px,
    rgba(15, 15, 15, 0.4) 2px 2px 4px;
  padding: 3rem;
`

const Title = styled.h1`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 3rem;
`
const Info = styled.p`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  font-size: 14px;
`

const Hr = styled.hr`
  margin: 1rem 0;
`

export { Hr, Info, Section, Title, Wrapper }
