import { useEffect, useRef, useState } from "react"

export default function useDropdown() {
  const ref = useRef<HTMLDivElement & HTMLLIElement>()
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const [timeOutId, setTimeOutId] = useState<NodeJS.Timeout>()
  const onMouseEnter = () => {
    const id = setTimeout(() => setIsOpen(true), 500)
    setTimeOutId(id)
  }
  const onMouseLeave = () => {
    if (timeOutId) {
      clearTimeout(timeOutId)
      setTimeOutId(null)
      setIsOpen(false)
    }
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("click", handleClickOutside)
    } else {
      document.removeEventListener("click", handleClickOutside)
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isOpen])

  return { ref, isOpen, toggleOpen, onMouseEnter, onMouseLeave }
}
