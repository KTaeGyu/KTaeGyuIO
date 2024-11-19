import { navigate, PageProps } from "gatsby"
import React, { useEffect, useMemo, useState } from "react"
import Buttons from "../../components/chichi/author/Buttons"
import Header from "../../components/chichi/author/Header"
import Layout from "../../components/chichi/author/Layout"
import PostModal from "../../components/chichi/author/PostModal"
import C from "../../components/chichi/author/PostModal.constant"
import Posts from "../../components/chichi/author/Posts"
import getChichi from "../../functions/getChichi"

interface AuthorPageProps extends PageProps {
  pageContext: Omit<Author, "id" | "posting" | "password">
}

export default function AuthorPage({ pageContext }: AuthorPageProps) {
  const { contentful_id, name, posted } = pageContext

  // 포스트
  const [posts, setPosts] = useState(posted)
  const onClickSend = () => {
    const imgPath = C.IMG_PATHS[Math.floor(Math.random() * C.IMG_PATHS.length)]
    // 더미 데이터로 비주얼 업데이트
    setPosts((prev) => [
      ...prev,
      { id: prev.length.toString(), imgPath, title: "dummy" },
    ])
  }
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
      if (!name) {
        alert("자신이 누구인지 설정해주세요.")
        navigate("/chichi/login")
      } else setChichi(name)
    }
  }, [])

  return (
    <Layout>
      <Header readerName={name} isMe={isMe} />
      <Posts posts={posts.slice(0, 10)} isMe={isMe} onClick={onClickRead} />
      <Buttons isMe={isMe} onClickPost={onClickPost} />
      {modal && (
        <PostModal
          onClickClose={onClickClose}
          onClickSend={onClickSend}
          readerId={contentful_id}
        />
      )}
    </Layout>
  )
}
