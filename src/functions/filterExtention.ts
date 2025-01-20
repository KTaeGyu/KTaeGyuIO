export default function filterExtention(route: string, ioOnly?: boolean) {
  if (ioOnly) return route.replace(/\.io$/g, "")

  return route.replace(/(\.ts(x)?|\.io)$/g, "")
}
