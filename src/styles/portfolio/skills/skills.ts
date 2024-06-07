import styled from "styled-components"
import { theme } from "../../theme.css"

const Section = styled.section`
  background: aqua;
  padding: 5.5rem 0 1rem 0;
  height: 100vh;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${theme.sizes.container};
  border-radius: 10px;
  background: ${theme.colors.light};
  padding: 3rem;
  margin: 0 auto;
  height: 100%;
`

const Title = styled.h1`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 3rem;
`

const Hr = styled.hr`
  margin: 4rem 0 1rem 0;
`

const Fields = styled.ul`
  width: 100%;
  display: flex;
  justify-content: start;
  padding: 1.5rem 0 2.5rem 0;
`

const Field = styled.li`
  height: 2.5rem;
  display: flex;
  align-items: center;
  border: 0.05rem solid ${theme.colors.border};
  border-radius: 25px;
  background: ${theme.colors.light};
  padding: 0 1rem;
  margin-right: 0.5rem;
  cursor: pointer;
  &:hover {
    border: 0.05rem solid ${theme.colors.primary};
  }
  &.active {
    border: 0.05rem solid ${theme.colors.primary};
  }
`

const FieldTitle = styled.h2`
  color: ${theme.colors.dark_sub};
  font-size: 0.9rem;
  font-weight: 600;
`

const CardsBox = styled.div`
  flex: 1;
  width: 100%;
  transition: all 1s ease;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0.5rem;
    border-radius: 2rem;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background: aqua;
    min-height: 50px;
  }
  &::-webkit-scrollbar-track {
    background: #f0f0f0;
    border-radius: 2rem;
  }
`

const SkillCards = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

export {
  CardsBox,
  Field,
  FieldTitle,
  Fields,
  Hr,
  Section,
  SkillCards,
  Title,
  Wrapper,
}
