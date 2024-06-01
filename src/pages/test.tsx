import React from "react"
import styled from "styled-components"

interface BoxProps {
  $backgroundColor?: string
  $slider?: boolean
}

const Box = styled.div<BoxProps>`
  width: 100%;
  height: 100vh;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
`

export default function Test() {
  // const colors = ["#000", "#f00", "#0f0", "#00f", "#ff0", "#f0f", "#0ff"]
  // const outerRef = useRef<HTMLDivElement>(null)
  // const totalPageNumber = colors.length

  // const [currentInputs, setCurrentInputs] = useState({
  //   currentWindowHeight: window.innerHeight,
  //   currentPage: 0,
  // })
  // const setPageSize = () => {
  //   setCurrentInputs((prev) => ({
  //     ...prev,
  //     currentWindowHeight: window.innerHeight,
  //   }))
  // }
  // const setPage = () => {
  //   for (var i = 1; i < totalPageNumber; i++) {
  //     if (window.scrollY < currentInputs.currentWindowHeight * i) {
  //       setCurrentInputs({ ...currentInputs, currentPage: i })
  //       return
  //     }
  //   }
  // }
  // useEffect(() => {
  //   window.addEventListener("scroll", setPage)
  //   window.addEventListener("resize", setPageSize)
  //   return () => {
  //     window.removeEventListener("scroll", setPage)
  //     window.removeEventListener("resize", setPageSize)
  //   }
  // }, [])

  // window.addEventListener("wheel", (e) => {
  //   // 마우스 휠을 내릴때
  //   if (e.deltaY > 0) {
  //     let p = 1
  //     while (p < totalPageNumber) {
  //       if (currentInputs.currentPage === p) {
  //         window.scrollTo({
  //           top: currentInputs.currentWindowHeight * p,
  //           behavior: "smooth",
  //         })
  //       }
  //       p++
  //     }
  //   }
  //   // 마우스 휠을 올릴때
  //   if (e.deltaY < 0) {
  //     let p = 1
  //     while (p < totalPageNumber) {
  //       if (currentInputs.currentPage === p) {
  //         window.scrollTo({
  //           top: currentInputs.currentWindowHeight * (p - 1),
  //           behavior: "smooth",
  //         })
  //       }
  //       p++
  //     }
  //   }
  // })

  return (
    <></>
    // <Box ref={outerRef}>
    //   {colors.map((color) => (
    //     <Box $slider>
    //       <Box $backgroundColor={color} />
    //     </Box>
    //   ))}
    // </Box>
  )
}
