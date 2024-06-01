import React from "react"
import About from "../components/portfolio/about/about"
import Contact from "../components/portfolio/contact"
import Intro from "../components/portfolio/intro"
import Layout from "../components/portfolio/layout/portfolioLayout"
import Projects from "../components/portfolio/projects/projects"
import Skills from "../components/portfolio/skills/skills"
import PortfolioContainer from "../contexts/PortfolioContext"

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <Layout>
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Layout>
    </PortfolioContainer>
  )
}

export default Portfolio
