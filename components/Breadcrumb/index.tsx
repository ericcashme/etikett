import React, { FC, memo } from 'react'
import Link from 'next/link'
import { Link as LinkComp } from '../Link'
import * as S from './styles'
import { BreadcrumbProps, Page } from './types'

export const Breadcrumb: FC<BreadcrumbProps> = memo(({ pages, inverse = false }) => {
  const mutPages: Page[] = [...pages]
  const actualPage = mutPages.pop() as Page

  return (
    <S.Breadcrumb itemScope itemType="https://schema.org/BreadcrumbList">
      {mutPages.map((item, index) => (
        <S.BreadcrumbItem
          inverse={inverse}
          key={`bc-${item.path}`}
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <Link href={item.path} as={item.path} passHref>
            <LinkComp>
              <span itemProp="name">{item.label}</span>
              <meta itemProp="position" content={String(index + 1)} />
            </LinkComp>
          </Link>
        </S.BreadcrumbItem>
      ))}

      <S.BreadcrumbItem inverse={inverse} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
        <span itemProp="name">{actualPage.label}</span>
        <meta itemProp="position" content={String(mutPages.length + 1)} />
      </S.BreadcrumbItem>
    </S.Breadcrumb>
  )
})

Breadcrumb.displayName = 'Breadcrumb'
