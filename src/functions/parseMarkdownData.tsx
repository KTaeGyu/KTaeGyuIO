import React from "react"
import {
  MarkdownData,
  MultiContent,
  MultiContentTypes,
  MultiData,
  SingleContent,
  SingleContentTypes,
  SingleData,
} from "../@types/markdown/dataTypes"
import MdS from "../components/main/common/md.styles"

export default function parseMarkdownData(
  data: MarkdownData[],
  lang: LanguageTypes,
  key: string
) {
  return data.map((datum, i) => {
    const datumType = datum.type
    const Box = MdS[datumType]

    if (MultiContent.includes(datumType as MultiContentTypes)) {
      const multiDatum = datum as MultiData
      return (
        <Box key={`${key}-${i}`}>
          {parseMarkdownData(multiDatum.contents, lang, key + "-sub")}
        </Box>
      )
    }

    if (SingleContent.includes(datumType as SingleContentTypes)) {
      const singleDatum = datum as SingleData

      return <Box key={`${key}-${i}`}>{singleDatum.content[lang]}</Box>
    }

    return null
  })
}
