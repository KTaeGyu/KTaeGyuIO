const createBoolArray = (length: number, trueCount: number) => {
  let arr = new Array(length).fill(false)

  for (let i = 0; i < trueCount && i < length; i++) {
    arr[i] = true
  }

  return arr
}

export default createBoolArray
