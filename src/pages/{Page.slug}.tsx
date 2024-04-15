import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../layouts/portfolio"

interface PageProps {
  data: {
    page: {
      id: string
      title: string
      slug: string
      description: string
      image: { id: string; url: string }
      html: string
    }
  }
}

export default function Page(props: PageProps) {
  const { page } = props.data

  return <Layout></Layout>
}
export const query = graphql`
  query PageContent($id: String!) {
    page(id: { eq: $id }) {
      id
      title
      slug
      description
      image {
        id
        url
      }
      html
    }
  }
`
