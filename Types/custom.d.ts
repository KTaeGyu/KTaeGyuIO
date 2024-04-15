declare module "*.svg" {
  import { ReactElement, ReactSVGElement, SVGProps } from "react"
  const src: (props: SVGProps<ReactSVGElement>) => ReactElement
  export default src
}
