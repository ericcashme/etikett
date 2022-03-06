import styled from 'styled-components'
import { DynamicKeys } from 'types'
import color from '../theme/color'
import font from '../theme/font'
import space from '../theme/space'

export const ButtonRemove = styled.button`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  padding: 0;
  border-radius: 50%;
  text-align: center;
  width: ${space.md};
  height: ${space.md};
  border-color: red;
  background-color: red;
  color: ${color.grayscale.white};
  font-size: ${font.size.root};
  line-height: ${space.md};
  font-weight: ${font.weight.bold};
`

export const WrapImage = styled.div`
  position: relative;
  margin: 0 auto ${space.xs};

  & > img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
  }

  &:hover ${ButtonRemove} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const UserSleeping = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: rgba(36, 43, 51, 0.72);
`

export const UserName = styled.span`
  display: block;
  margin-bottom: 8px;
  color: ${color.grayscale.black};
`

const sizes: DynamicKeys = {
  medium: `
    ${WrapImage} {
      width: ${space.xl4};
      height: ${space.xl4};
    }

    ${UserSleeping} {
      & > img {
        display: block;
        margin: ${space.md} auto;
      }
    }

    ${UserName} {
      font-size: ${font.size.xsmall};
      line-height: ${font.lineHeight.sm};
      font-weight: ${font.weight.normal};
    }
  `,
  large: `
    ${WrapImage} {
      width: ${space.xl5};
      height: ${space.xl5};
    }

    ${UserSleeping} {
      & > img {
        display: block;
        margin: ${space.lg} auto;
      }
    }

    ${UserName} {
      font-size: ${font.size.h6};
      line-height: ${font.lineHeight.lg};
      font-weight: ${font.weight.bold};
    }
  `
}

const getSizes = ({ size = 'medium' }) => sizes[size]

export const UserContainer = styled.div`
  min-width: 126px;
  max-width: 166px;
  text-align: center;
  ${getSizes}
`
