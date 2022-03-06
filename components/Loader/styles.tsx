import styled, { keyframes } from 'styled-components'
import { DynamicKeys } from 'types'
import color from '../theme/color'
import { LoaderStyleProps, SmallLoaderStyleProps, WrapperStyleProps } from './types'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const CircleLoadingChild = styled.div`
  border-radius: 50%;
  border-width: 3px 3px 3px 3px;
  border-style: solid solid solid solid;
  border-color: transparent transparent transparent ${color.primary.lighter};
  animation: ${spin} 3s linear infinite;
`

export const CircleLoadingGrandson = styled.div`
  border-radius: 50%;
  border-width: 3px 3px 3px 3px;
  border-style: solid solid solid solid;
  border-color: transparent transparent transparent ${color.primary.pure};
  animation: ${spin} 3s linear infinite;
`

const sizes: DynamicKeys = {
  medium: `
    width: 90px;
    height: 90px;
    margin-top: -45px;
    margin-left: -45px;

    ${CircleLoadingChild} {
      width: 70px;
      height: 70px;
      margin: 10px auto;
    }

    ${CircleLoadingGrandson} {
      width: 50px;
      height: 50px;
      margin: 10px auto;
    }
  `,
  large: `
    width: 150px;
    height: 150px;
    margin-top: -75px;
    margin-left: -75px;

    ${CircleLoadingChild} {
      width: 120px;
      height: 120px;
      margin: 15px auto;
    }

    ${CircleLoadingGrandson} {
      width: 90px;
      height: 90px;
      margin: 15px auto;
    }
  `
}

export const Loader = styled.div<LoaderStyleProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  border-width: 3px 3px 3px 3px;
  border-style: solid solid solid solid;
  border-color: transparent transparent transparent ${color.primary.darker};
  animation: ${spin} 3s linear infinite;
  ${(p) => sizes[p.size]}
`

export const SmallLoader = styled.div<SmallLoaderStyleProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 16px;
  height: 16px;
  margin-left: -8px;
  margin-top: -8px;
  border-radius: 50%;
  border: 3px solid transparent;
  ${(p) => `border-top-color: ${color[p.color].pure};`}
  animation: ${spin} .8s linear infinite;
`

export const Wrap = styled.div<WrapperStyleProps>`
  position: relative;
  height: ${(p) => p.wrapper};
`
