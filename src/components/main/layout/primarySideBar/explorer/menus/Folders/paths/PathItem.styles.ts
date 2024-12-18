import styled from "styled-components"
import IconPath from "../../../../../../../../assets/iconPath"
import { theme } from "../../../../../../../../styles/theme.styles"
import {
  ChevronIconProps,
  ContainerProps,
  TitleBoxProps,
} from "./PathItem.interface"

const Container = styled.div<ContainerProps>`
  border-left: ${({ $isroot }) =>
    !$isroot && `1px solid ${theme.colors.vscode.border[3]}`};
`

const TitleBox = styled.div<TitleBoxProps>`
  display: flex;
  align-items: center;
  height: 28px;
  padding-left: ${({ $subsets }) => !$subsets && "24px"};
  user-select: none;
  cursor: pointer;
  &::before {
    ${({ $islocation }) => $islocation && `content: "";`}
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 28px;
    background-color: #ffffff11;
    left: 0;
  }
  &:hover {
    &::before {
      content: "";
    }
  }
`

const ChevronIcon = styled(IconPath.Chevron)<ChevronIconProps>`
  stroke: ${theme.colors.vscode.txt[1]};
  rotate: ${({ $isopen }) => ($isopen ? "180deg" : "90deg")};
`

const Icon = styled.img`
  width: 16px;
  height: 16px;
`

const Title = styled.p`
  line-height: ${theme.lineHeights.button};
  margin: 0 6px;
`

const S = { Container, TitleBox, ChevronIcon, Icon, Title }

export default S
