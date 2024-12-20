import styled from "styled-components"
import IconPath from "../../../../assets/iconPath"
import { theme } from "../../../../styles/theme.styles"

const Container = styled.div`
  position: relative;
  z-index: 1;
`

const Button = styled.button`
  ${theme.buttons.icon[22]}

  .active {
    background-color: ${theme.colors.vscode.bg.black[8]};
  }

  &:hover {
    background-color: ${theme.colors.vscode.bg.black[8]};
  }
`

const Icon = styled(IconPath.More)`
  fill: ${theme.colors.vscode.txt[1]};
`

const S = { Container, Button, Icon }

export default S
