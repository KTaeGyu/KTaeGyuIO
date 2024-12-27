import { Path } from "../components/main/layout/primarySideBar/explorer/menus/folders/Paths.interface"

const FOLDERS: Path[] = [
  {
    title: "src",
    isOpen: false,
    subsets: [
      {
        title: "api",
        isOpen: false,
        subsets: [
          {
            title: "velog.ts",
            isOpen: false,
            href: "https://velog.io/@xorb269/posts",
          },
          {
            title: "github.ts",
            isOpen: false,
            href: "https://github.com/KTaeGyu",
          },
        ],
      },
      {
        title: "assets",
        isOpen: false,
        subsets: [
          {
            title: "icons",
            isOpen: false,
            subsets: [
              {
                title: "ReactJS.svg",
                isOpen: false,
              },
              {
                title: "NextJS.svg",
                isOpen: false,
              },
            ],
          },
          {
            title: "index.tsx",
            isOpen: false,
          },
          {
            title: "README.md",
            isOpen: false,
          },
        ],
      },
      {
        title: "constants",
        isOpen: false,
        subsets: [
          {
            title: "resume.tsx",
            isOpen: false,
          },
          {
            title: "introduction.tsx",
            isOpen: false,
          },
          {
            title: "index.tsx",
            isOpen: false,
          },
          {
            title: "README.md",
            isOpen: false,
          },
        ],
      },
      {
        title: "pages",
        isOpen: false,
        subsets: [
          {
            title: "samsung-signature",
            isOpen: false,
            subsets: [
              {
                title: "page.tsx",
                isOpen: false,
              },
            ],
          },
          {
            title: "kteagyu-io",
            isOpen: false,
            subsets: [
              {
                title: "page.tsx",
                isOpen: false,
              },
            ],
          },
          {
            title: "index.tsx",
            isOpen: false,
          },
          {
            title: "README.md",
            isOpen: false,
          },
        ],
      },
      {
        title: "index.tsx",
        isOpen: false,
      },
    ],
  },
  {
    title: "Welcome.tsx",
    isOpen: false,
  },
  {
    title: "README.md",
    isOpen: false,
  },
  {
    title: "package.json",
    isOpen: false,
  },
]

export default FOLDERS
