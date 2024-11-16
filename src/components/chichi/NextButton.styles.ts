import styled from "styled-components"
import IconPath from "../../assets/iconPath"
import { theme } from "../../styles/theme.css"

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 16px;
  padding: 12px 0;
  background-color: ${theme.colors.notion.red};
  border-radius: 8px;
  color: ${theme.colors.notion.red_bg};
  font-size: 18px;
  font-weight: 600;
  &:disabled {
    color: ${theme.colors.notion.red_bg};
    opacity: 0.9;
  }
  &:disabled > svg {
    stroke: ${theme.colors.notion.red_bg};
  }
`

const ChevronDouble = styled(IconPath.ChevronDouble)`
  width: 24px;
  height: 24px;
  stroke: ${theme.colors.notion.red_bg};
`

const S = { Container, ChevronDouble }

export default S
