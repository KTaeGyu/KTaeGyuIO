import * as React from "react"
import SEOHead from "../components/head"

export default function NotFound() {
  return (
    <>
      <h1>404 Not Found</h1>
    </>
  )
}
export const Head = () => {
  return <SEOHead title="404: Page not found" />
}
