import { navigate, PageProps } from "gatsby"
import React, { useEffect, useMemo, useState } from "react"
import Buttons from "../../components/chichi/author/Buttons"
import Header from "../../components/chichi/author/Header"
import Layout from "../../components/chichi/author/Layout"
import PostModal from "../../components/chichi/author/PostModal"
import Posts from "../../components/chichi/author/Posts"
import getChichi from "../../functions/getChichi"

interface AuthorPageProps extends PageProps {
  pageContext: Omit<Author, "id" | "posting" | "password">
}

export default function AuthorPage({ pageContext }: AuthorPageProps) {
  const { contentful_id, name, posted } = pageContext

  // 포스트
  const onClickRead = (id: string) => {
    navigate(`/chichi/post/${id}`)
  }
  // 모달
  const [modal, setModal] = useState(false)
  const onClickPost = () => {
    setModal(true)
  }
  const onClickClose = () => {
    setModal(false)
  }
  // 로그인 확인
  const [chichi, setChichi] = useState<string>()
  const isMe = useMemo(() => name === chichi, [chichi])
  useEffect(() => {
    if (typeof window !== undefined) {
      const { name } = getChichi()
      if (!chichi) {
        alert("자신이 누구인지 설정해주세요.")
        navigate("/chichi/login")
      } else setChichi(name)
    }
  }, [])

  return (
    <Layout>
      <Header readerName={name} isMe={isMe} />
      <Posts posts={posted?.slice(0, 10)} isMe={isMe} onClick={onClickRead} />
      <Buttons isMe={isMe} onClickPost={onClickPost} />
      {modal && (
        <PostModal onClickClose={onClickClose} readerId={contentful_id} />
      )}
    </Layout>
  )
}
