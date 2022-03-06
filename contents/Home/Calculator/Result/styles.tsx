import styled from 'styled-components'
import { theme, Box } from 'components'
const { borders, breakpoint, color, font, space } = theme

export const Result = styled.aside`
  display: block;
  height: 100%;
`

export const ResultWrapper = styled.aside`
  position: -webkit-sticky !important;
  position: sticky !important;
  top: ${space.lg};
`

export const ResultBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${space.xl2} ${space.md} 0;

  @media (min-width: ${breakpoint.hd}) {
    padding: ${space.xl3} ${space.xl} 0;
  }
`

export const Total = styled.span`
  display: inline-block;
  margin-bottom: ${space.sm};
  padding: ${space.xs} ${space.xl2};
  border-radius: ${borders.radius.lg};
  background-color: ${color.grayscale.light};
  color: ${color.primary.pure};
  font-family: ${font.family.heading};
  font-size: ${font.size.h3};
  font-weight: ${font.weight.bold};
  text-align: center;
`

export const Table = styled.div`
  display: table;
  border-collapse: separate;
  margin-bottom: ${space.lg};
  color: ${color.text.normal};
  font-size: ${font.size.small};
  text-align: center;
`

export const TableHead = styled.div`
  display: table-row;
  background-color: ${color.grayscale.light};
  font-weight: ${font.weight.medium};

  div {
    padding-top: ${space.xs};
    padding-bottom: ${space.xs};
  }

  div:first-of-type {
    border-top-left-radius: ${borders.radius.md};
    border-bottom-left-radius: ${borders.radius.md};
  }

  div:last-of-type {
    border-top-right-radius: ${borders.radius.md};
    border-bottom-right-radius: ${borders.radius.md};
  }
`

export const TableRow = styled.div<{ highlight: boolean }>`
  display: table-row;
  color: ${({ highlight }) => (highlight ? color.text.primary : color.text.normal)};
`

export const TableCell = styled.div`
  display: table-cell;
  padding: ${space.xs} ${space.md} 0;
`

export const Delivery = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${space.xl};
`

export const DeliveryType = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: ${space.xs2} 0;

  &:first-of-type {
    padding-right: ${space.sm};
    margin-right: ${space.sm};
    border-right: ${borders.sizes.sm} solid ${color.grayscale.light};
  }

  @media (min-width: ${breakpoint.hd}) {
    padding-right: ${space.md};
    margin-right: ${space.md};
  }

  svg {
    height: 1.15rem;
    margin-right: ${space.xs};

    @media (min-width: ${breakpoint.hd}) {
      margin-right: ${space.sm};
    }
  }

  p {
    line-height: 1.2;
  }
`
