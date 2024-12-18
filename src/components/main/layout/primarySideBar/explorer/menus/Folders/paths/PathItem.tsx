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
    <S.Container $isroot={isRoot}>
      <S.TitleBox
        $subsets={!!subsets}
        $islocation={isLocation}
        onClick={clickHandler}
      >
        {subsets && <S.ChevronIcon $isopen={isOpen} />}
        <S.Icon src={`/images/path/${src}.png`} />
        <S.Title>{title}</S.Title>
      </S.TitleBox>
      {subsets && isOpen && <Folders items={subsets} route={newRoute} />}
    </S.Container>
  )
}
