import * as React from "react"
import About from "../components/portfolio/about"
import Intro from "../components/portfolio/intro"
import Skills from "../components/portfolio/skills"
import Layout from "../layouts/portfolio"

export default function Homepage() {
  return (
    <Layout>
      <Intro />
      <About />
      <Skills />
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
