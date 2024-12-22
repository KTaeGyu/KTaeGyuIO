import styled from "styled-components"
import { theme } from "../../../../../../styles/theme.styles"
import { ContainerProps, TitleProps } from "./Tab.interface"

const Container = styled.li<ContainerProps>`
  padding: 0 ${theme.space.token[5]};
  cursor: pointer;
`

const Title = styled.p<TitleProps>`
  border-bottom: 1px solid
    ${({ $isSelect }) =>
      $isSelect ? theme.colors.vscode.txt.white : "transparent"};
  padding: ${theme.space.token[2]} ${theme.space.token[1]};
  color: ${({ $isSelect }) =>
    $isSelect ? theme.colors.vscode.txt.white : theme.colors.vscode.txt[4]};
  font-size: ${theme.fontSizes[2]};
  user-select: none;
`

const S = { Container, Title }

export default S
