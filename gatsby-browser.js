import "@fontsource/dm-mono"
import "@fontsource/dm-mono/500.css"
import "@fontsource/dm-sans"
import "@fontsource/dm-sans/500.css"
import "@fontsource/dm-sans/700.css"
import React from "react"
import FoldersProvider from "./src/contexts/FoldersContext"
import LayoutProvider from "./src/contexts/LayoutContext"

export const wrapRootElement = ({ element }) => (
  <LayoutProvider>
    <FoldersProvider>{element}</FoldersProvider>
  </LayoutProvider>
)
