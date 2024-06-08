import React from "react"
import { major } from "../../../assets/data/majorProjects"
import IconPath from "../../../assets/iconPath"
import Chevron from "../../../assets/icons/Chevron.inline.svg"
import Click from "../../../assets/icons/Click.inline.svg"
import NOTION_COLORS from "../../../constants/notionColor"
import getRandomElement from "../../../functions/getRandomElement"
import parseHighlight from "../../../functions/parseHighlight"
import useCarousel from "../../../hooks/useCarousel"
import {
  Abstract,
  Carousel,
  Content,
  Descript,
  FeatContent,
  FeatTitle,
  Feature,
  Features,
  Field,
  Fields,
  Hr,
  Image,
  Link,
  Navigation,
  Next,
  NowPage,
  Overview,
  Page,
  Pages,
  Prev,
  ReadmeBtn,
  Size,
  Skill,
  Skills,
  SubTitle,
  Title,
  Url,
  UrlTitle,
  Urls,
  Wrapper,
} from "../../../styles/portfolio/projects/major"
import Readme from "./readme"

interface MajorProp {
  major: major
}

const Major = ({ major }: MajorProp) => {
  const {
    title,
    size,
    abstract,
    descript,
    readme,
    features,
    fields,
    urls,
    colors,
  } = major
  const pages = major.pages
  const pageLength = pages.length

  // 캐러셀
  const { carouselRef, handleSwipe, index } = useCarousel(pages)

  // 노션 페이지 새로열기
  const openReadme = () => {
    window.open(readme, "_blank", "noopener,noreferrer")
  }

  return (
    <Wrapper>
      <Title $color={colors[0]}>{title}</Title>
      <Content>
        <Carousel>
          <Pages ref={carouselRef} $pages={pageLength}>
            {pages.map((page, idx) => (
              <Page key={idx}>
                <Image src={page.src} alt={page.alt} />
              </Page>
            ))}
          </Pages>
          <Navigation>
            <Prev onClick={() => handleSwipe(-1)}>
              <Chevron />
            </Prev>
            <NowPage>
              {index} / {pageLength}
            </NowPage>
            <Next onClick={() => handleSwipe(1)}>
              <Chevron />
            </Next>
          </Navigation>
        </Carousel>
        <Overview $color={colors[0]} $secondary={colors[1]}>
          <Abstract>{abstract}</Abstract>
          <Descript>
            {descript.map((line) => parseHighlight(line, colors[0], colors[1]))}
          </Descript>
          <ReadmeBtn onClick={openReadme}>
            README.md <Click />
          </ReadmeBtn>
          <Readme content={readme} />
          <Hr />
          <SubTitle $color={colors[0]}>Size</SubTitle>
          <Size>
            <p>{size.period}</p>
            <p>{size.personnel}</p>
          </Size>
          <SubTitle $color={colors[0]}>Features</SubTitle>
          <Features>
            {features.map((feature, idx) => (
              <Feature key={idx} $isLast={idx == features.length - 1}>
                <FeatTitle>{feature.title}</FeatTitle>
                <FeatContent>{feature.content}</FeatContent>
              </Feature>
            ))}
          </Features>
          <SubTitle $color={colors[0]}>Skills</SubTitle>
          <Fields>
            {fields.map((field, idx) => (
              <React.Fragment key={idx}>
                <Field>
                  <IconPath.Check /> {field.title}
                </Field>
                <Skills>
                  {field.skills.map((skill, idx) => (
                    <Skill
                      key={idx}
                      $colorSet={getRandomElement(NOTION_COLORS)}
                    >
                      # {skill}
                    </Skill>
                  ))}
                </Skills>
              </React.Fragment>
            ))}
          </Fields>
          <SubTitle $color={colors[0]}>Links</SubTitle>
          <Urls>
            {urls.map((url, idx) => (
              <Url key={idx}>
                <UrlTitle>{url.title}</UrlTitle>
                <Link href={url.link} target="_blank">
                  {url.link}
                </Link>
              </Url>
            ))}
          </Urls>
        </Overview>
      </Content>
    </Wrapper>
  )
}

export default Major
