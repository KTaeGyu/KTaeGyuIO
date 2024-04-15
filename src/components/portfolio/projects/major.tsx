import React from "react"
import { major } from "../../../assets/data/majorProjects"
import IconPath from "../../../assets/iconPath"
import Chevron from "../../../assets/icons/Chevron.inline.svg"
import Click from "../../../assets/icons/Click.inline.svg"
import useCarousel from "../../../hooks/useCarousel"
import {
  Abstract,
  Carousel,
  Content,
  Descript,
  Features,
  Field,
  Fields,
  Hr,
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
  SkillName,
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
  const primary = colors[0]

  // 캐러셀
  const { carouselRef, handleSwipe, index } = useCarousel(pages)

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Size>
        {size.period} ({size.personnel}명)
      </Size>
      <Content>
        <Carousel>
          <Pages ref={carouselRef} $pages={pageLength}>
            {pages.map((page) => (
              <Page key={page.id}>{page.content}</Page>
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
        <Overview $primary={primary}>
          <Abstract>{abstract}</Abstract>
          <Descript>{descript}</Descript>
          <ReadmeBtn>
            README.md <Click />
          </ReadmeBtn>
          <Readme content={readme} />
          <Hr />
          <SubTitle>Features</SubTitle>
          <Features>{features}</Features>
          <SubTitle>Skills</SubTitle>
          <Fields>
            {fields.map((field, idx) => (
              <React.Fragment key={idx}>
                <Field>
                  <IconPath.Check /> FE
                </Field>
                <Skills>
                  {field.skills.map((skill, idx) => (
                    <Skill key={idx}>
                      # <SkillName>{skill}</SkillName>
                    </Skill>
                  ))}
                </Skills>
              </React.Fragment>
            ))}
          </Fields>
          <SubTitle>Links</SubTitle>
          <Urls>
            {urls.map((url, idx) => (
              <Url key={idx}>
                <UrlTitle>{url.title}</UrlTitle>
                <Link href={url.link}>{url.link}</Link>
              </Url>
            ))}
          </Urls>
        </Overview>
      </Content>
    </Wrapper>
  )
}

export default Major
