import styled from "styled-components"
import { theme } from "../../../styles/theme.styles"

const Wrapper = styled.li`
  width: 18rem;
  height: 22.9rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: white;
  box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px,
    rgba(15, 15, 15, 0.1) 0px 2px 4px;
  overflow: hidden;
`

const Cover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`

const Title = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 0.625rem;
  display: flex;
  align-items: center;
`

const Icon = styled.div`
  font-size: 0.8rem;
  margin: 0 0.25rem 0 0;
`

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 0 0.75rem 0.625rem 0.75rem;
`

const Descript = styled.p`
  font-size: 0.8rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
`

const Period = styled.p`
  font-size: 0.8rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
`

const Skills = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.375rem;
`

const Skill = styled.li<{ $color: string; $background: string }>`
  font-size: 0.8rem;
  height: 1.2rem;
  display: flex;
  align-items: center;
  color: ${({ $color }) => $color};
  background: ${({ $background }) => $background};
  border-radius: 3px;
  padding: 0 0.375rem;
  margin: 0.375rem 0;
`

const Urls = styled.ul``

const Url = styled.li`
  height: 1.5rem;
  display: flex;
  align-items: center;
`

const Link = styled.a`
  font-size: 0.7rem;
  color: ${theme.colors.bootstrap.dark};
  text-decoration-color: lightgray;
  text-underline-position: under;
`

export {
  Content,
  Cover,
  Descript,
  Icon,
  Image,
  Link,
  Period,
  Skill,
  Skills,
  Title,
  Url,
  Urls,
  Wrapper,
}
