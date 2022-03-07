import styled from 'styled-components'
import { theme, Link } from 'components'
const { breakpoint, borders, color, space, font } = theme

export const Infos = styled.div`
  padding: ${space.xl3} 0;
  background-color: ${color.grayscale.white};

  @media (min-width: ${breakpoint.lg}) {
    padding: ${space.xl6} 0;
  }
`

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20rem;
  width: 33.33%;
  min-width: 320px;
  padding: ${space.xl};
  border-radius: ${borders.radius.lg};
  background-color: ${color.grayscale.light};

  &:not(:last-of-type) {
    margin-right: ${space.lg};
  }
`

export const InfoCardTop = styled.div``

export const InfoCardBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TopFooter = styled.div`
  padding: ${space.xl3} 0 ${space.lg};
  border-bottom: ${borders.sizes.sm} solid ${color.grayscale.lighter};
  background-color: ${color.grayscale.light};

  @media (min-width: ${breakpoint.lg}) {
    padding: ${space.xl4} 0;
  }
`

export const TopFooterItem = styled.div`
  margin-bottom: ${space.xl};

  @media (min-width: ${breakpoint.lg}) {
    margin-bottom: 0;
  }
`

export const TopFooterCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${space.xl4};
  height: ${space.xl4};
  margin: 0 auto ${space.lg};
  border-radius: ${borders.radius.circle};
  background-color: ${color.primary.darker};
`

export const FooterLinks = styled.div`
  padding: ${space.xl} 0;
  border-bottom: ${borders.sizes.sm} solid ${color.grayscale.lighter};
`

export const FooterInfos = styled.div`
  padding: ${space.xl3} 0 ${space.md};
  border-bottom: ${borders.sizes.sm} solid ${color.grayscale.light};
  background-color: ${color.grayscale.white};

  @media (min-width: ${breakpoint.lg}) {
    padding: ${space.xl4} 0;
  }
`

export const FooterInfosItem = styled.div`
  margin-bottom: ${space.lg};

  @media (min-width: ${breakpoint.lg}) {
    margin-bottom: 0;
  }
`

export const PaymentList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 0;
  margin: 0 0 ${space.md};
`

export const PaymentListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: ${space.xl};
  margin-bottom: ${space.sm};
  padding: 0;
  border-radius: ${borders.radius.md};
  border: ${borders.sizes.sm} solid ${color.grayscale.light};

  &:not(:last-child) {
    margin-right: ${space.xs};
  }
`

export const HorizontalList = styled.div`
  display: flex;
  align-items: flex-start;
`

export const WrapImage = styled.div<{ width: string }>`
  width: ${(p) => p.width}px;
  min-width: ${(p) => p.width}px;
  height: auto;

  &:not(:last-of-type) {
    margin-right: ${space.sm};
  }
`

export const BottomFooter = styled.div`
  padding: ${space.xl2} 0 ${space.lg};
  background-color: ${color.grayscale.white};

  @media (min-width: ${breakpoint.lg}) {
    padding: ${space.xl4} 0;
  }
`

export const LogoFooter = styled.a`
  display: block;
  width: 10rem;
  margin-bottom: ${space.md};
`

export const NavSocialLink = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${space.lg};

  @media (min-width: ${breakpoint.lg}) {
    justify-content: flex-start;
  }
`

const getTypeColor = (type: string) => {
  if (type === 'facebook') return '#0062E0'
  if (type === 'instagram') return '#f50057'
  if (type === 'youtube') return '#FF0000'
  if (type === 'linkedin') return '#0077b5'
  return '#0062E0'
}

export const SocialLink = styled.a<{ type: string }>`
  display: block;
  color: ${color.grayscale.gray};
  transition: all 0.3s linear;

  &:not(:last-of-type) {
    margin-right: ${space.xl};

    @media (min-width: ${breakpoint.lg}) {
      margin-right: ${space.sm};
    }
  }

  svg {
    width: 26px;
    height: 26px;
    fill: ${color.grayscale.light};

    @media (min-width: ${breakpoint.lg}) {
      width: 19px;
      height: 19px;
    }
  }

  &:hover {
    color: ${(p) => getTypeColor(p.type)};
  }
`

export const LinkList = styled.nav`
  display: flex;
  flex-direction: column;
  margin-bottom: ${space.xl};
`

export const LinkFooter = styled(Link)`
  line-height: 2.5rem;

  @media (min-width: ${breakpoint.md}) {
    font-size: ${font.size.small};
    line-height: 2rem;
  }
`
