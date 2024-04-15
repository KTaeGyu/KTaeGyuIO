import * as React from "react"
import SEOHead from "../components/head"
import Layout from "../layouts/portfolio"

export default function NotFound() {
  return <Layout></Layout>
}
export const Head = () => {
  return <SEOHead title="404: Page not found" />
}
