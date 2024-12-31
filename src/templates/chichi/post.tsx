import { navigate, PageProps } from "gatsby"
import React, { useEffect, useState } from "react"
import Layout from "../../components/chichi/author/Layout"
import ModalS from "../../components/chichi/author/PostModal.styles"
import getChichi from "../../functions/getChichi"

interface PostPageProps extends PageProps {
  pageContext: Post
}

export default function PostPage({ pageContext }: PostPageProps) {
  const { title, description, author, reader } = pageContext

  // 로그인
  useEffect(() => {
    if (typeof window !== undefined) {
      const chichi = getChichi()
      if (!chichi) {
        alert("자신이 누구인지 설정해주세요.")
        navigate("/chichi/login")
      }
    }
  }, [])
  // 공개 일
  const [isPublished, setIsPublished] = useState(false)
  useEffect(() => {
    const currentDate = new Date()
    const koreaTime = currentDate.toLocaleString("en-US", {
      timeZone: "Asia/Seoul",
    })
    const koreaDate = new Date(koreaTime)
    const targetDate = new Date(koreaDate.getFullYear(), 11, 25, 0, 0, 0)

    if (koreaDate < targetDate) {
      alert("12월 25일 00시 00분에 공개됩니다.")
      navigate("/", { replace: true })
    } else {
      setIsPublished(true)
    }
  }, [])

  return (
    <Layout>
      <ModalS.Wrapper>
        <ModalS.Container>
          <ModalS.Title>
            <ModalS.TitleText>제목:</ModalS.TitleText>
            <ModalS.Input value={isPublished ? title : ""} disabled />
          </ModalS.Title>
          <ModalS.Description>
            <ModalS.Textarea
              value={isPublished ? description.description : ""}
              disabled
            />
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
