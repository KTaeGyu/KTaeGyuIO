import React, { ReactNode } from "react"
import S from "./ShortcutButton.styles"

interface Props {
  shortcut: string[]
}

export default function ShortcutButton({ shortcut }: Props) {
  return (
    <S.Container>
      {shortcut.reduce<ReactNode[]>((acc, part, i) => {
        acc.push(<S.Key>{part}</S.Key>)

        if (i < shortcut.length - 1) {
          acc.push(<S.Join>+</S.Join>)
        }

        return acc
      }, [])}
    </S.Container>
  )
}
