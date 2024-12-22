import React from "react"
import RefreshButton from "../../../common/buttons/RefreshButton"
import More from "../../../common/more/More"
import CommonS from "../PrimarySideBar.styles"

export default function Extensions() {
  return (
    <CommonS.Container>
      <CommonS.TitleBox>
        <CommonS.Title>EXTENSIONS</CommonS.Title>
        <CommonS.TitleButtonBox>
          <RefreshButton />
          <More items={[]} />
        </CommonS.TitleButtonBox>
      </CommonS.TitleBox>
    </CommonS.Container>
  )
}
