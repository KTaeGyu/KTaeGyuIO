import React from "react"
import { feature } from "../../../assets/data/features"
import IconPath from "../../../assets/iconPath"
import {
  BackDrop,
  Content,
  Hexagon,
  IconBox,
  Space,
  Title,
  Wrapper,
} from "../../../styles/portfolio/about/feature"

const Feature = ({ icon, title, content }: feature) => {
  const Icon = IconPath[icon]

  return (
    <Wrapper>
      <IconBox>
        <Icon />
        <Title>{title}</Title>
      </IconBox>
      <Space>
        <Hexagon>
          <BackDrop></BackDrop>
          <Content>{content}</Content>
        </Hexagon>
      </Space>
    </Wrapper>
  )
}

export default Feature
