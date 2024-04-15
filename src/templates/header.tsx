import * as React from "react"

type NavItem = {
  id: string
  navItemType: "Link"
  href: string
  text: string
}

type NavItemGroup = {
  id: string
  navItemType: "Group"
  name: string
}

interface HeaderData {
  layout: {
    header: {
      id: string
      navItems: NavItem[] | NavItemGroup[]
      cta: {
        id: string
        href: string
        text: string
      }
    }
  }
}

export default function Header() {
  // const data: HeaderData = useStaticQuery(graphql`
  //   query {
  //     layout {
  //       header {
  //         id
  //         navItems {
  //           id
  //           navItemType
  //           ... on NavItem {
  //             href
  //             text
  //           }
  //           ... on NavItemGroup {
  //             name
  //             navItems {
  //               id
  //               href
  //               text
  //               description
  //               icon {
  //                 alt
  //                 gatsbyImageData
  //               }
  //             }
  //           }
  //         }
  //         cta {
  //           id
  //           href
  //           text
  //         }
  //       }
  //     }
  //   }
  // `)

  return <header></header>
}
