import styled, { keyframes } from 'styled-components'
import color from '../theme/color'
import font from '../theme/font'
import space from '../theme/space'

const opacityAnimation = keyframes`
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.6;
  }
`

export const Banner = styled.div`
  background-color: ${color.grayscale.light};
  animation: ${opacityAnimation} 1.5s ease infinite;
  position: relative;
  width: 100%;
  margin-bottom: ${space.xl2};
  overflow: hidden;

  &:after {
    content: '';
    display: block;
    padding-top: 35%;
  }
`

export const Image = styled.div`
  background-color: ${color.grayscale.light};
  animation: ${opacityAnimation} 1.5s ease infinite;
  position: relative;
  width: 100%;
  margin-bottom: ${space.md};
  overflow: hidden;

  &:after {
    content: '';
    display: block;
    padding-top: 100%;
  }
`

export const Product = styled.div`
  width: 100%;
  max-width: 20rem;
  margin-bottom: ${space.xl};
`

export const Texts = styled.div`
  animation: ${opacityAnimation} 1.5s ease infinite;
  width: 100%;

  &:before,
  &:after {
    content: '';
    display: block;
    background-color: ${color.grayscale.light};
    height: ${font.size.root};
    margin-bottom: ${space.sm};
  }

  &:before {
    width: 60%;
  }

  &:after {
    width: 100%;
  }
`

export const Title = styled.div`
  background-color: ${color.grayscale.light};
  animation: ${opacityAnimation} 1.5s ease infinite;
  width: 70%;
  height: ${font.size.h3};
  margin-bottom: ${space.md};
`
