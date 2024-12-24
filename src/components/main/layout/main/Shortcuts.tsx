import React, { Fragment } from "react"
import { MAIN_SHORTCUT } from "../../../../constants/shortcuts"
import ShortcutButton from "../../common/buttons/ShortcutButton"
import S from "./Shortcuts.styles"

export default function Shortcuts() {
  return (
    <S.Container>
      {Object.entries(MAIN_SHORTCUT).map(([title, shortcut]) => (
        <Fragment key={title}>
          <S.Title>{title}</S.Title>
          <ShortcutButton shortcut={shortcut} />
        </Fragment>
      ))}
    </S.Container>
  )
}
