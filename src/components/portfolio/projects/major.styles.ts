import styled from "styled-components"
import { NotionColor } from "../../../constants/notionColor"
import { theme } from "../../../styles/theme.css"

interface MajorStyleProps {
  $color?: string
  $secondary?: string
  $isLast?: boolean
  $colorSet?: NotionColor
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h3<MajorStyleProps>`
  font-size: 2rem;
  color: ${({ $color }) => $color};
  margin-bottom: 1rem;
  padding: 0.5rem 0;
`

const Size = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-bottom: 1rem;
  font-size: 14px;
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

const Overview = styled.div<MajorStyleProps>`
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
    background: ${({ $color }) => $color};
    min-height: 50px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 2rem;
    background: ${({ $secondary }) => $secondary};
  }
`

const Abstract = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${({ $color }) => $color};
`

const Descript = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 1rem;
`

const ReadmeBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  border-radius: 3px;
  color: ${theme.colors.bootstrap.light};
  font-size: 1rem;
  background: ${theme.colors.bootstrap.dark};
  padding: 0.5rem 1rem;
  cursor: pointer;
`

const Hr = styled.hr`
  margin: 1rem 0;
`

const Features = styled.ul`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`

const Feature = styled.li<MajorStyleProps>`
  width: 100%;
  display: flex;
  font-size: 12px;
  border: 1px solid lightgray;
  border-bottom: ${({ $isLast }) => !$isLast && 0};
`

const FeatTitle = styled.h4<MajorStyleProps>`
  padding: 5px;
  width: 20%;
  border-right: 1px solid lightgray;
`

const FeatContent = styled.p`
  padding: 5px;
  width: 80%;
`

const SubTitle = styled.h4<MajorStyleProps>`
  margin: 0.5rem 0;
  color: ${({ $color }) => $color};
`

const Fields = styled.div`
  display: grid;
  grid-template-columns: 6rem 1fr;
  margin-bottom: 1rem;
  row-gap: 1rem;
`

const Field = styled.h4`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.8rem;
`

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.5rem;
  row-gap: 0.4rem;
`

const Skill = styled.p<MajorStyleProps>`
  font-size: 12px;
  color: ${({ $colorSet }) => $colorSet.text};
  background: ${({ $colorSet }) => $colorSet.bg};
  border-radius: 6px;
  padding: 2px 6px;
`

const Urls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  margin-bottom: 1rem;
`

const Url = styled.div`
  display: flex;
  border: 1px solid ${theme.colors.bootstrap.border};
  border-radius: 10px;
`

const UrlTitle = styled.h5`
  width: 6rem;
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 500;
  border-right: 1px solid ${theme.colors.bootstrap.border};
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
  FeatContent,
  FeatTitle,
  Feature,
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
  Skills,
  SubTitle,
  Title,
  Url,
  Urls,
  UrlTitle,
  Wrapper,
}
