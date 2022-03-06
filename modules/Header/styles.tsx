import styled from 'styled-components'
import { theme, Link, Button } from 'components'
const { breakpoint, borders, color, space, font } = theme

export const Header = styled.header`
  position: relative;
  z-index: 10;
  background-color: ${color.grayscale.white};
`

export const SkipLink = styled.a`
  position: absolute;
  top: -10rem;
  left: 0;
  transition: top 0.3s ease;
  padding: ${space.xs} ${space.md};
  background-color: ${color.primary.pure};
  color: ${color.grayscale.white};
  font-size: ${font.size.root};
  font-weight: ${font.weight.bold};

  &:focus {
    top: 0;
  }
`

export const TopHeader = styled.div`
  display: none;

  @media (min-width: ${breakpoint.lg}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${space.xs} 0;
  }
`

const TopHeaderListStyle = `
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const TopHeaderInfos = styled.div`
  ${TopHeaderListStyle}
`

export const TopHeaderList = styled.nav`
  ${TopHeaderListStyle}
`

export const TopHeaderLinks = styled(Link)`
  &:not(:first-of-type) {
    margin-left: ${space.md};
  }

  &:not(:first-of-type):before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: 1px;
    height: ${space.md};
    margin-right: ${space.md};
    background-color: ${color.grayscale.gray};
  }
`

export const MainHeader = styled.div`
  padding: ${space.md} 0;
`

export const Logo = styled.a`
  display: block;
  max-width: 10.5rem;
`

export const MainHeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

type StyleProps = {
  isActive: boolean
}

export const Overlay = styled.div<StyleProps>`
  display: ${(p) => (p.isActive ? 'block' : 'none')};
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 1;
`

export const SearchProduct = styled.div<StyleProps>`
  display: none;
  position: relative;
  width: 100%;
  z-index: ${(p) => (p.isActive ? 99 : 0)};
  margin-top: ${space.sm};

  @media (min-width: ${breakpoint.lg}) {
    display: block;
  }
`

export const SearchResult = styled.div`
  position: absolute;
  top: ${space.xl3};
  left: 0;
  right: 0;
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  padding: 1rem ${space.xs};
  padding: ${space.md} 0;
  background-color: ${color.grayscale.white};
  box-shadow: 0rem 0.5rem 0.5rem 0 rgba(83, 117, 153, 0.5);
`

export const SideSearch = styled.div`
  display: none;
  justify-content: flex-start;
  min-width: 30%;
  height: 100%;
  padding: 0 1rem;

  @media (min-width: ${breakpoint.md}) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`

export const MainResult = styled.div`
  min-width: 70%;
  width: 100%;
  padding-left: 1rem;
  border-right: ${borders.sizes.sm} solid ${color.grayscale.lighter};
`

export const ProductList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const Product = styled.li`
  position: relative;
  flex: 0 1 auto;
  width: 33.3%;
  padding: 1rem ${space.xs};
  text-align: center;
  cursor: pointer;
  transition: opacity 0.4s ease;

  &:hover {
    opacity: 0.6;
  }
`

export const ProductImage = styled.div`
  position: relative;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  padding: 0 ${space.sm};
  height: ${space.xl3};
  color: ${color.grayscale.black};

  &:hover {
    color: ${color.primary.pure};
  }
`

export const LoginAnchor = styled.a`
  display: none;
  position: relative;
  margin-right: ${space.lg};
  color: ${color.grayscale.black};
  transition: color 0.4s ease;

  &:hover {
    color: ${color.primary.pure};
    text-decoration: none;
  }

  @media (min-width: ${breakpoint.lg}) {
    display: block;
  }
`

export const Cart = styled.a`
  display: block;
  position: relative;
  margin-right: ${space.xl};
  padding: 0;
  border: 0;
  color: ${color.grayscale.black};
`

export const CartNumber = styled.span`
  display: block;
  position: absolute;
  top: -8px;
  right: -8px;
  width: 1.2rem;
  height: 1.2rem;
  background-color: ${color.primary.dark};
  border: ${borders.sizes.sm} solid ${color.grayscale.white};
  color: ${color.grayscale.white};
  font-size: 10px;
  border-radius: 50%;
  text-align: center;
  line-height: 1.125rem;
  font-weight: ${font.weight.bold}; ;
`

export const HeaderButton = styled(Button)`
  display: none;

  @media (min-width: ${breakpoint.lg}) {
    display: flex;
  }
`

export const MenuButton = styled.button`
  display: block;
  border: 0;
  background-color: transparent;

  @media (min-width: ${breakpoint.lg}) {
    display: none;
  }
`

export const BottomHeader = styled.div`
  display: none;
  width: 100%;
  background-color: ${color.grayscale.lighter};

  @media (min-width: ${breakpoint.lg}) {
    display: block;
  }
`

export const BottomHeaderList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  height: ${space.xl3};
`

export const BottomHeaderListItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;

  &:nth-of-type(2),
  &:nth-of-type(3),
  &:nth-of-type(4),
  &:nth-of-type(5),
  &:nth-of-type(6),
  &:nth-of-type(7),
  &:nth-of-type(8),
  &:nth-of-type(9) {
    display: none;
  }

  @media (min-width: ${breakpoint.md}) {
    &:nth-of-type(2),
    &:nth-of-type(3),
    &:nth-of-type(4) {
      display: block;
    }
  }

  @media (min-width: ${breakpoint.lg}) {
    &:nth-of-type(5),
    &:nth-of-type(6) {
      display: block;
    }
  }

  @media (min-width: ${breakpoint.xl}) {
    &:nth-of-type(7),
    &:nth-of-type(8),
    &:nth-of-type(9) {
      display: block;
    }
  }
`
