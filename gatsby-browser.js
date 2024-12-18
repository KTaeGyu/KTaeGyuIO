import "@fontsource/dm-mono"
import "@fontsource/dm-mono/500.css"
import "@fontsource/dm-sans"
import "@fontsource/dm-sans/500.css"
import "@fontsource/dm-sans/700.css"
import React from "react"
import FoldersProvider from "./src/contexts/FoldersContext"
import PannelProvider from "./src/contexts/PannelContext"
import PrimarySideBarProvider from "./src/contexts/PrimarySideBarCotext"

export const wrapRootElement = ({ element }) => (
  <FoldersProvider>
    <PannelProvider>
      <PrimarySideBarProvider>{element}</PrimarySideBarProvider>
    </PannelProvider>
  </FoldersProvider>
)
