import { useLocation } from "@reach/router"
import { navigate } from "gatsby"
import React from "react"
import { useFoldersContext } from "../../../../../../../../contexts/FoldersContext"
import { ComponentProps } from "./PathItem.interface"
import S from "./PathItem.styles"
import Folders from "./Paths"

export default function PathItem({
  title,
  subsets,
  isRoot,
  isOpen,
  href,
  route,
}: ComponentProps) {
  const { setIsOpen } = useFoldersContext()
  // route
  const newRoute = `${route ? route : ""}/${title}`
  const filteredRoute = newRoute.replace(/\.ts(x)?/g, "")
  // onClickTitleBox
  const clickHandler = () => {
    return subsets
      ? setIsOpen(newRoute)
      : href
      ? window.open(href, "_blank")
      : navigate(filteredRoute)
  }
  // Icon
  const extension = title.split(".")[1]
  const src = extension ? extension : isOpen ? "open-folder" : "folder"
  // highlight
  const location = useLocation()
  const isLocation = location.pathname === filteredRoute + "/"

  return (
    <S.Container $isRoot={isRoot}>
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
