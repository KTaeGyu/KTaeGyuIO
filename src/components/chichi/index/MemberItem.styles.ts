import styled from "styled-components"
import { theme } from "../../../styles/theme.styles"

const Container = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;

  &.active > div {
    transform: scale(1.05);
  }
`

const CharactorBox = styled.div`
  background-color: ${theme.colors.original.white};
  border-radius: 12px;
  overflow: hidden;

  box-shadow: inset -1px -1px 2px rgba(0, 0, 0, 0.6),
    inset 1px 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
`

const Charactor = styled.img`
  width: 100%;
  height: 100%;
`

const NicknameBox = styled.div`
  padding: 4px;
  background-color: ${theme.colors.original.white};
  border-radius: 8px;

  box-shadow: inset -1px -1px 2px rgba(0, 0, 0, 0.6),
    inset 1px 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
`

const Nickname = styled.p`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
`

const S = { Container, CharactorBox, Charactor, NicknameBox, Nickname }

export default S
