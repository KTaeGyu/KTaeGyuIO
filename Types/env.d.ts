declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NODE_ENV: string
    readonly CONTENTFUL_SPACE_ID: string
    readonly CONTENTFUL_ACCESS_TOKEN: string
    readonly CONTENTFUL_MANAGEMENT_TOKEN: string
    readonly CONTENTFUL_DELIVERY_ACCESS_TOKEN: string
    readonly CONTENTFUL_HOST: string
    readonly NETLIFY_AUTH_TOKEN: string
  }
}
