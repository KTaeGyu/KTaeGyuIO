import { Dispatch, SetStateAction } from "react"

interface Options {
  value: string
  select: string
  setSelect: Dispatch<SetStateAction<string>>
}

export type { Options }
