import styled from 'styled-components'
import { tokens } from '../theme'
const { borders, color, font, space } = tokens

export const Card = styled.a`
  display: inline-block;
  max-width: 21rem;
  width: 100%;
  border-radius: ${borders.radius.md};
  background-color: ${color.grayscale.white};
  overflow: hidden;
  transition: box-shadow 0.16s ease-in-out;

  &:hover,
  &:focus {
    text-decoration: none;
    box-shadow: 0 1px 5px 0 rgb(60 64 67 / 30%), 0 4px 8px 3px rgb(60 64 67 / 15%);
  }

  &:active {
    background-color: ${color.grayscale.light};
  }

  picture,
  img {
    display: block;
    width: 100%;
    height: auto;
  }
`

export const CardImage = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  overflow: hidden;
  text-align: center;
`

export const CardInfos = styled.div`
  padding: 0 ${space.sm} ${space.sm} ${space.sm};
`

export const WrappTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${space.xl3};
`

export const CardTitle = styled.p`
  display: -webkit-box;
  width: 100%;
  color: ${color.grayscale.black};
  font-size: ${font.size.h6};
  font-weight: ${font.weight.bold};
  line-height: ${font.lineHeight.lg};
  text-align: center;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
`
