import { useLocation } from "@reach/router"

export default function useIsUseRoute() {
  const routes = useLocation().pathname.split("/").filter(Boolean)
  const nowLocation = routes[routes.length - 1]
  const isUseRoute = nowLocation?.match(/\.ts(x)?$/g)

  return isUseRoute
}
