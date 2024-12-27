import { PageProps } from "gatsby"
import React from "react"

interface SkillPageProps extends PageProps {
  pageContext: Skill
}

export default function Page({ pageContext }: SkillPageProps) {
  return <div>{pageContext.title}</div>
}
