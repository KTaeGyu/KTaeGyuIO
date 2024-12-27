import { configureStore } from "@reduxjs/toolkit"
import folderReducer from "./slices/folderSlice"
import layoutReducer from "./slices/layoutSlice"

const store = configureStore({
  reducer: {
    layout: layoutReducer,
    folder: folderReducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
