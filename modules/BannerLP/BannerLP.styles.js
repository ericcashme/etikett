import { Row, theme } from 'components'
import styled from 'styled-components'

const { breakpoint, space, color, font } = theme

export const BannerRow = styled(Row)`
  position: relative;
  margin-bottom: ${space.xl};
`

export const Imagem = styled.img`
  display: block;
  width: 100%;
  height: auto;
`

export const Content = styled.div`
  color: ${color.inverse.pure};
  position: absolute;
  left: 1.76rem;
  top: ${space.xl4};
  width: 45%;
  line-height: 16px;

  @media (min-width: ${breakpoint.xl}) {
    left: ${space.xl3};
    top: ${space.xl5};
  }

  h1 {
    font-size: ${font.size.h5};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    @media (min-width: ${breakpoint.md}) {
      font-size: ${font.size.h3};
    }
  }

  p {
    margin-bottom: ${space.md};
  }

  div {
    display: none;

    @media (min-width: ${breakpoint.xl}) {
      display: block;
    }
  }
`
