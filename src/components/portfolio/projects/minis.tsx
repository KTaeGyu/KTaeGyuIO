import React from "react"
import minis from "../../../assets/data/miniProjects"
import IconPath from "../../../assets/iconPath"
import useInfiniteCarousel from "../../../hooks/useInfiniteCarousel"
import {
  Button,
  Cards,
  Carousel,
  Navigation,
  Title,
  Wrapper,
} from "../../../styles/portfolio/projects/minis"
import Mini from "./mini"

const Minis = () => {
  const cardLength = minis.length
  const cards = [...minis.slice(cardLength - 2), ...minis, ...minis]

  // 무한 캐러셀
  const { carouselRef, handleSwipe } = useInfiniteCarousel(cards, cardLength)

  return (
    <Wrapper>
      <Title>Mini Projects</Title>
      <Carousel>
        <Cards ref={carouselRef}>
          {cards.map((mini, idx) => (
            <Mini key={idx} mini={mini} />
          ))}
        </Cards>
        <Navigation className="left">
          <Button onClick={() => handleSwipe(-1)}>
            <IconPath.Chevron />
          </Button>
        </Navigation>
        <Navigation className="right">
          <Button onClick={() => handleSwipe(1)}>
            <IconPath.Chevron />
          </Button>
        </Navigation>
      </Carousel>
    </Wrapper>
  )
}

export default Minis
