import { navigate } from "gatsby"
import React, { useEffect } from "react"
import Layout from "../components/main/layout/Layout"
import { useFoldersContext } from "../contexts/FoldersContext"

export default function Homepage() {
  const { openEditors } = useFoldersContext()

  useEffect(() => {
    console.log(openEditors.length)

    if (openEditors.length >= 1) {
      navigate(openEditors[0].route)
    }
  }, [openEditors.length])

  return <Layout></Layout>
}
