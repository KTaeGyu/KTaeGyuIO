import { useLocation } from "@reach/router"
import React from "react"
import S from "./Route.styles"

export default function Route() {
  const pathname = useLocation().pathname
  const routes = pathname.split("/").filter(Boolean)

  return (
    <S.Container>
      {routes.map((route, i) => (
        <S.TitleBox key={i}>
          {route.match(/\.ts(x)?$/g) && (
            <S.Icon src="/images/path/tsx.png" alt="icon" />
          )}
          <S.Title>{route}</S.Title>
          {i !== routes.length - 1 && <S.Chevron viewBox="0 0 24 24" />}
        </S.TitleBox>
      ))}
    </S.Container>
  )
}
