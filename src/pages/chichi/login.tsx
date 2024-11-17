import { PageProps, graphql, navigate } from "gatsby"
import React, { useState } from "react"
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
  const [selected, setSelected] = useState<string>()
  const onClickOption = (option: string) => {
    setSelected(option)
  }
  const onClickLogin = () => {
    if (typeof window !== "undefined" && !!selected) {
      localStorage.setItem("chichi", selected)
      navigate("/chichi")
    }
  }

  return (
    <Layout>
      <Header />
      <Select options={authors} selected={selected} onClick={onClickOption} />
      <LoginButton selected={selected} onClick={onClickLogin} />
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
