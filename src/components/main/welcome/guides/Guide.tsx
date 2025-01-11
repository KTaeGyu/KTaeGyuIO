import { navigate } from "gatsby"
import React from "react"
import { useAppDispatch } from "../../../../state/hooks"
import { addEditor } from "../../../../state/slices/folderSlice"
import { ComponentProps } from "./Guide.interface"
import S from "./Guide.styles"

export default function Guide({
  title,
  route,
  description,
  iconPath,
  recommand,
}: ComponentProps) {
  const dispatch = useAppDispatch()
  const onClick = () => {
    dispatch(addEditor({ title: "README.md", route }))
    navigate(route)
  }

  return (
    <S.Container $recommand={recommand}>
      <S.Title>{title}</S.Title>
      {description && <S.Description>{description}</S.Description>}
    </S.Container>
  )
}
