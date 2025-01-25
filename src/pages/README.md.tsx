import React from "react"
import { MarkdownData } from "../@types/markdown/dataTypes"
import Markdown from "../assets/contents/GetStarted.json"
import MdS from "../components/main/common/md.styles"
import Layout from "../components/main/layout/Layout"
import parseMarkdownData from "../functions/parseMarkdownData"
import { useAppSelector } from "../state/hooks"
import { selectLanguage } from "../state/slices/layoutSlice"

export default function Page() {
  const language = useAppSelector(selectLanguage)
    .filter((lang) => lang.checked)[0]
    .title.slice(0, 2)
    .toLowerCase() as LanguageTypes

  return (
    <Layout>
      <MdS.Wrapper>
        <MdS.Container>
          {Object.keys(Markdown).map((key) =>
            parseMarkdownData(Markdown[key] as MarkdownData[], language, key)
          )}
        </MdS.Container>
      </MdS.Wrapper>
    </Layout>
  )
}
