import styled from "styled-components"
import { theme } from "../../../../styles/theme.styles"
import { ContainerProps } from "./Dropdown.interface"

const Container = styled.ul<ContainerProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 6px;
  background-color: ${theme.colors.vscode.bg.black[5]};
  border: 1px solid ${theme.colors.vscode.border[3]};
  border-radius: ${theme.radii[2]};

  ${({ position }) =>
    position === "down"
      ? "left: -6px; top: calc(100% + 6px);"
      : "left: calc(100% + 6px); top: -6px;"}
`
const S = { Container }

export default S
