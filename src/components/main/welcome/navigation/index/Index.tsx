import { navigate } from "gatsby"
import React from "react"
import IconPath from "../../../../../assets/iconPath"
import { useAppDispatch } from "../../../../../state/hooks"
import { addEditor } from "../../../../../state/slices/folderSlice"
import { Tab } from "../../../layout/main/tabs/Tab.interface"
import S from "./Index.styles"

export default function Index({ title, route }: Tab) {
  const dispatch = useAppDispatch()
  const Icon = IconPath[title]
  const onClick = () => {
    dispatch(addEditor({ title: "index.tsx", route }))
    navigate(route)
  }

  return (
    <S.Wrapper>
      <S.Container onClick={onClick}>
        <Icon viewBox="0 0 24 24" />
        <S.Title>{title}...</S.Title>
      </S.Container>
    </S.Wrapper>
  )
}
