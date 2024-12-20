import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"

interface Options {
  value: string
  select: string
  setSelect: Dispatch<SetStateAction<string>>
}

export default function useDropdown(options?: Options) {
  const ref = useRef<HTMLDivElement & HTMLLIElement>()
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => {
    setIsOpen(!isOpen)
    if (options) {
      const { setSelect, value, select } = options
      setSelect(value === select ? "" : value)
    }
  }

  const [timeOutId, setTimeOutId] = useState<NodeJS.Timeout>()
  const onMouseEnter = () => {
    const id = setTimeout(() => {
      setIsOpen(true)
      if (options) {
        const { setSelect, value } = options
        setSelect(value)
      }
    }, 300)
    setTimeOutId(id)
  }
  const onMouseLeave = () => {
    if (timeOutId) {
      clearTimeout(timeOutId)
      setTimeOutId(null)
    }
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false)
        if (options) {
          options.setSelect("")
        }
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
