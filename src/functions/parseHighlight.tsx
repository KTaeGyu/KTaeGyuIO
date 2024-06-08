import React from "react"
import styled from "styled-components"

interface StyleProps {
  $color: string
  $bgc: string
}

const Line = styled.p`
  line-height: 20px;
  font-size: 14px;
`

const Highlight = styled.span<StyleProps>`
  font-size: 12px;
  font-weight: 600;
  color: ${({ $color }) => $color};
  background: ${({ $bgc }) => $bgc};
  border-radius: 6px;
  padding: 1px 4px;
`

const parseHighlight = (input: string, color = "black", bgc?: string) => {
  const regex = /'([^']+)'/g
  let match: RegExpExecArray
  let parsedElements: JSX.Element[] = []
  let lastIndex = 0

  while ((match = regex.exec(input)) !== null) {
    parsedElements.push(<span>{input.slice(lastIndex, match.index)}</span>)
    parsedElements.push(
      <Highlight $color={color} $bgc={bgc}>
        {match[1]}
      </Highlight>
    )
    lastIndex = match.index + match[0].length
  }

  parsedElements.push(<span>{input.slice(lastIndex)}</span>)

  return <Line>{parsedElements}</Line>
}

export default parseHighlight
