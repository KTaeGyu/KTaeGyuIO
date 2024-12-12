import React from "react"
import RefreshButton from "../../../common/buttons/RefreshButton"
import CommonS from "../PrimarySideBar.styles"
import Menus from "./menus/Menus"

export default function Search() {
  return (
    <CommonS.Container>
      <CommonS.TitleBox>
        <CommonS.Title>SEARCH</CommonS.Title>
        <CommonS.TitleButtonBox>
          <RefreshButton />
          <Menus />
        </CommonS.TitleButtonBox>
      </CommonS.TitleBox>
    </CommonS.Container>
  )
}
