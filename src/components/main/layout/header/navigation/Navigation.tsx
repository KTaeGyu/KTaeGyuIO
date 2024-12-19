import { navigate } from "gatsby"
import React, { useEffect, useState } from "react"
import S from "./Navigation.styles"

export default function Navigation() {
  const [canBack, setCanBack] = useState(false)
  const [canForward, setCanForward] = useState(false)

  useEffect(() => {
    const onPopState = () => {
      setCanBack(window.history.state !== null)
      setCanForward(window.history.length > 2)
    }
    // 초기 실행
    onPopState()
    // 등록
    window.addEventListener("popstate", onPopState)
    // 제거
    return () => window.removeEventListener("popstate", onPopState)
  }, [])

  return (
    <S.Container>
      <S.Button onClick={() => navigate(-1)} disabled={!canBack}>
        <S.BackIcon />
      </S.Button>
      <S.Button onClick={() => history.forward()} disabled={!canForward}>
        <S.ForwardIcon />
      </S.Button>
    </S.Container>
  )
}
