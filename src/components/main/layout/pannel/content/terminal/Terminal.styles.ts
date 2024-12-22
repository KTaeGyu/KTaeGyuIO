import styled from "styled-components"
import { theme } from "../../../../../../styles/theme.styles"
import { CursorProps } from "./Terminal.interface"

const Container = styled.div`
  height: calc(100% - ${theme.space.token[8]});
  margin: ${theme.space.token[8]} 0 0 ${theme.space.token[10]};
  padding-right: ${theme.space.token[7]};

  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 14px;
    border: 1px solid #ffffff11;
  }
  &:hover::-webkit-scrollbar-thumb {
    background: #ffffff11;
  }
  &::-webkit-scrollbar-button {
    display: none;
  }
`

const Line = styled.p`
  position: relative;
  color: ${theme.colors.vscode.txt[1]};
  font-size: ${theme.fontSizes[1]};
`

const Label = styled.label`
  flex: 1;
  cursor: text;
`

const Input = styled.input`
  width: calc(100% - ${theme.space.token[6]});
  margin-bottom: ${theme.space.token[8]};

  color: ${theme.colors.vscode.txt[1]};
  caret-color: transparent;
  &:focus {
    & ~ #cursor {
      background-color: ${theme.colors.vscode.txt[1]};
    }
  }
`

const Cursor = styled.div<CursorProps>`
  position: absolute;
  left: ${({ $textWidth }) => $textWidth + 12}px;
  top: 0;
  width: 7px;
  height: calc(100% - ${theme.space.token[8]});
  border: 1px solid ${theme.colors.vscode.txt[1]};
`

const S = { Container, Line, Input, Cursor, Label }

export default S
