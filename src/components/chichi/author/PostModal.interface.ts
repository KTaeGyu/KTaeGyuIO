import { MouseEventHandler } from "react"

interface ComponentProps {
  readerId: string
  onClickClose: MouseEventHandler
  onClickSend: () => void
}

export type { ComponentProps }
