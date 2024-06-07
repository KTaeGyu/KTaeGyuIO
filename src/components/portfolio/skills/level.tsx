import React from "react"
import styled from "styled-components"
import createBoolArray from "../../../functions/createBoolArray"

interface LevelProps {
  level: number
}

const Wrapper = styled.div`
  display: flex;
  gap: 0.2rem;
`

const Block = styled.div<{ $block: boolean }>`
  width: 1rem;
  height: 1rem;
  border-radius: 0.2rem;
  background: ${({ $block }) => ($block ? "aqua" : "#f0f0f0")};
`

const Level = ({ level }: LevelProps) => {
  const blocks = createBoolArray(5, level)

  return (
    <Wrapper>
      {blocks.map((block, idx) => (
        <Block key={idx} $block={block} />
      ))}
    </Wrapper>
  )
}

export default Level
