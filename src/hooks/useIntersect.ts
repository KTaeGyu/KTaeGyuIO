import { useCallback, useEffect, useRef } from "react"
import { IntersectHandler, Options } from "./useIntersects"

export default function useIntersect<T extends HTMLElement = HTMLDivElement>(
  onIntersect: IntersectHandler,
  options?: Options
) {
  // Target References
  const root = useRef(null)
  const target = useRef<T>(null)
  // Handler
  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        onIntersect(entry, observer)
      })
    },
    [onIntersect]
  )
  // Connect and Disconnect
  useEffect(() => {
    if (!root.current && options?.root) return
    if (!target.current) return

    const observer = new IntersectionObserver(handleIntersect, {
      ...options,
      root: root.current,
    })
    // Connect
    observer.observe(target.current)
    // Disconnect
    return () => observer.disconnect()
  }, [target, options, handleIntersect, root.current])

  return { root, target }
}
