import styled from "styled-components"
import { theme } from "../../../styles/theme.styles"

const Wrapper = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
`

const Container = styled.ul`
  width: 100%;
  aspect-ratio: 1/1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 0 4px;
`

const Cell = styled.div`
  width: calc(25% - 8px);
  aspect-ratio: 1/1;
`

const Decoration = styled.img`
  width: 100%;
  height: 100%;
`

const EmptyCell = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: ${theme.radii.max};
  border: 5px dashed ${theme.colors.notion.perple};
`

const S = { Wrapper, Container, Row, Cell, Decoration, EmptyCell }

export default S
