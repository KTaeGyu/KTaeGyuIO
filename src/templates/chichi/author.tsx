import { PageProps } from "gatsby"
import React from "react"
import Header from "../../components/chichi/author/Header"
import Layout from "../../components/chichi/author/Layout"
import PostButton from "../../components/chichi/author/PostButton"
import Posts from "../../components/chichi/author/Posts"

interface AuthorPageProps extends PageProps {
  pageContext: Omit<Author, "id">
}

export default function AuthorPage({ pageContext }: AuthorPageProps) {
  return (
    <Layout>
      <Header />
      <Posts />
      <PostButton />
    </Layout>
  )
}
