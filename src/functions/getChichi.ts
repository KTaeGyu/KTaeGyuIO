import { Chichi } from "../pages/chichi/login"

export default function getChichi() {
  try {
    const chichi = localStorage.getItem("chichi")
    if (!chichi) throw new Error("Get chichi: no chichi")
    const result: Chichi = JSON.parse(chichi)
    return result
  } catch (err) {
    console.log(err)
    return undefined
  }
}
