import React from "react"
import More from "../../../common/more/More"
import CommonS from "../PrimarySideBar.styles"

export default function Run() {
  return (
    <CommonS.Container>
      <CommonS.TitleBox>
        <CommonS.Title>RUN AND DEBUG</CommonS.Title>
        <CommonS.TitleButtonBox>
          <More items={[]} />
        </CommonS.TitleButtonBox>
      </CommonS.TitleBox>
    </CommonS.Container>
  )
}
