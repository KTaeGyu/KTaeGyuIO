import { graphql, navigate, PageProps } from "gatsby"
import React, { useEffect, useState } from "react"
import Header from "../../components/chichi/index/Header"
import Layout from "../../components/chichi/index/Layout"
import { Member } from "../../components/chichi/index/MemberItem.interface"
import Members from "../../components/chichi/index/Members"
import NextButton from "../../components/chichi/index/NextButton"

interface ChichiPageProps extends PageProps {
  data: {
    allContentfulAuthor: {
      nodes: Member[]
    }
  }
}

export default function ChichiPage({ data }: ChichiPageProps) {
  const authors = data.allContentfulAuthor.nodes
  const [selected, setSelected] = useState<Member>()
  const onClickMember = (target: Member) => {
    setSelected((prev) =>
      prev && prev.username === target.username ? null : target
    )
  }
  const onClickButton = () => {
    navigate(`/chichi/${selected.username}`)
  }

  useEffect(() => {}, [])

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
