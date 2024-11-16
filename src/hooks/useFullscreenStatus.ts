import { useEffect, useState } from "react"

export default function useFullscreenStatus() {
  const [isFull, setIsFull] = useState(false)

  useEffect(() => {
    if (typeof document !== "undefined") {
      setIsFull(Boolean(document.fullscreenElement))
    }
  }, [])

  const requestFull = () => {
    if (typeof document !== "undefined" && document.body) {
      if (document.body.requestFullscreen) {
        document.body.requestFullscreen()
        setIsFull(true)
      }
    }
  }

  const exitFull = () => {
    if (typeof document !== "undefined" && document.exitFullscreen) {
      document.exitFullscreen()
      setIsFull(false)
    }
  }

  return { isFull, requestFull, exitFull }
}
