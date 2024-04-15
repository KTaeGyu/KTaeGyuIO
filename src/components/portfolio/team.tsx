import React from "react"
import { team } from "../../assets/data/teams"
import Check from "../../assets/icons/Check.inline.svg"
import Chevron from "../../assets/icons/Chevron.inline.svg"
import Click from "../../assets/icons/Click.inline.svg"
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
} from "../../styles/portfolio/team"
import Readme from "./readme"

interface TeamProp {
  team: team
}

const Team = ({ team }: TeamProp) => {
  const { title, size, abstract, descript, readme, features, fields, urls } =
    team
  const pages = team.pages

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Size>
        {size.period} ({size.personnel}명)
      </Size>
      <Content>
        <Carousel>
          <Pages>
            {pages.map((page) => (
              <Page key={page.id}>{page.content}</Page>
            ))}
          </Pages>
          <Navigation>
            <Prev>
              <Chevron />
            </Prev>
            <NowPage>1 / 2</NowPage>
            <Next>
              <Chevron />
            </Next>
          </Navigation>
        </Carousel>
        <Overview>
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
                  <Check /> FE
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

export default Team
