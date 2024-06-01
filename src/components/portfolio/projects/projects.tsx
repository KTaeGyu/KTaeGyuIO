import React, { useContext } from "react"
import { PortfolioContext } from "../../../contexts/PortfolioContext"
import {
  Hr,
  Section,
  Title,
  Wrapper,
} from "../../../styles/portfolio/projects/projects"
import Majors from "./majors"
import Minis from "./minis"

const Projects = () => {
  const { projectsRef } = useContext(PortfolioContext) || {}

  return (
    <Section ref={projectsRef}>
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
