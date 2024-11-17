import React from "react"
import { ComponentProps } from "./PostModal.interface"
import S from "./PostModal.styles"

export default function PostModal({ onClickClose }: ComponentProps) {
  // const [postData, setPostData] = useState<PostData>()

  // const onClickSend = async () => {
  //   const result = await createPost(postData)
  //   if (result) {
  //     alert("메세지 보내기에 성공하였습니다.")
  //     onClickClose(undefined)
  //   } else alert("다시 시도하여 주십시오.")
  // }

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>
          <S.TitleText>제목:</S.TitleText>
          <S.Input placeholder="제목을 작성해 주세요." />
        </S.Title>
        <S.Description>
          <S.Textarea placeholder="내용을 작성해 주세요." />
        </S.Description>
        <S.SubmitButton
        // onClick={onClickSend}
        >
          보내기
        </S.SubmitButton>
      </S.Container>
      <S.ExitButton onClick={onClickClose}>
        <S.ExitIcon />
      </S.ExitButton>
    </S.Wrapper>
  )
}
