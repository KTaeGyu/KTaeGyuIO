import "@fontsource/dm-mono"
import "@fontsource/dm-mono/500.css"
import "@fontsource/dm-sans"
import "@fontsource/dm-sans/500.css"
import "@fontsource/dm-sans/700.css"
import onInitialClientRender from "./onInitialClientRender"
import "./src/styles/styles.css"
import wrapWithProvider from "./wrapWithProvider"
export { onInitialClientRender }
export const wrapRootElement = wrapWithProvider
