interface Media {
  id: string
  title: string
  description: string
  file: {
    url: string
    fileName: string
    contentType: string
  }
}
