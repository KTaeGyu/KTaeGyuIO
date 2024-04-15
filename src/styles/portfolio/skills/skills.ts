import styled from "styled-components"
import { theme } from "../../theme.css"

const Section = styled.section`
  background: aqua;
  padding: 3rem 0;
`

const Wrapper = styled.div`
  width: ${theme.sizes.container};
  border-radius: 10px;
  background: ${theme.colors.light};
  padding: 3rem;
  margin: 0 auto;
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

const CardsBox = styled.div<{ $height: number }>`
  width: 100%;
  height: ${({ $height }) => `${$height}rem`};
  transition: all 1s ease;
  overflow: hidden;
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
