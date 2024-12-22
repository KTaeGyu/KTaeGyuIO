import styled from "styled-components"
import { theme } from "../../../../../../../../styles/theme.styles"
import { ContainerProps } from "./Paths.interface"

const Container = styled.div<ContainerProps>`
  flex: 1;
  padding-left: ${({ $isRoot }) => $isRoot && "4px"};
  margin-left: ${theme.space.token[4]};
  border-left: ${({ $isRoot }) =>
    !$isRoot && `1px solid ${theme.colors.vscode.border[4]}`};
  &:hover {
    border-left: ${({ $isRoot }) =>
      !$isRoot && `1px solid ${theme.colors.vscode.border[5]}`};
  }
`

const S = { Container }

export default S
