import FOLDERS from "./src/constants/folder"
import { addEditor } from "./src/state/slices/folderSlice"
import store from "./src/state/store"

const onInitialClientRender = () => {
  const pathname = window.location.pathname
  const route = pathname.replace(/\/$/, "")

  const handleRefresh = (path: string) => {
    const routes = path.split("/").filter(Boolean)

    let currPath = FOLDERS
    let title = ""

    for (const route of routes) {
      const nextPath = currPath.find((p) => p.title === route)
      if (nextPath && nextPath.subsets) {
        currPath = nextPath.subsets
      } else {
        title = currPath.find((p) => p.title.startsWith(route))?.title || ""
        break
      }
    }

    store.dispatch(addEditor({ title, route }))
  }

  handleRefresh(pathname)
}

export default onInitialClientRender
