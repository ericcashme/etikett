import styled from 'styled-components'
import { theme } from 'components'
const { color, space, borders } = theme

export const Summary = styled.div`
  padding: ${space.xl2} ${space.lg} 0;
`

export const SummaryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${space.md};
`

export const SummaryBody = styled.div`
  padding: ${space.lg};
  border-radius: ${borders.radius.lg};
  background-color: ${color.grayscale.light};
`
