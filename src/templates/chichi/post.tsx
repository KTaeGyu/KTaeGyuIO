import { navigate, PageProps } from "gatsby"
import React, { useEffect } from "react"
import Layout from "../../components/chichi/author/Layout"
import ModalS from "../../components/chichi/author/PostModal.styles"

interface PostPageProps extends PageProps {
  pageContext: Post
}

export default function PostPage({ pageContext }: PostPageProps) {
  const { title, description, author, reader } = pageContext

  // 로그인
  useEffect(() => {
    if (typeof window !== undefined) {
      const chichi = localStorage.getItem("chichi")
      if (!chichi) {
        alert("자신이 누구인지 설정해주세요.")
        navigate("/chichi/login")
      }
    }
  }, [])

  return (
    <Layout>
      <ModalS.Wrapper>
        <ModalS.Container>
          <ModalS.Title>
            <ModalS.TitleText>제목:</ModalS.TitleText>
            <ModalS.Input value={title} disabled />
          </ModalS.Title>
          <ModalS.Description>
            <ModalS.Textarea value={description} disabled />
          </ModalS.Description>
          <ModalS.SubmitButton disabled>
            From.{author.nickname} / To.{reader.nickname}
          </ModalS.SubmitButton>
        </ModalS.Container>
        <ModalS.ExitButton onClick={() => navigate(-1)}>
          <ModalS.ExitIcon />
        </ModalS.ExitButton>
      </ModalS.Wrapper>
    </Layout>
  )
}
