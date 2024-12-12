import styled from "styled-components"
import { theme } from "../../../../styles/theme.css"
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
    position === "down" ? "left: 0; top: 100%;" : "left: 100%; top: 0;"}
`
const S = { Container }

export default S
