import React, { useRef, useState } from "react"
import teams from "../../assets/data/teams"
import Chevron from "../../assets/icons/Chevron.inline.svg"
import {
  Card,
  Cards,
  Carousel,
  Navigation,
  Next,
  Page,
  Pagenation,
  Prev,
  Title,
  Wrapper,
} from "../../styles/portfolio/teams"
import { theme } from "../../styles/theme.css"
import Team from "./team"

const Teams = () => {
  const cardLength = teams.length
  const cards = teams

  const carouselRef = useRef<HTMLUListElement>(null)
  const [index, setIndex] = useState(0)

  const handleSwipe = (page: number) => {
    if (page === -1) {
      setIndex(cardLength - 1)
    } else if (page === cardLength) {
      setIndex(0)
    } else {
      setIndex(page)
    }
  }

  return (
    <Wrapper>
      <Title>Team Projects</Title>
      <Carousel>
        <Cards ref={carouselRef}>
          {cards.map((team) => (
            <Card key={team.id} className={team.id === index ? "active" : ""}>
              <Team team={team} />
            </Card>
          ))}
        </Cards>
        <Navigation>
          <Prev onClick={() => handleSwipe(index - 1)}>
            <Chevron width={30} height={30} stroke={theme.colors.dark} /> Prev
          </Prev>
          <Next onClick={() => handleSwipe(index + 1)}>
            Next <Chevron width={30} height={30} stroke={theme.colors.dark} />
          </Next>
        </Navigation>
        <Pagenation>
          {cards.map((team) => (
            <Page
              key={team.id}
              onClick={() => handleSwipe(team.id)}
              className={team.id === index ? "active" : ""}
            />
          ))}
        </Pagenation>
      </Carousel>
    </Wrapper>
  )
}

export default Teams
