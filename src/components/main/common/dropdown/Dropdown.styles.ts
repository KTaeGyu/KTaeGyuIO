import styled from "styled-components"
import { theme } from "../../../../styles/theme.styles"
import { ContainerProps } from "./Dropdown.interface"

const Container = styled.ul<ContainerProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.vscode.bg.black[5]};
  border: 1px solid ${theme.colors.vscode.border[3]};
  border-radius: ${theme.radii[1]};

  ${({ position }) =>
    position === "down"
      ? "left: -6px; top: calc(100% + 6px);"
      : position === "right"
      ? "left: calc(100% + 6px); top: -6px;"
      : position === "just-down"
      ? "left: 0; top: 100%;"
      : position === "just-right" && "left: 100%; top: 0;"}
`
const S = { Container }

export default S
