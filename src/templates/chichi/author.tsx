import { PageProps } from "gatsby"
import React from "react"

interface AuthorPageProps extends PageProps {
  pageContext: Omit<Author, "id">
}

export default function AuthorPage({ pageContext }: AuthorPageProps) {
  return <div>여긴가</div>
}
