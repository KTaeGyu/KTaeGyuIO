import { PageProps } from "gatsby"
import React from "react"

interface PostPageProps extends PageProps {
  pageContext: Post
}

export default function PostPage({ pageContext }: PostPageProps) {
  const { title, description } = pageContext

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}
