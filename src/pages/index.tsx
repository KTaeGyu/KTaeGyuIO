import * as React from "react"
import About from "../components/portfolio/about/about"
import Contact from "../components/portfolio/contact"
import Intro from "../components/portfolio/intro"
import Projects from "../components/portfolio/projects/projects"
import Skills from "../components/portfolio/skills/skills"
import Layout from "../layouts/portfolio"

export default function Homepage() {
  return (
    <Layout>
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  )
}
// export const query = graphql`
//   {
//     homepage {
//       id
//       title
//       description
//       image {
//         id
//         url
//       }
//       blocks: content {
//         id
//         blocktype
//       }
//     }
//   }
// `
