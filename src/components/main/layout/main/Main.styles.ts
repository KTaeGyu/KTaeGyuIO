import styled from "styled-components"
import DIMMENSIONS from "../../../../constants/dimmensions"
import { theme } from "../../../../styles/theme.styles"
import { ContainerProps } from "./Main.interface"

const Container = styled.main<ContainerProps>`
  grid-row: ${({ $pannel }) => ($pannel ? "span 1" : "span 2")};
  grid-column: ${({ $primarySideBar }) =>
    $primarySideBar ? "span 1" : "span 2"};
  background-color: ${theme.colors.vscode.bg.black[7]};
  display: flex;
  flex-direction: column;
  // 스크롤
  max-height: calc(
    100dvh /* header */ - ${theme.sizes.header.height} /* pannel */
      ${({ $pannel }) => $pannel && ` - ${DIMMENSIONS.$pannelheight}px`}
      /* bottom */ - ${theme.sizes.token[1]}
  );
  & > *:last-child {
    flex: 1;
    overflow-y: auto;
    ${theme.scrolls[1]}
  }
`

const S = { Container }

export default S
