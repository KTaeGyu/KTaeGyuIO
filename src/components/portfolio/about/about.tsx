import React from "react"
import features from "../../../assets/data/features"
import {
  Content,
  Hr,
  Section,
  Title,
  Wrapper,
} from "../../../styles/portfolio/about/about"
import Feature from "./feature"

const About = () => {
  return (
    <Section>
      <Wrapper>
        <Title>About Me</Title>
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
