import { navigate } from "gatsby"
import React from "react"
import S from "./Navigation.styles"

export default function Navigation() {
  const canGoForward = () => {
    // Firefox, Safari iOS, WebView iOS 는 window.navigation 지원 안함
    const userAgent = navigator.userAgent
    const isUnsupportedBrowser =
      /Firefox/i.test(userAgent) ||
      (/iPhone|iPad|iPod/i.test(userAgent) &&
        /Safari/i.test(userAgent) &&
        !/Chrome/i.test(userAgent)) ||
      /webview/i.test(userAgent)
    return isUnsupportedBrowser ? false : window.navigation.canGoForward
  }

  return (
    <S.Container>
      <S.Button
        onClick={() => navigate(-1)}
        // disabled={!window.navigation.canGoBack}
      >
        <S.BackIcon viewBox="0 0 24 24" />
      </S.Button>
      <S.Button
        onClick={() => history.forward()}
        // disabled={!canGoForward()}
      >
        <S.ForwardIcon viewBox="0 0 24 24" />
      </S.Button>
    </S.Container>
  )
}
