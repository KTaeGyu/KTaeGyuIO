import React from "react"
import IconPath from "../../../../../assets/iconPath"
import { useAppDispatch, useAppSelector } from "../../../../../state/hooks"
import {
  selectPrimarySideBar,
  selectPsbIsOpen,
  setPrimarySideBar,
} from "../../../../../state/slices/layoutSlice"
import { ComponentProps } from "./ActivityItem.interface"
import S from "./ActivityItem.styles"

export default function ActivityItem({ title }: ComponentProps) {
  const Icon = IconPath[title]
  const dispatch = useAppDispatch()
  const primarySideBar = useAppSelector(selectPrimarySideBar)
  const isOpen = useAppSelector(selectPsbIsOpen)

  const selected = primarySideBar === title && isOpen
  const onClick = () => {
    dispatch(setPrimarySideBar(title))
  }

  return (
    <S.Container $selected={selected} onClick={onClick}>
      <Icon viewBox="0 0 24 24" />
    </S.Container>
  )
}
