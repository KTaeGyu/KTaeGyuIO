import styled from "styled-components"
import { theme } from "../../../../styles/theme.styles"
import { ContainerProps } from "./Guide.interface"

const Container = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${theme.space.token[6]};
  padding: ${theme.space.token[6]} ${theme.space.token[17]};
  background-color: ${theme.colors.vscode.bg.black[5]};
  border-radius: ${theme.radii[2]};
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.vscode.bg.black[10]};
  }

  &::before {
    content: ${({ $recommand }) => $recommand && `""`};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip-path: polygon(36px 0, 0 0, 0 27px);
    border-top-left-radius: ${theme.radii[2]};
    background-color: ${theme.colors.vscode.bg.blue[2]};
  }
  &::after {
    content: ${({ $recommand }) => $recommand && `""`};
    position: absolute;
    top: ${theme.space.token[2]};
    left: ${theme.space.token[1]};
    width: 14px;
    height: 14px;
    clip-path: polygon(
      50% 0%,
      61% 35%,
      98% 35%,
      68% 57%,
      79% 91%,
      50% 70%,
      21% 91%,
      32% 57%,
      2% 35%,
      39% 35%
    );
    background-color: white;
  }
`

const Title = styled.h5`
  color: ${theme.colors.vscode.txt[1]};
  font-size: ${theme.fontSizes[1]};
  white-space: nowrap;
`

const Description = styled.p`
  color: ${theme.colors.vscode.txt[1]};
  font-size: ${theme.fontSizes[1]};
`

const Icon = styled.img`
  position: absolute;
  left: ${theme.space.token[4]};
  width: 16px;
  height: 16px;
  object-fit: contain;
  border-radius: ${theme.radii[1]};
`

const S = { Container, Title, Description, Icon }

export default S
