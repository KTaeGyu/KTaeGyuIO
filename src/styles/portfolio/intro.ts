import styled from "styled-components"
import { theme } from "../theme.css"

const Section = styled.section`
  position: relative;
  height: 100vh;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.4)
  );
  &::before {
    content: "";
    z-index: -1;
    background: url("images/profile.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: 50%;
    position: absolute;
    width: 100%;
    height: 100%;
  }
`

const Wrapper = styled.div`
  z-index: 1;
  width: ${theme.sizes.container};
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 8.5rem 2rem 4rem 2rem;
  margin: 0 auto;
`

const Title = styled.h1`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.light};
  font-size: 3.75rem;
  text-align: center;
`

const Hr = styled.hr`
  width: 5rem;
  margin: 1.5rem auto;
  border: 3px solid ${theme.colors.primary};
  border-radius: 5px;
`

const Content = styled.p`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.light};
  font-size: 1.42rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
`

const Button = styled.button`
  width: auto;
  color: ${theme.colors.light};
  font-size: 1.05rem;
  font-weight: 600;
  line-height: 1.5rem;
  border: none;
  border-radius: 50px;
  background: ${theme.colors.primary};
  padding: 1rem 2rem;
  cursor: pointer;
`

export { Button, Content, Hr, Section, Title, Wrapper }
