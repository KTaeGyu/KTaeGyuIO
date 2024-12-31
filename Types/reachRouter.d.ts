import "@reach/router"

declare module "@reach/router" {
  export interface NavigateFn {
    (
      to: string | number,
      options?: NavigateOptions<{}> | undefined
    ): Promise<void>
  }
}
