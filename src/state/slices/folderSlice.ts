import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import { navigate } from "gatsby"
import { Tab } from "../../components/main/layout/main/tabs/Tab.interface"
import { Path } from "../../components/main/layout/primarySideBar/explorer/menus/folders/Paths.interface"
import FOLDERS from "../../constants/folder"

interface FoldersInitialState {
  folders: Path[]
  openEditors: Tab[]
}

const initialState: FoldersInitialState = {
  folders: FOLDERS,
  openEditors: [{ title: "Welcome.io", route: "/Welcome.io" }],
}

export const folderSlice = createSlice({
  name: "folder",
  initialState,
  reducers: {
    toggleIsOpen: (state, action: PayloadAction<string>) => {
      const titles = action.payload.split("/").filter(Boolean)

      const togglePath = (paths: Path[], titles: string[]): Path[] => {
        return paths.map((path) => {
          if (path.title === titles[0]) {
            if (titles.length === 1) {
              return { ...path, isOpen: !path.isOpen }
            }
            if (path.subsets) {
              return {
                ...path,
                subsets: togglePath(path.subsets, titles.slice(1)),
              }
            }
          }
          return path
        })
      }

      state.folders = togglePath(state.folders, titles)
    },
    initiateIsOpen: (state, action: PayloadAction<string>) => {
      const titles = action.payload.split("/").filter(Boolean)

      const togglePath = (paths: Path[], titles: string[]): Path[] => {
        return paths.map((path) => {
          if (path.title === titles[0]) {
            if (titles.length === 1) {
              return { ...path, isOpen: true }
            }
            if (path.subsets) {
              return {
                ...path,
                subsets: togglePath(path.subsets, titles.slice(1)),
              }
            }
          }
          return path
        })
      }

      state.folders = togglePath(state.folders, titles)
    },
    addEditor: (state, action: PayloadAction<Tab>) => {
      if (!state.openEditors.find((e) => e.route === action.payload.route)) {
        state.openEditors = [...state.openEditors, action.payload]
      }
    },
    removeEditor: (
      state,
      action: PayloadAction<{ idx: number; isLocation: boolean }>
    ) => {
      const { idx, isLocation } = action.payload
      const prev = state.openEditors
      const prevLength = prev.length

      if (idx < 0 || idx >= prevLength) {
        console.log("Remove editor: invalid index")
        return
      }

      if (isLocation && prevLength >= 2) {
        if (idx > 0) {
          navigate(prev[idx - 1].route)
        } else {
          navigate(prev[prevLength - 1].route)
        }
      } else if (isLocation) {
        navigate("/")
      }

      state.openEditors = [
        ...state.openEditors.slice(0, idx),
        ...state.openEditors.slice(idx + 1),
      ]
    },
  },
  selectors: {
    selectFolders: (folder) => folder.folders,
    selectOpenEditors: (folder) => folder.openEditors,
  },
})

export const { toggleIsOpen, initiateIsOpen, addEditor, removeEditor } =
  folderSlice.actions
export const { selectFolders, selectOpenEditors } = folderSlice.selectors

export default folderSlice.reducer
