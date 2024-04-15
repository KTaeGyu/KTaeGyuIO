import React, {
  Dispatch,
  MouseEventHandler,
  SetStateAction,
  useRef,
} from "react"
import { skill } from "../../../assets/data/skills"
import IconPath from "../../../assets/iconPath"
import {
  CloseBtn,
  Container,
  Content,
  DataList,
  Descript,
  DescriptBox,
  ExpBox,
  ExpContent,
  ExpTitle,
  Level,
  LevelBox,
  LevelTitle,
  Logo,
  LogoBox,
  Name,
  Option,
  Title,
  Url,
  UrlContent,
  UrlTitle,
  Urls,
  UrlsTitle,
  Wrapper,
} from "../../../styles/portfolio/skills/skill"
import { Controlls } from "./skills"

interface SkillProp {
  skill: skill
  controlls: Controlls
  setControls: Dispatch<SetStateAction<Controlls>>
}

const Skill = ({ skill, controlls, setControls }: SkillProp) => {
  // 데이터
  const { id, logo, title, experience, level, urls } = skill
  const selected = controlls.select === id

  // 상세 열기, 닫기
  const closeBtn = useRef<HTMLButtonElement>(null)
  const handleOpen: MouseEventHandler<HTMLLIElement> = (e) => {
    const target = e.target as HTMLElement
    if (closeBtn.current?.contains(target)) return
    if (controlls.select === id) return
    if (controlls.select !== -1) {
      setControls((prev) => ({ ...prev, height: prev.height, select: id }))
    } else {
      setControls((prev) => ({ ...prev, height: prev.height + 38, select: id }))
    }
  }
  const handleClose: MouseEventHandler<HTMLButtonElement> = () => {
    setControls((prev) => ({ ...prev, height: prev.height - 38, select: -1 }))
  }

  return (
    <Wrapper onClick={handleOpen} className={selected ? "active" : ""}>
      <Container>
        <Title>
          <LogoBox>
            <Logo src={logo} alt={title} />
          </LogoBox>
          <Name>{title}</Name>
        </Title>
        <Content>
          <ExpBox>
            <ExpTitle>사용 경험</ExpTitle>
            <ExpContent>{experience}</ExpContent>
          </ExpBox>
          <LevelBox>
            <LevelTitle>Level</LevelTitle>
            <DescriptBox $level={level.level}>
              <Descript $level={level.level}>{level.description}</Descript>
            </DescriptBox>
            <Level
              type="range"
              list="level"
              min={0}
              max={5}
              defaultValue={level.level}
            />
            <DataList id="level">
              <Option value={0}>0</Option>
              <Option value={1}>1</Option>
              <Option value={2}>2</Option>
              <Option value={3}>3</Option>
              <Option value={4}>4</Option>
              <Option value={5}>5</Option>
            </DataList>
          </LevelBox>
          {urls ? (
            <Urls>
              <UrlsTitle>연관 링크</UrlsTitle>
              {urls.map((url, idx) => (
                <Url key={idx}>
                  <UrlTitle>{url.title}</UrlTitle>
                  <UrlContent href={url.link} target="_blank">
                    {url.link}
                  </UrlContent>
                </Url>
              ))}
            </Urls>
          ) : null}
          <CloseBtn ref={closeBtn} onClick={handleClose}>
            <IconPath.Close />
          </CloseBtn>
        </Content>
      </Container>
    </Wrapper>
  )
}

export default Skill
