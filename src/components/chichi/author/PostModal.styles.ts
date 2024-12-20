import styled from "styled-components"
import IconPath from "../../../assets/iconPath"
import { theme } from "../../../styles/theme.styles"

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100dvw;
  height: 100dvh;
  background-color: #00000088;
`

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 90%;
  aspect-ratio: 1/1;
  background-color: #ffeb3b;
  border-radius: 4px;
  clip-path: polygon(80% 0, 100% 20%, 100% 100%, 0 100%, 0 0);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 20%;
    height: 20%;
    background-color: #fff;
    clip-path: polygon(0 0, 0 100%, 100% 100%);
  }
`

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 80%;
  height: 20%;
  padding: 0 8px;
  align-self: flex-start;
`

const TitleText = styled.h4`
  color: ${theme.colors.notion.perple};
  word-break: keep-all;
`

const Input = styled.input`
  flex: 1;
  width: 10%;
  padding: 8px;
  background-color: transparent;
  border-width: 0 0 1px 0;
  border-color: ${theme.colors.notion.perple};
  outline: none;
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &::placeholder {
    color: ${theme.colors.notion.perple};
    font-size: 14px;
    font-weight: 400;
  }
`

const Description = styled.div`
  flex: 1;
  padding: 8px;
`

const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  background-color: transparent;
  padding: 8px;
  border-radius: 8px;
  border-color: ${theme.colors.notion.perple};
  resize: none;
  &:focus {
    outline: 1px solid ${theme.colors.notion.perple};
  }
  &::placeholder {
    color: ${theme.colors.notion.perple};
  }
`

const SubmitButton = styled.button`
  background-color: ${theme.colors.notion.perple};
  margin: 8px;
  padding: 8px;
  color: #ffeb3b;
  font-size: 16px;
  font-weight: 600;
`

const ExitButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background-color: #ffffff;
  border-radius: ${theme.radii[99]};
`

const ExitIcon = styled(IconPath.WindowClose)`
  width: 24px;
  height: 24px;
  fill: ${theme.colors.original.black};
`

const S = {
  Wrapper,
  Container,
  Title,
  TitleText,
  Input,
  Description,
  Textarea,
  SubmitButton,
  ExitButton,
  ExitIcon,
}

export default S
