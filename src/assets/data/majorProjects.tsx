interface size {
  period: string
  personnel: string
}

interface page {
  src: string
  alt: string
}

interface field {
  title: string
  skills: string[]
}

interface feature {
  title: string
  content: string
}

interface url {
  title: string
  link: string
}

interface major {
  id: number
  title: string
  size: size
  pages: page[]
  abstract: string
  descript: string[]
  readme: string
  features: feature[]
  fields: field[]
  urls: url[]
  colors: string[]
}

let major_id = 0

const majors: major[] = [
  {
    id: major_id++,
    title: "SAMSUNG Signature",
    size: {
      period: "7주 2024.01.03 ~ 2024.02.16",
      personnel: "6명 Backend 3, Frontend 3",
    },
    pages: [
      {
        src: "images/projects/1-1.png",
        alt: "샘플이미지",
      },
    ],
    abstract: "삼성페이를 이용한 대리결제 서비스",
    descript: [
      "'SAMSUNG Signature'는 삼성월렛의 Add To Wallet 기능을 활용한 '대리결제 서비스'입니다.",
      "저는 이 프로젝트를 통해 '딥링크', '푸시알림', '생체인식' 등 React-native에서 활용할 수 있는 앱의 '네이티브'한 기능을 살려 개발해볼 수 있었습니다.",
      "또한 'Redux' 와 'React-query'를 이용하여 '코드의 간결성'을 확보하며, React-query의 캐싱기능으로 'API 호출을 최소화'할 수 있었습니다.",
      "마지막으로 'MSW'를 활용하여 서버가 있는 환경과 유사하게 개발하여 이후 서버 API와 연결할 때 '3일'의 개발기간을 단축할 수 있었습니다.",
    ],
    readme:
      "https://quickest-blue-4f2.notion.site/Signature-8852bd0ee55442bf90c55a5a6b9d248d?pvs=4",
    features: [
      {
        title: "대리결제 요청",
        content:
          "사용자의 친구에게 대리 결제 금액, 상품명, 상품 사진과 같은 결제 조건을 포험하여 결제 요청을 할 수 있습니다.",
      },
      {
        title: "요청상태 조회",
        content:
          "사용자가 요청을 보낸 후, 요청 상태를 실시간으로 조회할 수 있습니다.",
      },
      {
        title: "대리결제 요청 알림",
        content:
          "대리 결제 요청 시 혹은 상태 변경시, 푸시 알림을 통해 해당 요청서 혹은 요청 상태를 확인할 수 있습니다.",
      },
      {
        title: "기간제 대리결제 카드 발급",
        content:
          "결제 금액, 카드 사용 기간과 같은 결제 조건을 작성하여 동시에 여러명에게 카드를 발급할 수 있습니다.",
      },
      {
        title: "대리 결제",
        content:
          "빌린 카드를 선택한 후 삼성 페이에 있는 시그니처 카드로 결제를 진행할 수 있습니다.",
      },
      {
        title: "빌려준 카드 관리",
        content:
          "친구에게 빌려준 카드 목록을 조회하고 On/Off 하거나 삭제할 수 있습니다.",
      },
      {
        title: "친구 목록 동기화",
        content:
          "사용자의 전화번호부에 등록된 친구 목록 중 시그니처 앱에 가입된 사용자는 자동으로 친구로 등록됩니다.",
      },
    ],
    fields: [
      {
        title: "FE",
        skills: [
          "Typescript",
          "React-native",
          "Redux",
          "Android Studio",
          "Styped-components",
          "Tanstack-query",
          "MSW",
        ],
      },
      {
        title: "BE",
        skills: [
          "Java",
          "Spring Boot",
          "JPA",
          "QueryDSL",
          "MySQL",
          "Redis",
          "Apachekafka",
          "Spring Cloude Eureka",
        ],
      },
      {
        title: "Infra",
        skills: [
          "Nginx",
          "Jenkins",
          "Docker",
          "AWS EC2",
          "Grafana",
          "Prometheus",
          "Portainer",
          "Zipkin",
          "Gitlab",
        ],
      },
    ],
    urls: [
      {
        title: "Github",
        link: "https://github.com/SamsungSignature",
      },
      {
        title: "notion",
        link: "https://goldenrod-plough-a82.notion.site/A503-92df6177eeef46db98aa7cb8b9ec4861?pvs=4",
      },
    ],
    colors: ["#1428A0", "#94c3d7"],
  },
]

export type { major }
export default majors
