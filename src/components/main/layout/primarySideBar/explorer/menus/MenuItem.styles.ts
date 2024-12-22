import styled from "styled-components"
import IconPath from "../../../../../../assets/iconPath"
import { theme } from "../../../../../../styles/theme.styles"
import { ChevronIconProps, ContainerProps } from "./MenuItem.interface"

const Container = styled.li<ContainerProps>`
  position: relative;
  border-top: ${({ $isFirst }) =>
    !$isFirst && `1px solid ${theme.colors.vscode.border[3]}`};
  flex: ${({ $isFolder, $isOpen }) => $isOpen && $isFolder && "1"};
  /* 드래그로 변경가능하게 수정할 것 */
  min-height: ${({ $isOpen }) => ($isOpen ? "160px" : theme.sizes.token[1])};
  overflow-y: hidden;
  transition-property: flex, min-height;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
`

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

const ChevronIcon = styled(IconPath.Chevron)<ChevronIconProps>`
  width: ${theme.sizes.icon[18]};
  height: ${theme.sizes.icon[18]};
  stroke: ${theme.colors.vscode.txt[1]};
  rotate: ${({ $isOpen }) => ($isOpen ? "180deg" : "90deg")};
  stroke-width: 1.5px;
`

const Title = styled.h5`
  font-size: ${theme.fontSizes[2]};
  user-select: none;
`

const S = { Container, ChevronIcon, TitleBox, Title }

export default S
