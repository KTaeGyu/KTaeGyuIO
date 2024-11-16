import { PageProps, graphql } from "gatsby"
import React from "react"
import Layout from "../../components/chichi/index/Layout"
import Header from "../../components/chichi/login/Header"
import LoginButton from "../../components/chichi/login/LoginButton"
import Select from "../../components/chichi/login/Select"

interface LoginPageProps extends PageProps {
  data: {
    allContentfulAuthor: {
      nodes: Pick<Author, "name">[]
    }
  }
}

export default function LoginPage({ data }: LoginPageProps) {
  const authors = data.allContentfulAuthor.nodes

  return (
    <Layout>
      <Header />
      <Select options={authors} />
      <LoginButton />
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulAuthor {
      nodes {
        name
      }
    }
  }
`
