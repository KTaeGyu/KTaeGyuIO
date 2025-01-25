const SingleContent = ["H1", "H2", "H3", "P", "Li"] as const
const MultiContent = ["Blockquote", "Ol"] as const

type SingleContentTypes = typeof SingleContent[number]
type MultiContentTypes = typeof MultiContent[number]

type MarkdownDataType = SingleContentTypes | MultiContentTypes

type SingleData = {
  type: SingleContentTypes
  content: {
    ko: string
    en: string
  }
}
type MultiData = {
  type: MultiContentTypes
  contents: MarkdownData[]
}

type MarkdownData = SingleData | MultiData

export { MultiContent, SingleContent }
export type {
  MarkdownData,
  MarkdownDataType,
  MultiContentTypes,
  MultiData,
  SingleContentTypes,
  SingleData,
}
