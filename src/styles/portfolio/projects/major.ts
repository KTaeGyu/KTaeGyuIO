import styled from "styled-components"
import { theme } from "../../theme.css"

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h3`
  font-size: 2rem;
  padding: 0.5rem 0;
`

const Size = styled.p`
  padding: 0 0 1rem 0;
`

const Content = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  padding-bottom: 2rem;
`

const Carousel = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  overflow: hidden;
`

const Pages = styled.ul<{ $pages: number }>`
  flex-grow: 1;
  width: ${({ $pages }) => `${$pages * 100}`}%;
  display: flex;
  transition: all 0.5s ease-in-out;
`

const Page = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
`

const Image = styled.img`
  width: 100%;
  object-fit: contain;
`

const Navigation = styled.div`
  display: flex;
  justify-content: center;
`

const Prev = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  & > svg {
    rotate: 270deg;
  }
`

const NowPage = styled.p`
  margin-bottom: 0.325rem;
`

const Next = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  & > svg {
    rotate: 90deg;
  }
`

const Overview = styled.div<{ $primary: string }>`
  width: 50%;
  height: 26.625rem;
  overflow-y: scroll;
  padding: 0 1rem;
  margin-right: 0.25rem;

  &::-webkit-scrollbar {
    width: 0.5rem;
    border-radius: 2rem;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background: ${({ $primary }) => $primary};
    min-height: 50px;
  }
`

const Abstract = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`

const Descript = styled.div`
  margin-bottom: 1rem;
`

const ReadmeBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  border-radius: 3px;
  color: ${theme.colors.light};
  font-size: 1rem;
  background: ${theme.colors.dark};
  padding: 0.5rem 1rem;
  cursor: pointer;
`

const Hr = styled.hr`
  margin: 1rem 0;
`

const Features = styled.div`
  margin-bottom: 1rem;
`

const SubTitle = styled.h4`
  margin: 0.5rem 0;
`

const Fields = styled.div`
  display: grid;
  grid-template-columns: 6rem 1fr;
  margin-bottom: 1rem;
`

const Field = styled.h4`
  font-size: 0.8rem;
`

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
`

const Skill = styled.p`
  font-size: 0.8rem;
  cursor: pointer;
  &:hover {
    & > span {
      text-decoration: underline;
    }
  }
`

const SkillName = styled.span``

const Urls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  margin-bottom: 1rem;
`

const Url = styled.div`
  display: flex;
  border: 1px solid ${theme.colors.border};
  border-radius: 10px;
`

const UrlTitle = styled.h5`
  width: 6rem;
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 500;
  border-right: 1px solid ${theme.colors.border};
  padding: 0.5rem;
`

const Link = styled.a`
  flex: 1;
  font-size: 0.8rem;
  word-wrap: break-word;
  word-break: break-all;
  padding: 0.5rem;
`

export {
  Abstract,
  Carousel,
  Content,
  Descript,
  Features,
  Field,
  Fields,
  Hr,
  Image,
  Link,
  Navigation,
  Next,
  NowPage,
  Overview,
  Page,
  Pages,
  Prev,
  ReadmeBtn,
  Size,
  Skill,
  SkillName,
  Skills,
  SubTitle,
  Title,
  Url,
  UrlTitle,
  Urls,
  Wrapper,
}
