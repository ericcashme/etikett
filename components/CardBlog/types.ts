type Kind = 'default' | 'transparent'

export type CardBlogProps = {
  kind?: Kind
  href: string
  image: string
  tags?: string[]
  title: string
  description?: string
  labelButton: string
}
