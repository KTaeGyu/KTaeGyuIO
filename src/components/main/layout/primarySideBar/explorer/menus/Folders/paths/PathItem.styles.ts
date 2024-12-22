import styled from "styled-components"
import IconPath from "../../../../../../../../assets/iconPath"
import { theme } from "../../../../../../../../styles/theme.styles"
import { ChevronIconProps, TitleBoxProps } from "./PathItem.interface"

const Container = styled.div``

const TitleBox = styled.div<TitleBoxProps>`
  display: flex;
  align-items: center;
  height: 24px;
  padding-left: ${({ $subsets }) => !$subsets && "18px"};
  user-select: none;
  cursor: pointer;

  &::before {
    ${({ $isLocation }) => $isLocation && `content: "";`}
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
  width: ${theme.sizes.icon[18]};
  height: ${theme.sizes.icon[18]};
  stroke: ${theme.colors.vscode.txt[1]};
  rotate: ${({ $isOpen }) => ($isOpen ? "180deg" : "90deg")};
  stroke-width: 1.5px;
`

const Icon = styled.img`
  width: 13px;
  height: 13px;
  margin: 0 ${theme.space.token[3]};
`

const Title = styled.p`
  font-size: ${theme.fontSizes[1]};
  line-height: ${theme.fontSizes[1]};
`

const S = { Container, TitleBox, ChevronIcon, Icon, Title }

export default S
