import { useState } from "react"

export default function useFullscreenStatus() {
  const [isFull, setIsFull] = useState(Boolean(document.fullscreenElement))

  const requestFull = () => {
    if (document.body) {
      if (document.body.requestFullscreen) {
        document.body.requestFullscreen()
      }
      setIsFull(true)
    }
  }

  const exitFull = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
    setIsFull(false)
  }

  return { isFull, requestFull, exitFull }
}
