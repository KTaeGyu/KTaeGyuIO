import React from "react"
import { mini } from "../../../assets/data/miniProjects"
import {
  Content,
  Cover,
  Descript,
  Icon,
  Image,
  Link,
  Period,
  Skill,
  Skills,
  Title,
  Url,
  Urls,
  Wrapper,
} from "../../../styles/portfolio/projects/mini"

interface MiniProp {
  mini: mini
}

const Mini = ({ mini }: MiniProp) => {
  const { cover, icon, title, descript, period, skills, urls } = mini

  return (
    <Wrapper>
      <Cover>
        <Image src={cover} alt="샘플이미지" />
      </Cover>
      <Title>
        <Icon>{icon}</Icon>
        {title}
      </Title>
      <Content>
        <Descript>{descript}</Descript>
        <Period>{period}</Period>
        <Skills>
          {skills.map((skill, idx) => (
            <Skill
              key={idx}
              $color={skill.color}
              $background={skill.background}
            >
              {skill.name}
            </Skill>
          ))}
        </Skills>
        <Urls>
          {urls.map((url, idx) => (
            <Url key={idx}>
              <Link href={url}>{url}</Link>
            </Url>
          ))}
        </Urls>
      </Content>
    </Wrapper>
  )
}

export default Mini
