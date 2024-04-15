import styled from "styled-components"
import { theme } from "./../theme.css"

const Wrapper = styled.li`
  width: 33.33%;
  border-radius: 10px;
  cursor: pointer;
  &.active {
    width: 100%;
    overflow: hidden;
    border: 0.8px solid ${theme.colors.border};
    margin: 1rem 0;
    cursor: default;
    & > div {
      position: relative;
      height: 34rem;
      display: flex;
      padding: 1rem 0;
      & > div:nth-of-type(1) {
        width: 16rem;
        flex-direction: column;
        justify-content: center;
        & > div {
          height: 10rem;
        }
        & > h3 {
          font-size: 1.5rem;
          font-weight: 600;
        }
      }
      & > div:nth-of-type(2) {
        display: flex;
      }
    }
  }
`

const Container = styled.div`
  height: 4rem;
  border: none;
  border-radius: 10px;
  transition: height 0.8s;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1.5rem;
  padding: 0.5rem;
`

const LogoBox = styled.div`
  height: 3rem;
  aspect-ratio: 1/1;
  border: 0.05rem solid ${theme.colors.border};
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const Name = styled.h3`
  font-weight: 500;
`

const Content = styled.div`
  width: 48rem;
  height: 32rem;
  display: none;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`

const ExpBox = styled.article`
  flex-grow: 1;
`

const ExpTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

const ExpContent = styled.p`
  width: 45rem;
  padding-bottom: 2rem;
  word-wrap: break-word;
  word-break: keep-all;
`

const LevelBox = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`

const LevelTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`

const DescriptBox = styled.div<{ $level?: number }>`
  display: grid;
  grid-template-columns: ${({ $level }) =>
    $level ? `${$level}fr auto ${5 - $level}fr` : `0fr auto 5fr`};
`

const Descript = styled.p<{ $level?: number }>`
  position: relative;
  grid-column: 2/3;
  color: ${theme.colors.light};
  font-weight: 600;
  border-radius: 10px;
  background: ${theme.colors.info};
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  &::after {
    content: "";
    position: absolute;
    bottom: -1rem;
    left: ${({ $level }) => `calc(10px + (20% - 0.2rem - 4px) * ${$level})`};
    border-top: 0.5rem solid ${theme.colors.info};
    border-bottom: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-left: 0.5rem solid transparent;
  }
`

const Level = styled.input`
  align-self: center;
  width: 98%;
  appearance: none;
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.5rem;
    background: ${theme.colors.info};
    border-radius: 50px;
  }
  &::-webkit-slider-thumb {
    appearance: none;
    box-shadow: 0px 0px 3px ${theme.colors.dark};
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    background: #ffffff;
    margin-top: -0.5rem;
  }
`

const DataList = styled.datalist`
  align-self: center;
  width: 96%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Option = styled.option``

const Urls = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`

const UrlsTitle = styled.h4`
  margin-bottom: 0.5rem;
`

const Url = styled.div`
  height: 2.5rem;
  display: grid;
  grid-template-columns: 8rem 1fr;
  border: 0.05rem solid ${theme.colors.border};
  border-radius: 10px;
`

const UrlTitle = styled.h5`
  display: flex;
  align-items: center;
  border-right: 0.05rem solid ${theme.colors.border};
  margin-left: 1rem;
`

const UrlContent = styled.a`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  word-wrap: break-word;
  word-break: break-all;
  margin: 0.5rem 1rem;
`

const CloseBtn = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  background: transparent;
  border: none;
  border-radius: 50%;
  line-height: 0;
  padding: 0.5rem;
  aspect-ratio: 1/1;
  cursor: pointer;
  &:hover {
    background: ${theme.colors.border};
  }
`

export {
  CloseBtn,
  Container,
  Content,
  DataList,
  Descript,
  DescriptBox,
  ExpBox,
  ExpContent,
  ExpTitle,
  Level,
  LevelBox,
  LevelTitle,
  Logo,
  LogoBox,
  Name,
  Option,
  Title,
  Url,
  UrlContent,
  UrlTitle,
  Urls,
  UrlsTitle,
  Wrapper,
}
