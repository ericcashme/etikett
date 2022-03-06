import styled from 'styled-components'
import { theme } from 'components'
const { space } = theme

export const ResultFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: ${space.xl2};
`

export const ExtraInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ExtraInfosItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: ${space.lg};

  &:hover {
    text-decoration: none;
  }

  &:first-of-type {
    margin-right: ${space.lg};

    svg {
      height: 1.1rem;
    }
  }

  &:last-of-type svg {
    height: 0.9rem;
  }

  svg {
    margin-right: ${space.xs2};
  }
`
