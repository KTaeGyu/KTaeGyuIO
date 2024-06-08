import React, { useContext } from "react"
import features from "../../../assets/data/features"
import { PortfolioContext } from "../../../contexts/PortfolioContext"
import {
  Content,
  Hr,
  Info,
  Section,
  Title,
  Wrapper,
} from "../../../styles/portfolio/about/about"
import Feature from "./feature"

const About = () => {
  const { aboutRef } = useContext(PortfolioContext) || {}

  return (
    <Section ref={aboutRef}>
      <Wrapper>
        <Title>About Me</Title>
        <Info>&#8251; 마우스를 올리시면 자세한 포부를 볼 수 있습니다.</Info>
        <Hr />
        <Content>
          {features.map((feature, idx) => (
            <Feature
              key={idx}
              icon={feature.icon}
              title={feature.title}
              content={feature.content}
            />
          ))}
        </Content>
      </Wrapper>
    </Section>
  )
}

export default About
