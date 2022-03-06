export type Page = {
  label: string
  path: string
}

export type BreadcrumbProps = {
  pages: Page[]
  inverse?: boolean
}

export type StylesProps = {
  inverse?: boolean
}
