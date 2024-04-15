import React from "react"
import { Hr, Section, Title, Wrapper } from "../../styles/portfolio/projects"
import Teams from "./teams"

const Projects = () => {
  return (
    <Section>
      <Wrapper>
        <Title>Projects</Title>
        <Hr />
        <Teams />
      </Wrapper>
    </Section>
  )
}

export default Projects
