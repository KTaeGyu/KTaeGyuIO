import { navigate } from "gatsby"
import React from "react"
import { useFoldersContext } from "../../../../../../../../contexts/FoldersContext"
import selectPathIcon from "../../../../../../../../functions/selectPathIcon"
import useIsLocation from "../../../../../../../../hooks/useIsLocation"
import { ComponentProps } from "./PathItem.interface"
import S from "./PathItem.styles"
import Folders from "./Paths"

export default function PathItem({
  title,
  subsets,
  isOpen,
  href,
  route,
}: ComponentProps) {
  const { setIsOpen, setEditors } = useFoldersContext()
  // route
  const newRoute = `${route ? route : ""}/${title}`
  const filteredRoute = newRoute.replace(/\.ts(x)?/g, "")
  // onClickTitleBox
  const clickHandler = () => {
    if (subsets) {
      setIsOpen(newRoute)
    } else if (href) {
      window.open(href, "_blank")
    } else {
      navigate(filteredRoute)
      setEditors.addEditor({ title, route: filteredRoute })
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
        <S.Title>{title}</S.Title>
      </S.TitleBox>
      {subsets && isOpen && <Folders items={subsets} route={newRoute} />}
    </S.Container>
  )
}
