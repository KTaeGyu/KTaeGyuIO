import { useEffect, useRef, useState } from "react"

interface Props {
  maxWidth?: number
}

export default function useLocalMediaQuery(props?: Props) {
  const maxWidth = props?.maxWidth || 470

  const ref = useRef<HTMLDivElement | null>(null)
  const [isWide, setIsWide] = useState(false)

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      if (entry.contentRect.width > maxWidth) {
        setIsWide(true)
      } else {
        setIsWide(false)
      }
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return { ref, isWide }
}
