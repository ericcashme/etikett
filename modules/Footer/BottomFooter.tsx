import React, { FC, memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Row, Col, Text, NewIcon } from 'components'
import { footerLinks } from './data'
import * as S from './styles'
import { FooterLinkProps } from './types'

const FooterLink: FC<FooterLinkProps> = memo(({ title, link, target }) => {
  if (target === '_blank') {
    return (
      <S.LinkFooter kind="text" href={link} isBlank={!!target}>
        {title}
      </S.LinkFooter>
    )
  }

  return (
    <Link href={link} passHref>
      <S.LinkFooter kind="text">{title}</S.LinkFooter>
    </Link>
  )
})

FooterLink.displayName = 'FooterLink'

export const BottomFooter: FC = memo(() => (
  <S.BottomFooter>
    <Row>
      <Col
        xs={12}
        lg={3}
        orders={[
          {
            mq: 'xs',
            order: 2
          },
          {
            mq: 'lg',
            order: 1
          }
        ]}
      >
        <Link href="/" passHref>
          <S.LogoFooter>
            <Image
              src="/img/logo-etikett.png"
              alt="Etikett"
              width="244"
              height="71"
              layout="responsive"
              quality={100}
            />
          </S.LogoFooter>
        </Link>
        <Text size="sm" color="weak">
          etikett.de ist eine B2B-Etikettendruckerei. Das Angebot richtet sich daher ausschließlich an Unternehmen und
          Gewerbetreibende
        </Text>
        <Text size="sm" weight="medium">
          etikett.de <br />
          Europa-Allee 21 <br />
          54343 Föhren / Deutschland
        </Text>
        <Text size="sm" weight="medium">
          +49 6502 984 940 <br />
          info@etikett.de
        </Text>

        <S.NavSocialLink>
          <S.SocialLink
            type="facebook"
            href="https://www.facebook.com/etikett.de/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <NewIcon name="facebook" width="19" height="19" fill="currentColor" />
          </S.SocialLink>
          <S.SocialLink
            type="instagram"
            href="https://www.instagram.com/etikett.de/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <NewIcon name="instagram" width="19" height="19" fill="currentColor" />
          </S.SocialLink>
          <S.SocialLink
            type="youtube"
            href="https://www.youtube.com/user/etikettde"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Youtube"
          >
            <NewIcon name="youtube" width="19" height="19" fill="currentColor" />
          </S.SocialLink>
          <S.SocialLink
            type="linkedin"
            href="https://www.linkedin.com/company/etikett-de-vertriebs-gmbh/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
          >
            <NewIcon name="linkedin" width="19" height="19" fill="currentColor" />
          </S.SocialLink>
        </S.NavSocialLink>
      </Col>
      <Col
        xs={12}
        lg={8}
        lgOffset={1}
        orders={[
          {
            mq: 'xs',
            order: 1
          },
          {
            mq: 'lg',
            order: 2
          }
        ]}
      >
        <Row>
          {footerLinks.map(({ title, links }) => (
            <Col key={title} xs={12} lg={4}>
              <Text size="lg" family="heading" weight="bold">
                {title}
              </Text>
              <S.LinkList>
                {links.length > 0 &&
                  links.map(({ title, link, target }) => (
                    <FooterLink key={link} title={title} link={link} target={target} />
                  ))}
              </S.LinkList>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
    <Row>
      <Col>
        <Text size="xs" color="weak" margin="0">
          © Copyright {new Date().getFullYear()} etikett.de - Alle Rechte vorbehalten.
        </Text>
      </Col>
    </Row>
  </S.BottomFooter>
))

BottomFooter.displayName = 'BottomFooter'
