import styled from "styled-components"
import { theme } from "../../../../../styles/theme.styles"
import PathS from "../../primarySideBar/explorer/menus/folders/paths/PathItem.styles"
import { CloseButtonProps, ContainerProps, TitleProps } from "./Tab.interface"

const Container = styled.li<ContainerProps>`
  display: flex;
  align-items: center;
  padding: ${theme.space.token[3]};
  background-color: ${({ $isLocation }) =>
    $isLocation
      ? theme.colors.vscode.bg.black[7]
      : theme.colors.vscode.bg.black[10]};
  cursor: pointer;

  &:hover > button {
    opacity: 1;
  }
`

const Icon = styled(PathS.Icon)``

const Title = styled(PathS.Title)<TitleProps>`
  color: ${({ $isLocation }) =>
    $isLocation ? theme.colors.vscode.txt[1] : theme.colors.vscode.txt[5]};
`

const CloseButton = styled.button<CloseButtonProps>`
  ${theme.buttons.icon[22]}
  opacity: ${({ $isLocation }) => ($isLocation ? 1 : 0)};
  margin-left: ${theme.space.token[6]};

  &:hover {
    background-color: ${theme.colors.vscode.bg.black[6]};
  }
  & > svg {
    width: ${theme.sizes.icon[18]};
    height: ${theme.sizes.icon[18]};
    stroke: ${({ $isLocation }) =>
      $isLocation ? theme.colors.vscode.txt[1] : theme.colors.vscode.txt[5]};
    stroke-width: 1.5px;
  }
`

const S = { Container, CloseButton, Icon, Title }

export default S
