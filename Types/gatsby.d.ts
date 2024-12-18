import "gatsby"

declare module "gatsby" {
  import { NavigateOptions } from "gatsby"

  export function navigate(
    to: string | number,
    options?: NavigateOptions | undefined
  ): Promise<void>
}
