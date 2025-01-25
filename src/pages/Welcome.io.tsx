import React from "react"
import Layout from "../components/main/layout/Layout"
import Guides from "../components/main/welcome/guides/Guides"
import Navigation from "../components/main/welcome/navigation/Navigation"
import S from "../components/main/welcome/Welcome.io.styles"
import useLocalMediaQuery from "../hooks/useLocalMediaQuery"

export default function Page() {
  const { ref, isWide } = useLocalMediaQuery()

  return (
    <Layout>
      <S.Wrapper ref={ref} $isWide={isWide}>
        <S.Container $isWide={isWide}>
          <S.TitleBox $isWide={isWide}>
            <S.Heading>Developer. Kim Taegyu</S.Heading>
            <S.Slogan>Challenge every moment, improve everyday.</S.Slogan>
          </S.TitleBox>
          <S.ContentBox $isWide={isWide}>
            <Navigation />
            <Guides />
          </S.ContentBox>
        </S.Container>
        <div>Sample</div>
      </S.Wrapper>
    </Layout>
  )
}
