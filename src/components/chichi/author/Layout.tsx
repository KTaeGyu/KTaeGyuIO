import React, { PropsWithChildren } from "react"
import S from "../Layout.styles"

export default function Layout({ children }: PropsWithChildren) {
  return <S.Layout>{children}</S.Layout>
}
