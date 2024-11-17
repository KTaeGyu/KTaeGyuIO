import React, { ChangeEventHandler, useState } from "react"
import createPost, { PostData } from "../../../api/postPost"
import C from "./PostModal.constant"
import { ComponentProps } from "./PostModal.interface"
import S from "./PostModal.styles"

export default function PostModal({ readerId, onClickClose }: ComponentProps) {
  const [postData, setPostData] = useState<PostData>({
    title: "",
    description: "",
    readerId,
    authorId: localStorage.getItem("chichiId"),
    imgPath: C.IMG_PATHS[Math.floor(Math.random() * C.IMG_PATHS.length)],
  })

  const onChangeTitle: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPostData((prev) => ({ ...prev, title: e.target.value }))
  }
  const onChangeDescription: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setPostData((prev) => ({ ...prev, description: e.target.value }))
  }
  const onClickSend = async () => {
    if (!postData.title || !postData.description) {
      alert("내용을 채워주세요.")
      return
    }
    const result = await createPost(postData)
    if (result) {
      alert("메세지 보내기에 성공하였습니다.")
      onClickClose(undefined)
    } else alert("다시 시도하여 주십시오.")
  }

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>
          <S.TitleText>제목:</S.TitleText>
          <S.Input
            value={postData.title}
            onChange={onChangeTitle}
            placeholder="제목을 작성해 주세요."
          />
        </S.Title>
        <S.Description>
          <S.Textarea
            value={postData.description}
            onChange={onChangeDescription}
            placeholder="내용을 작성해 주세요."
          />
        </S.Description>
        <S.SubmitButton onClick={onClickSend}>보내기</S.SubmitButton>
      </S.Container>
      <S.ExitButton onClick={onClickClose}>
        <S.ExitIcon />
      </S.ExitButton>
    </S.Wrapper>
  )
}
