import React from "react"
import { feature } from "../../assets/data/features"
import {
  BackDrop,
  Content,
  Hexagon,
  Icon,
  Space,
  Title,
  Wrapper,
} from "../../styles/portfolio/feature"

const Feature = ({ icon, title, content }: feature) => {
  return (
    <Wrapper>
      <Icon>
        {icon}
        <Title>{title}</Title>
      </Icon>
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
