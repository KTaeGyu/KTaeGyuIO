import styled from "styled-components"
import IconPath from "../../../../../../assets/iconPath"
import { theme } from "../../../../../../styles/theme.css"
import { ChevronIconProps, ContainerProps } from "./MenuItem.interface"

const Container = styled.li<ContainerProps>`
  ${({ $isfirst }) =>
    !$isfirst && `border-top: 1px solid ${theme.colors.vscode.border[3]};`}
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

const S = { Container, ChevronIcon, TitleBox, Title }

export default S
