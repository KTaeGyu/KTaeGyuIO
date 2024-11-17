import { PageProps, graphql, navigate } from "gatsby"
import React, { useState } from "react"
import Layout from "../../components/chichi/index/Layout"
import Header from "../../components/chichi/login/Header"
import LoginButton from "../../components/chichi/login/LoginButton"
import Select from "../../components/chichi/login/Select"

export type Chichi = Pick<Author, "id" | "name">

interface LoginPageProps extends PageProps {
  data: {
    allContentfulAuthor: {
      nodes: Chichi[]
    }
  }
}

export default function LoginPage({ data }: LoginPageProps) {
  const authors = data.allContentfulAuthor.nodes
  const [selected, setSelected] = useState<Chichi>()
  const onClickOption = (option: Chichi) => {
    setSelected(option)
  }
  console.log(authors)

  const onClickLogin = () => {
    if (typeof window !== "undefined" && !!selected) {
      localStorage.setItem("chichi", selected.name)
      localStorage.setItem("chichiId", selected.id)
      navigate("/chichi")
    }
  }

  return (
    <Layout>
      <Header />
      <Select options={authors} selected={selected} onClick={onClickOption} />
      <LoginButton selected={selected?.name} onClick={onClickLogin} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulAuthor {
      nodes {
        id
        name
      }
    }
  }
`
