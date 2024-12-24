import { useLocation } from "@reach/router"

export default function useIsLocation(value: string) {
  const location = useLocation()
  const isLocation = location.pathname.replace(/\/$/, "") === value

  return isLocation
}
