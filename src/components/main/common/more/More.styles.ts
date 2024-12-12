import styled from "styled-components"
import IconPath from "../../../../assets/iconPath"
import { theme } from "../../../../styles/theme.css"

const Container = styled.div`
  z-index: 1;
  position: relative;
  border-radius: ${theme.radii[1]};

  & > button.active {
    background-color: ${theme.colors.vscode.bg.black[8]};
  }

  &:hover {
    background-color: ${theme.colors.vscode.bg.black[8]};
  }
`

const Button = styled.button`
  line-height: 0;
  padding: 6px 0;
  cursor: pointer;
`

const Icon = styled(IconPath.More)`
  fill: ${theme.colors.vscode.txt[1]};
`

const S = { Container, Button, Icon }

export default S
