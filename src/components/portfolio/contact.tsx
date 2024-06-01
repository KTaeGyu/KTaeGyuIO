import React, { useContext } from "react"
import styled from "styled-components"
import { PortfolioContext } from "../../contexts/PortfolioContext"

const Section = styled.section`
  width: 100%;
  height: 100vh;
  background-color: turquoise;
`

const Contact = () => {
  const { contactRef } = useContext(PortfolioContext) || {}

  return (
    <Section ref={contactRef}>
      <></>
    </Section>
  )
}

export default Contact
