import { useEffect, useRef, useState } from "react"

const useCarousel = (list: any[]) => {
  const len = list.length

  const carouselRef = useRef<HTMLUListElement>(null)
  const [index, setIndex] = useState(1)

  const handleSwipe = (direction: number) => {
    const nextIndex = index + direction

    if (nextIndex > len || nextIndex < 1) return

    setIndex((prev) => prev + direction)
  }

  useEffect(() => {
    if (carouselRef.current === null) return
    carouselRef.current.style.transform = `translateX(-${
      Math.floor(100 / len) * (index - 1)
    }%)`
  }, [index])

  return { carouselRef, handleSwipe, index }
}

export default useCarousel
