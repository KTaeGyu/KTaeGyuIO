import { navigate } from "gatsby"
import React from "react"
import filterExtention from "../../../../../../../functions/filterExtention"
import selectPathIcon from "../../../../../../../functions/selectPathIcon"
import useIsLocation from "../../../../../../../hooks/useIsLocation"
import { useAppDispatch } from "../../../../../../../state/hooks"
import {
  addEditor,
  setIsOpen,
} from "../../../../../../../state/slices/folderSlice"
import { ComponentProps } from "./PathItem.interface"
import S from "./PathItem.styles"
import Paths from "./Paths"

export default function PathItem({
  title,
  subsets,
  isOpen,
  href,
  route,
}: ComponentProps) {
  const dispatch = useAppDispatch()
  // route
  const newRoute = `${route ? route : ""}/${title}`
  const filteredRoute = filterExtention(newRoute)
  // onClickTitleBox
  const clickHandler = () => {
    if (subsets) {
      dispatch(setIsOpen({ newRoute }))
    } else if (href) {
      window.open(href, "_blank")
    } else {
      navigate(filteredRoute)
      dispatch(addEditor({ title, route: filteredRoute }))
    }
  }
  // Icon
  const src = selectPathIcon(title, isOpen)
  // highlight
  const isLocation = useIsLocation(filteredRoute)

  return (
    <S.Container>
      <S.TitleBox
        $subsets={!!subsets}
        $isLocation={isLocation}
        onClick={clickHandler}
      >
        {subsets && <S.ChevronIcon $isOpen={isOpen} viewBox="0 0 24 24" />}
        <S.Icon src={`/images/path/${src}.png`} />
        <S.Title>{filterExtention(title, true)}</S.Title>
      </S.TitleBox>
      {subsets && isOpen && <Paths items={subsets} route={newRoute} />}
    </S.Container>
  )
}
