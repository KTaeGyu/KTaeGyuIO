import { useEffect, useRef, useState } from "react"

const useInfiniteCarousel = (list: any[], len: number) => {
  const carouselRef = useRef<HTMLUListElement>(null)
  const [index, setIndex] = useState(2)

  const moveSlide = (index: number) => {
    setTimeout(() => {
      setIndex(index)
      if (carouselRef.current !== null) {
        carouselRef.current.style.transition = ""
      }
    }, 500)
  }

  const handleSwipe = (direction: number) => {
    const nextIndex = index + direction

    if (nextIndex === len + 2) {
      moveSlide(2)
    } else if (nextIndex === 1) {
      moveSlide(list.length - len - 1)
    }

    setIndex((prev) => prev + direction)

    if (carouselRef.current !== null) {
      carouselRef.current.style.transition = "all 0.5s ease-in-out"
    }
  }

  useEffect(() => {
    if (carouselRef.current === null) return
    carouselRef.current.style.transform = `translateX(-${index * 19}rem)`
  }, [index])

  return { carouselRef, handleSwipe }
}

export default useInfiniteCarousel
