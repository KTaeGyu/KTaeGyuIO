import React, { useRef, useState } from "react"
import majors from "../../../assets/data/majorProjects"
import Chevron from "../../../assets/icons/Chevron.inline.svg"
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
} from "../../../styles/portfolio/projects/majors"
import { theme } from "../../../styles/theme.css"
import Major from "./major"

const Majors = () => {
  const cardLength = majors.length
  const cards = majors

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
      <Title>Major Projects</Title>
      <Carousel>
        <Cards ref={carouselRef}>
          {cards.map((major) => (
            <Card key={major.id} className={major.id === index ? "active" : ""}>
              <Major major={major} />
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

export default Majors
