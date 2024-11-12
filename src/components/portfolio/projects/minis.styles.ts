import styled from "styled-components"
import { theme } from "../../../styles/theme.css"

const Wrapper = styled.article`
  margin-bottom: 4rem;
`

const Title = styled.h2`
  margin-bottom: 2rem;
`

const Carousel = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px,
    rgba(15, 15, 15, 0.3) 0px 2px 4px;
`

const Cards = styled.ul`
  width: fit-content;
  display: flex;
  gap: 1rem;
  background: ${theme.colors.bootstrap.light};
  padding: 2rem;
`

const Navigation = styled.div`
  position: absolute;
  top: 0;
  width: 3rem;
  height: 100%;
  display: flex;
  align-items: center;
  &.left {
    left: 0;
    justify-content: start;
    background: linear-gradient(
      to right,
      ${theme.colors.bootstrap.dark_sub}aa,
      ${theme.colors.bootstrap.dark_sub}22 60%,
      ${theme.colors.bootstrap.dark_sub}00
    );
    & > button {
      rotate: 270deg;
    }
  }
  &.right {
    right: 0;
    justify-content: end;
    background: linear-gradient(
      to left,
      ${theme.colors.bootstrap.dark_sub}aa,
      ${theme.colors.bootstrap.dark_sub}22 60%,
      ${theme.colors.bootstrap.dark_sub}00
    );
    & > button {
      rotate: 90deg;
    }
  }
`

const Button = styled.button`
  width: 1.7rem;
  height: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  background: ${theme.colors.bootstrap.light};
  margin: 0.5rem;
  padding: 0 0.21px 1.8px 0;
  cursor: pointer;
  &:hover {
    & path {
      stroke: ${theme.colors.bootstrap.light};
    }
    background: ${theme.colors.bootstrap.dark_sub};
  }
`

export { Button, Cards, Carousel, Navigation, Title, Wrapper }
