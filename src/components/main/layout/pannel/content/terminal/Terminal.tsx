import React, {
  ChangeEventHandler,
  KeyboardEventHandler,
  useEffect,
  useRef,
  useState,
} from "react"
import Directory from "./Directory"
import History from "./History"
import S from "./Terminal.styles"

export default function Terminal() {
  // History
  const [histories, setHistories] = useState<string[]>([
    "터미널 기능은 준비중 입니다...",
  ])
  // Input
  const [value, setValue] = useState("")
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }
  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      setHistories((prev) => [...prev, value])
      setValue("")
    }
  }
  // Cursor
  const [textWidth, setTextWidth] = useState(0)
  const inputRef = useRef(null)
  const getTextWidth = (text: string, font: string) => {
    const canvas = document.createElement("canvas")
    const context = canvas.getContext("2d")
    context.font = font
    return context.measureText(text).width
  }
  useEffect(() => {
    if (inputRef.current) {
      const font = getComputedStyle(inputRef.current).font
      const width = getTextWidth(value, font)
      setTextWidth(width)
    }
  }, [value])
  // 나중에 스크롤바 커스텀으로 구현

  return (
    <S.Container>
      <S.Label htmlFor="terminalInput">
        {histories.map((history, idx) => (
          <History key={idx} history={history} />
        ))}
        <Directory />
        <S.Line>
          ${" "}
          <S.Input
            id="terminalInput"
            ref={inputRef}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            maxLength={100}
          />
          <S.Cursor id="cursor" $textWidth={textWidth} />
        </S.Line>
      </S.Label>
    </S.Container>
  )
}
