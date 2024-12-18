import styled from "styled-components"
import IconPath from "../../../../../../assets/iconPath"
import { theme } from "../../../../../../styles/theme.styles"
import { ChevronIconProps, ContainerProps } from "./MenuItem.interface"

const Container = styled.li<ContainerProps>`
  position: relative;
  border-top: ${({ $isfirst }) =>
    !$isfirst && `1px solid ${theme.colors.vscode.border[3]}`};
  flex: ${({ $isfolder, $isopen }) => $isopen && $isfolder && "1"};
  /* 드래그로 변경가능하게 수정할 것 */
  min-height: ${({ $isopen }) => ($isopen ? "160px" : "26px")};
  overflow-y: hidden;
  transition-property: flex, min-height;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
`

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  padding: 2px;
  cursor: pointer;
`

const ChevronIcon = styled(IconPath.Chevron)<ChevronIconProps>`
  width: 22px;
  height: 22px;
  stroke: ${theme.colors.vscode.txt[1]};
  rotate: ${({ $isopen }) => ($isopen ? "180deg" : "90deg")};
`

const Title = styled.h5`
  user-select: none;
`

const ContentBox = styled.div`
  padding: 0 24px;
`

const S = { Container, ChevronIcon, TitleBox, Title, ContentBox }

export default S
