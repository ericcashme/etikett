import styled from 'styled-components'
import borders from '../theme/borders'
import space from '../theme/space'

export const RatingStar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    width: 20px;
    height: 20px;

    &:not(:last-of-type) {
      margin-right: ${space.xs2};
    }
  }
`

export const WrapperRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${space.xs};
  flex-wrap: wrap;
`

export const ColStars = styled.div`
  display: flex;
  justify-content: space-between;
  width: 6rem;
`

export const ColChartBar = styled.div`
  width: calc(100% - 9rem);
  padding: 0 ${space.sm};
`

export const ColCounter = styled.div`
  width: ${space.xl3};
  text-align: right;
`

export const WrapperInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${space.xs};
`

export const HiddenTag = styled.div`
  display: none;
`

export const Review = styled.div`
  border-bottom: ${borders.sizes.sm} solid gray;
  margin-bottom: ${space.sm};
`
