import { useEffect, useState } from "react"

interface useActiveHeaderReturn {
  isTop: boolean
}

const useActiveHeader = (): useActiveHeaderReturn => {
  const [isTop, setIsTop] = useState(false)
  if (typeof window === "undefined") {
    return { isTop }
  }

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      setIsTop(position > 0)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return { isTop }
}

export type { useActiveHeaderReturn }
export default useActiveHeader
