import { PageProps } from "gatsby"
import React from "react"
import Layout from "../../../components/main/layout/Layout"

interface ProjectPageProps extends PageProps {
  pageContext: Project
}

export default function ProjectPage({ pageContext }: ProjectPageProps) {
  return <Layout>{pageContext.title}</Layout>
}
