import { PageProps } from "gatsby"
import React from "react"

interface ProjectPageProps extends PageProps {
  pageContext: Project
}

export default function ProjectPage({ pageContext }: ProjectPageProps) {
  return <div>{pageContext.title}</div>
}
