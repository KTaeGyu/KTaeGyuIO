import styled from "styled-components"
import IconPath from "../../../assets/iconPath"
import { theme } from "../../../styles/theme.css"
import { ChevronProps, TextProps } from "./Select.interface"

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background-color: #fff;
  margin: 16px;
  padding: 8px 16px;
  border-radius: 8px;
`

const Text = styled.span<TextProps>`
  flex: 1;
  text-align: center;
  color: ${({ selected }) =>
    selected ? theme.colors.original.black : theme.colors.original.lightgray};
`

const Chevron = styled(IconPath.Chevron)<ChevronProps>`
  stroke: ${({ selected }) =>
    selected ? theme.colors.original.black : theme.colors.original.lightgray};
  rotate: ${({ "data-opened": opened }) => (opened ? "0" : "180deg")};
`

const Options = styled.ul`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.original.white};
  border-radius: 8px;
  height: 200px;
  overflow-y: scroll;
`

const OptionItem = styled.li`
  padding: 8px;
`

const S = { Container, Text, Chevron, Options, OptionItem }

export default S
