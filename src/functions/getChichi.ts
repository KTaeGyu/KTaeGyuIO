import { Chichi } from "../pages/chichi/login"

export default function getChichi() {
  const result: Chichi = JSON.parse(localStorage.getItem("chichi"))
  return result
}
