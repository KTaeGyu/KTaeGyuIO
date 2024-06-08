import React, { useContext } from "react"
import { PortfolioContext } from "../../../contexts/PortfolioContext"
import {
  Hr,
  Info,
  Section,
  Title,
  Wrapper,
} from "../../../styles/portfolio/projects/projects"
import Majors from "./majors"

const Projects = () => {
  const { projectsRef } = useContext(PortfolioContext) || {}

  return (
    <Section ref={projectsRef}>
      <Wrapper>
        <Title>Projects</Title>
        <Info>
          &#8251; <b>"README.md"</b>에 저의 역할과 기여가 상세히 적혀있습니다.{" "}
          꼭 방문해주세요!
        </Info>
        <Hr />
        <Majors />
      </Wrapper>
    </Section>
  )
}

export default Projects
