import { navigate } from "gatsby"
import React, { useEffect } from "react"
import Layout from "../components/main/layout/Layout"
import { useAppSelector } from "../state/hooks"
import { selectOpenEditors } from "../state/slices/folderSlice"

export default function Homepage() {
  const openEditors = useAppSelector(selectOpenEditors)

  useEffect(() => {
    if (openEditors.length > 0) {
      navigate(openEditors[0].route)
    }
  }, [])

  return <Layout></Layout>
}
