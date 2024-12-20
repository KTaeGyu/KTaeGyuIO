import styled from "styled-components"
import { theme } from "../../../../styles/theme.styles"
import { ContainerProps } from "./DropdownGroup.interface"

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  padding: ${theme.space.token[3]};
  border-bottom: ${({ $isEnd }) =>
    !$isEnd && `1px solid ${theme.colors.vscode.border[3]}`};
`

const S = { Container }

export default S
