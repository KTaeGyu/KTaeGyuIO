import { graphql, navigate, PageProps } from "gatsby"
import React, { useState } from "react"
import Header from "../../components/chichi/Header"
import Layout from "../../components/chichi/Layout"
import Members from "../../components/chichi/Members"
import NextButton from "../../components/chichi/NextButton"

type Node = Pick<Author, "name" | "nickname" | "username" | "charactor">

interface ChichiPageProps extends PageProps {
  data: {
    allContentfulAuthor: {
      nodes: Node[]
    }
  }
}

export default function ChichiPage({ data }: ChichiPageProps) {
  const authors = data.allContentfulAuthor.nodes
  const [selected, setSelected] = useState<Node>()
  const onClickMember = (target: Node) => {
    setSelected((prev) =>
      prev && prev.username === target.username ? null : target
    )
  }
  const onClickButton = () => {
    navigate(`/chichi/${selected.username}`)
  }

  return (
    <Layout>
      <Header />
      <Members onClick={onClickMember} authors={authors} />
      <NextButton onClick={onClickButton} selected={selected} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulAuthor {
      nodes {
        name
        nickname
        username
        charactor {
          file {
            url
          }
        }
      }
    }
  }
`
