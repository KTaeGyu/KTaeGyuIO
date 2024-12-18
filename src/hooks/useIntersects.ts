import { useCallback, useEffect, useRef } from "react"

export type IntersectHandler = (
  entry: IntersectionObserverEntry,
  observer: IntersectionObserver,
  index?: number
) => void

export interface Options extends Omit<IntersectionObserverInit, "root"> {
  root?: boolean
}

export default function useIntersects<
  E extends HTMLElement = HTMLLIElement,
  R extends HTMLElement = HTMLDivElement
>(onIntersect: IntersectHandler, options?: Options) {
  // Target References
  const root = useRef<R | null>(null)
  const targets = useRef<(Element | null)[]>([])
  // Handler
  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        const index = targets.current.indexOf(entry.target)
        if (index !== -1) {
          onIntersect(entry, observer, index)
        }
      })
    },
    [onIntersect]
  )
  const handleAssign = (idx: number) => (el: E) => {
    return (targets.current[idx] = el)
  }
  // Connect and Disconnect
  useEffect(() => {
    if (!root.current && options.root) return
    if (!targets.current.length) return

    const observer = new IntersectionObserver(handleIntersect, {
      ...options,
      root: root.current,
    })
    // Connect
    targets.current.forEach((target) => {
      if (target) observer.observe(target)
    })
    // Disconnect
    return () => observer.disconnect()
  }, [targets, options, handleIntersect, root.current])

  return { root, targets, handleAssign }
}
