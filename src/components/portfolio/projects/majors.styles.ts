import styled, { keyframes } from "styled-components"
import { theme } from "../../../styles/theme.styles"

const Wrapper = styled.article`
  flex: 1;
`

const Carousel = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px,
    rgba(15, 15, 15, 0.3) 0px 2px 4px;
  padding: 1rem 0;
`

const Cards = styled.ul`
  position: relative;
  width: fit-content;
  width: 100%;
  height: 35rem;
  display: flex;
`

const fadeIn = keyframes`
  0% {
    transform: translateX(20%);
    opacity: 0;
    display: block;
  }
  50% {
    transform: translateX(20%);
    opacity: 0;
    display: block;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
    display: none;
  }
`

const fadeOut = keyframes`
  0% {
    transform: translateX(0%);
    opacity: 1;
    display: block;
  }
  50% {
    transform: translateX(-20%);
    opacity: 0;
    display: block;
  }
  100% {
    transform: translateX(-20%);
    opacity: 0;
    display: none;
  }
`

const Card = styled.li`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  background: ${theme.colors.bootstrap.light};
  transform: translateX(20%);
  opacity: 0;
  animation: ${fadeOut} 1s;
  &.active {
    display: block;
    transform: translateX(0%);
    opacity: 1;
    animation: ${fadeIn} 1s;
  }
`

const Navigation = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: 0.75rem 0.5rem;
`

const Prev = styled.button`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  background: transparent;
  border-right: 1px solid ${theme.colors.bootstrap.dark};
  padding-right: 1rem;
  & > svg {
    rotate: 270deg;
  }
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`

const Next = styled.button`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  padding-left: 1rem;
  border: none;
  background: transparent;
  & > svg {
    rotate: 90deg;
  }
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`

const Pagenation = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Page = styled.button`
  width: 1.5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
  &:hover {
    &::before {
      background: ${theme.colors.bootstrap.dark};
    }
  }
  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: ${theme.colors.bootstrap.dark_sub};
    transition: 0.2s;
  }
  &.active {
    &::before {
      background: ${theme.colors.bootstrap.dark};
    }
  }
`

export {
  Card,
  Cards,
  Carousel,
  Navigation,
  Next,
  Page,
  Pagenation,
  Prev,
  Wrapper,
}
