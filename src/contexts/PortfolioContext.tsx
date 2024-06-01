import React, { MutableRefObject, createContext, useRef } from "react"

interface PortfolioContextValue {
  introRef: MutableRefObject<HTMLElement | null>
  aboutRef: MutableRefObject<HTMLElement | null>
  skillsRef: MutableRefObject<HTMLElement | null>
  projectsRef: MutableRefObject<HTMLElement | null>
  contactRef: MutableRefObject<HTMLElement | null>
}

interface PortfolioContainerProps {
  children?: React.ReactNode
}

const PortfolioContext = createContext<PortfolioContextValue>(null)

const PortfolioContainer = ({ children }: PortfolioContainerProps) => {
  const introRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  const value = {
    introRef,
    aboutRef,
    skillsRef,
    projectsRef,
    contactRef,
  }

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  )
}

export { PortfolioContext }
export default PortfolioContainer
