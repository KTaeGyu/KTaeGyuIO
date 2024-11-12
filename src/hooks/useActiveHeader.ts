import { useEffect, useRef, useState } from "react"

const useActiveHeader = () => {
  const [isTop, setIsTop] = useState(false)
  const target = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!target.current) return
    const observeCallback: IntersectionObserverCallback = (entries) => {
      const [entry] = entries
      setIsTop(entry.isIntersecting)
    }
    const observeOptions: IntersectionObserverInit = {
      rootMargin: "0px 0px 0px 0px",
      threshold: 1.0,
    }
    const observer = new IntersectionObserver(observeCallback, observeOptions)

    observer.observe(target.current)
    return () => observer.disconnect()
  }, [target])

  return { isTop, target }
}

export default useActiveHeader
