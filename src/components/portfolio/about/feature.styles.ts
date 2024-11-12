import styled from "styled-components"
import { theme } from "../../../styles/theme.css"

const Wrapper = styled.li`
  position: relative;
`

const IconBox = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  font-family: "MaruBuri";
  color: ${theme.colors.bootstrap.light};
`

const Space = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3.5rem 0;
`

const Hexagon = styled.div`
  position: relative;
  width: 12.12rem;
  height: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.bootstrap.info};
  &::after {
    content: "";
    z-index: -1;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 12.12rem;
    height: 7rem;
    rotate: 60deg;
    background: ${theme.colors.bootstrap.info};
  }
  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 12.12rem;
    height: 7rem;
    rotate: 120deg;
    background: ${theme.colors.bootstrap.info};
  }
  cursor: pointer;
  &:hover {
    & > p {
      filter: opacity(1);
      transition: 0.3s ease;
    }
    & > div {
      filter: opacity(0.8);
      transition: 0.3s ease;
    }
  }
`

const BackDrop = styled.div`
  position: absolute;
  z-index: 2;
  width: 12.12rem;
  height: 7rem;
  display: block;
  background: ${theme.colors.bootstrap.dark};
  padding: 2rem;
  filter: opacity(0);
  &::after {
    content: "";
    z-index: -1;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 12.12rem;
    height: 7rem;
    rotate: 60deg;
    background: ${theme.colors.bootstrap.dark};
  }
  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 12.12rem;
    height: 7rem;
    rotate: 120deg;
    background: ${theme.colors.bootstrap.dark};
  }
`

const Content = styled.p`
  position: absolute;
  font-family: "MaruBuri";
  z-index: 3;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.bootstrap.light};
  text-align: center;
  word-break: keep-all;
  line-height: 22px;
  font-size: 16px;
  padding: 1rem;
  filter: opacity(0);
`

export { BackDrop, Content, Hexagon, IconBox, Space, Title, Wrapper }
