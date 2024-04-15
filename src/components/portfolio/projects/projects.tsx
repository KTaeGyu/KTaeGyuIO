import React from "react"
import {
  Hr,
  Section,
  Title,
  Wrapper,
} from "../../../styles/portfolio/projects/projects"
import Majors from "./majors"
import Minis from "./minis"

const Projects = () => {
  return (
    <Section>
      <Wrapper>
        <Title>Projects</Title>
        <Hr />
        <Majors />
        <Minis />
      </Wrapper>
    </Section>
  )
}

export default Projects
