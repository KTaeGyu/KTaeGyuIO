import styled from "styled-components"
import { theme } from "../../../../../styles/theme.styles"

const Wrapper = styled.li``

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.space.token[4]};
  user-select: none;
  cursor: pointer;

  & > svg {
    width: ${theme.sizes.icon[20]};
    height: ${theme.sizes.icon[20]};
    stroke: ${theme.colors.vscode.txt.link};
    stroke-width: 2px;
  }
`

const Title = styled.span`
  color: ${theme.colors.vscode.txt.link};
  font-size: ${theme.fontSizes[1]};
  line-height: ${theme.fontSizes[1]};
`

const S = { Container, Title, Wrapper }

export default S
