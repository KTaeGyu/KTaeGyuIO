import styled from "styled-components"
import { theme } from "./../../../styles/theme.styles"
import {
  ContainerProps,
  ContentBoxProps,
  TitleBoxProps,
  WrapperProps,
} from "./index.interface"

const Wrapper = styled.div<WrapperProps>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: ${({ $isWide }) =>
    $isWide ? theme.space.token[30] : theme.space.token[6]};
`

const Container = styled.div<ContainerProps>`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: ${({ $isWide }) => ($isWide ? "80%" : "100%")};
  max-width: ${theme.sizes.container[1]};
  padding: ${({ $isWide }) =>
    $isWide ? `${theme.space.token[28]} 0` : theme.space.token[12]};
  gap: ${theme.space.token[16]};
`

const TitleBox = styled.div<TitleBoxProps>`
  display: ${({ $isWide }) => ($isWide ? "block" : "none")};
`

const Heading = styled.h1`
  color: ${theme.colors.vscode.txt[1]};
  font-size: ${theme.fontSizes[4]};
  font-weight: ${theme.fontWeights.medium};
`

const Slogan = styled.p`
  color: ${theme.colors.vscode.txt[2]};
  font-size: ${theme.fontSizes[5]};
`

const ContentBox = styled.div<ContentBoxProps>`
  display: flex;
  flex-direction: ${({ $isWide }) => ($isWide ? "row" : "column")};
  gap: ${theme.space.token[16]};
`

const S = { Wrapper, Container, TitleBox, Heading, Slogan, ContentBox }

export default S
