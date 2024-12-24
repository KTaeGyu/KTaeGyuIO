export default function selectPathIcon(title: string, isOpen?: boolean) {
  const extension = title.split(".")[1]
  const src = extension ? extension : isOpen ? "open-folder" : "folder"
  return src
}
