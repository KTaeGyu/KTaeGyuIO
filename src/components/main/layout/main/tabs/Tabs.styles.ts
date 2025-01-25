import styled from "styled-components"
import { theme } from "../../../../../styles/theme.styles"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${theme.colors.vscode.bg.black[5]};
  padding-right: ${theme.space.token[6]};
`

const Container = styled.div`
  flex: 1;
`

const Box = styled.ul`
  display: flex;
  gap: 1px;
  width: fit-content;
`

const S = { Wrapper, Container, Box }

export default S
