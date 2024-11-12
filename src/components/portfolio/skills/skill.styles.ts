import styled from "styled-components"
import { theme } from "../../../styles/theme.css"

const Wrapper = styled.li`
  width: 33.33%;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
  &.active {
    width: 100%;
    overflow: hidden;
    border: 0.8px solid ${theme.colors.bootstrap.border};
    margin: 1rem 0;
    cursor: default;

    &:hover {
      background-color: transparent;
    }
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
  border: 0.05rem solid ${theme.colors.bootstrap.border};
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
  flex: 1;
  font-weight: 500;
`

export { Container, Logo, LogoBox, Name, Title, Wrapper }
