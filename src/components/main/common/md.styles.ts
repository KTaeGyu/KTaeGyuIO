import { ComponentType } from "react"
import styled from "styled-components"
import { MarkdownDataType } from "../../../@types/markdown/dataTypes"
import { theme } from "../../../styles/theme.styles"

const Text = `
  font-size: 13px;
  line-height: 22px;
  font-weight: 400;
`

const Margin = `
  margin: 0 ${theme.space.token[6]};
`

const Gap = `
  display: flex;
  flex-direction: column;
  gap: ${theme.space.token[8]};
`

const HoverHighlight = `
  position: relative;
  &:hover {
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: -${theme.space.token[5]};
      height: 100%;
      width: 3px;
      background-color: ${theme.colors.vscode.bg.black[11]};
    }
  }
`

const Wrapper = styled.div``

const Container = styled.div`
  ${Gap}
  height: fit-content;
  padding: ${theme.space.token[7]} ${theme.space.token[20]};
  color: ${theme.colors.vscode.txt[1]};
`

const Heading = `
  ${Margin}
  ${HoverHighlight}
  margin-top: ${theme.space.token[2]};
  padding-bottom: ${theme.space.token[2]};
`

const H1 = styled.h1`
  ${Heading}
  font-size: 28px;
  line-height: 40px;
  font-weight: 600;
  margin-bottom: ${theme.space.token[4]};
  border-bottom: 1px solid ${theme.colors.vscode.border[3]};
`

const H2 = styled.h2`
  ${Heading}
  font-size: 20px;
  line-height: 28px;
  font-weight: 600;
  margin-bottom: ${theme.space.token[4]};
  border-bottom: 1px solid ${theme.colors.vscode.border[3]};
`

const H3 = styled.h3`
  ${Heading}
  font-size: 18px;
  line-height: 22px;
  font-weight: 600;
`

const P = styled.p`
  ${Margin}
  ${HoverHighlight}
  font-size: ${theme.fontSizes[1]};
`

const Blockquote = styled.blockquote`
  ${Gap}
  ${Margin}
  ${HoverHighlight}
  padding: ${theme.space.token[5]} 0;
  background-color: ${theme.colors.vscode.bg.black[12]};
  border-left: 4px solid ${theme.colors.vscode.bg.blue[4]};
  border-radius: ${theme.radii[1]};
`

const List = `
  ${Text}
  ${Margin}
  padding-inline-start: 24px;
  list-style-position: inside;
`

const Ol = styled.ol`
  ${List}
  list-style-type: decimal;
`

const Li = styled.li`
  ${HoverHighlight}
  display: list-item;
  text-align: -webkit-match-parent;
`

type ExtendedDataType = MarkdownDataType | "Wrapper" | "Container"

const S: Record<ExtendedDataType, ComponentType<any>> = {
  Wrapper,
  Container,
  H1,
  H2,
  H3,
  P,
  Blockquote,
  Ol,
  Li,
}

export default S
