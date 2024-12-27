import React from "react"
import PathItem from "./PathItem"
import { ComponentProps } from "./Paths.interface"
import S from "./Paths.styles"

export default function Paths({ items, isRoot, route }: ComponentProps) {
  return (
    <S.Container $isRoot={isRoot}>
      {items.map((path) => (
        <PathItem key={path.title} {...path} route={route} />
      ))}
    </S.Container>
  )
}
