import React from "react"
import About from "../components/portfolio/about/about"
import Contact from "../components/portfolio/contact"
import Intro from "../components/portfolio/intro"
import Layout from "../components/portfolio/layout/portfolioLayout"
import Projects from "../components/portfolio/projects/projects"
import Skills from "../components/portfolio/skills/skills"
import PortfolioContainer from "../contexts/PortfolioContext"

export default function Homepage() {
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

// export const query = graphql`
//   {
//     contentfulEntry {
//       ... on ContentfulHomepage {
//         id
//         title
//         image {
//           url
//           id
//         }
//         description
//       }
//     }
//   }
// `
