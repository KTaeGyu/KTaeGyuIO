import styled from "styled-components"
import IconPath from "../../../assets/iconPath"
import { theme } from "../../../styles/theme.css"

const Container = styled.div`
  display: flex;
  padding: 16px;
`

const BackButtonBox = styled.div`
  flex: 1;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: ${theme.radii.max};
`

const BackButton = styled(Button)`
  background-color: ${theme.colors.notion.red};
`

const BackIcon = styled(IconPath.Arrow)`
  width: 24px;
  height: 24px;
  stroke: ${theme.colors.original.white};
`

const PostButton = styled(Button)`
  background-color: ${theme.colors.notion.green};
`

const PostIcon = styled(IconPath.Plus)`
  width: 24px;
  height: 24px;
  stroke: ${theme.colors.original.white};
`

const S = {
  Container,
  BackButtonBox,
  BackButton,
  BackIcon,
  PostButton,
  PostIcon,
}

export default S
