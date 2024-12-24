import React, { useEffect, useState } from "react"
import { useLayoutContext } from "../../../../../../contexts/LayoutContext"
import useDropdown from "../../../../../../hooks/useDropdown"
import Dropdown from "../../../../common/dropdown/Dropdown"
import ItemS from "../MenuItem.styles"
import { BREAKPOINTS, MEDIA } from "../Menus.constant"
import S from "./HamburgerMenu.styles"

export default function HamburgerMenu() {
  const { state } = useLayoutContext()
  const { ref, isOpen, open } = useDropdown()
  const [breakpoint, setBreakpoint] = useState(3)
  const breakpointHandler = () => {
    const width = window.innerWidth
    // 중복 미디어 제거
    const uniqueMedia = [...new Set(MEDIA)]
    const index = uniqueMedia.findIndex((media) => width <= media)
    // 인덱스를 찾지 못하면 마지막 값 반환
    if (index !== -1) {
      setBreakpoint(BREAKPOINTS[index])
    } else {
      setBreakpoint(BREAKPOINTS[BREAKPOINTS.length - 1])
    }
  }

  useEffect(() => {
    // 디바운싱
    let breakpointTimer: ReturnType<typeof setTimeout>
    const onResize = () => {
      if (breakpointTimer) clearTimeout(breakpointTimer)
      breakpointTimer = setTimeout(breakpointHandler, 20)
    }
    // 등록
    window.addEventListener("resize", onResize)
    // 초기 실행
    breakpointHandler()
    // 제거
    return () => {
      window.removeEventListener("resize", onResize)
      if (breakpointTimer) clearTimeout(breakpointTimer)
    }
  }, [breakpointHandler])

  return (
    <S.Container ref={ref}>
      <ItemS.Container className={isOpen && "active"} onClick={open}>
        <S.HamburgerIcon />
        <S.MoreIcon />
      </ItemS.Container>
      {isOpen && (
        <Dropdown
          subsets={[state.menus.slice(breakpoint)]}
          position="just-down"
        />
      )}
    </S.Container>
  )
}
