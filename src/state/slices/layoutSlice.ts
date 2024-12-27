import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import LAYOUT_ITEMS from "../../constants/layoutValue"

interface InitialState {
  menus: LayoutItem[]
  primarySideBar: ActivityTitle | ""
  pannel: PannelTabTitle
}

const initialState: InitialState = {
  menus: LAYOUT_ITEMS,
  primarySideBar: "Explorer",
  pannel: "Terminal",
}

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setLayoutsChecked: (
      state,
      action: PayloadAction<{ idx: number; checked: boolean }>
    ) => {
      const { idx, checked } = action.payload
      const prev = state.menus[3].subsets[1][0].subsets[1]
      const newState = prev.map((subset, i) =>
        i === idx ? { ...subset, checked } : subset
      )

      state.menus[3].subsets[1][0].subsets[1] = newState
    },
    setPrimarySideBar: (state, action: PayloadAction<ActivityTitle>) => {
      const title = action.payload
      if (state.primarySideBar === title) {
        state.primarySideBar = ""
        state.menus[3].subsets[1][0].subsets[1][1].checked = false
      } else {
        state.primarySideBar = action.payload
        state.menus[3].subsets[1][0].subsets[1][1].checked = true
      }
    },
    setPannel: (state, action: PayloadAction<PannelTabTitle>) => {
      state.pannel = action.payload
    },
  },
  selectors: {
    // layout selector
    selectMenus: (layout) => layout.menus,
    selectLayouts: (layout) => layout.menus[3].subsets[1][0].subsets[1],
    selectActivities: (layout) => layout.menus[3].subsets[2],
    selectPannelTabs: (layout) => layout.menus[3].subsets[3],
    selectPsbIsOpen: (layout) =>
      layout.menus[3].subsets[1][0].subsets[1][1].checked,
    selectPannelIsOpen: (layout) =>
      layout.menus[3].subsets[1][0].subsets[1][3].checked,
    // others
    selectPrimarySideBar: (layout) => layout.primarySideBar,
    selectPannel: (layout) => layout.pannel,
  },
})

export const { setLayoutsChecked, setPrimarySideBar, setPannel } =
  layoutSlice.actions
export const {
  selectMenus,
  selectLayouts,
  selectActivities,
  selectPannelTabs,
  selectPrimarySideBar,
  selectPannel,
  selectPsbIsOpen,
  selectPannelIsOpen,
} = layoutSlice.selectors

export default layoutSlice.reducer
