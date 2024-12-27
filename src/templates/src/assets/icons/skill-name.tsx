import { PageProps } from "gatsby"
import React from "react"
import Layout from "../../../../components/main/layout/Layout"

interface SkillPageProps extends PageProps {
  pageContext: Skill
}

export default function Page({ pageContext }: SkillPageProps) {
  return <Layout>{pageContext.title}</Layout>
}
