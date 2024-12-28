import { graphql, navigate, PageProps } from "gatsby"
import React, { useEffect, useState } from "react"
import Header from "../../components/chichi/index/Header"
import Layout from "../../components/chichi/index/Layout"
import { Member } from "../../components/chichi/index/MemberItem.interface"
import Members from "../../components/chichi/index/Members"
import NextButton from "../../components/chichi/index/NextButton"
import getChichi from "../../functions/getChichi"

interface ChichiPageProps extends PageProps {
  data: {
    allContentfulAuthor: {
      nodes: Member[]
    }
  }
}

export default function ChichiPage({ data }: ChichiPageProps) {
  const authors = data.allContentfulAuthor.nodes
  // 멤버 선택
  const [selected, setSelected] = useState<Member>()
  const onClickMember = (target: Member) => {
    setSelected((prev) =>
      prev && prev.username === target.username ? null : target
    )
  }
  // 다음 버튼
  const onClickButton = () => {
    navigate(`/chichi/${selected.username}`)
  }
  // 로그인 확인
  const [chichi, setChichi] = useState<string>()
  useEffect(() => {
    const chichi = getChichi()
    if (!chichi?.name) {
      alert("자신이 누구인지 설정해주세요.")
      navigate("/chichi/login")
    } else setChichi(name)
  }, [])

  return (
    <Layout>
      <Header />
      <Members onClick={onClickMember} authors={authors} selected={selected} />
      <NextButton onClick={onClickButton} selected={selected} chichi={chichi} />
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
