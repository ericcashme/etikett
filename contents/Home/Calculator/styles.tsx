import styled, { css } from 'styled-components'
import { theme, Row, NewIcon } from 'components'
import { StepStylesProps } from './types'
const { borders, breakpoint, color, font, space } = theme

export const Settings = styled.div`
  background-color: ${color.grayscale.white};
`

export const SettingsRow = styled(Row)`
  position: relative;
  top: -${space.xl6};
`

export const SettingsInner = styled.div<{ open: boolean }>`
  position: relative;
  overflow: hidden;
  transition: max-height ${(p) => (p.open ? '1.5s ease-out' : '0.4s ease-in')};
  max-height: ${(p) => (p.open ? '4000px' : '578px')};
`

export const TopCalculator = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${space.xl5};
  padding: 0 ${space.md};
  border-radius: ${borders.radius.lg} ${borders.radius.lg} 0 0;
  background-color: ${color.primary.darker};

  @media (min-width: ${breakpoint.xl}) {
    height: ${space.xl4};
  }
`
export const TopCalculatorPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  min-width: 6rem;

  @media (min-width: ${breakpoint.xl}) {
    display: none;
  }
`

export const StepsWrapper = styled.div`
  position: relative;
  width: calc(100% - 6rem);
`

export const TopCalculatorGradient = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: ${space.xl2};
  height: 100%;
  background: rgb(0, 38, 62);
  background: linear-gradient(90deg, rgba(0, 38, 62, 0) 0%, rgba(0, 38, 62, 0.55) 60%, rgba(0, 38, 62, 1) 100%);

  @media (min-width: ${breakpoint.xl}) {
    display: none;
  }
`

export const Steps = styled.nav`
  position: relative;
  display: flex;
  overflow-x: auto;
  align-items: center;
  justify-content: flex-start;
  padding-right: ${space.xl4};

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: ${breakpoint.xl}) {
    padding: 0 ${space.lg};
  }

  @media (min-width: ${breakpoint.hd}) {
    padding: 0 ${space.xl2};
  }
`

export const NextIcon = styled(NewIcon)`
  display: none;

  @media (min-width: ${breakpoint.xl}) {
    display: block;
    position: relative;
    left: -${space.md};
  }

  @media (min-width: ${breakpoint.hd}) {
    left: -${space.xl};
  }
`

export const Step = styled.button<StepStylesProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: ${space.xl4};
  padding-right: ${space.md};
  margin-right: ${space.md};
  background-color: transparent;
  color: ${color.text.inverse};
  font-size: ${font.size.root};
  background: none;
  border: 0;
  transition: opacity 0.4s ease;
  opacity: ${({ active, finished }) => !active && !finished && '0.5'};
  font-weight: ${({ active }) => (active ? font.weight.medium : font.weight.normal)};
  white-space: nowrap;

  &:hover {
    opacity: 1;
  }

  @media (min-width: ${breakpoint.hd}) {
    padding-right: ${space.xl};
    margin-right: ${space.xl};
  }
`

export const StepNumber = styled.span<StepStylesProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    margin-right: ${space.xs2};

    ${({ finished }) =>
      finished
        ? css`
            content: '';
          `
        : css`
            content: '.';
          `};

    @media (min-width: ${breakpoint.xl}) {
      display: none;
    }
  }

  @media (min-width: ${breakpoint.xl}) {
    min-width: 1.8rem;
    min-height: 1.8rem;
    margin-right: ${space.md};
    border-radius: ${borders.radius.circle};
    border-width: ${borders.sizes.md};
    border-style: solid;
    border-color: ${({ active, finished }) => (active || finished ? color.primary.pure : color.grayscale.white)};
    background-color: ${({ active, finished }) => (active && !finished ? color.primary.pure : 'transparent')};
    font-family: ${font.family.heading};
    font-size: ${font.size.small};
    font-weight: ${font.weight.bold};
    line-height: ${font.lineHeight.sm};
  }
`

export const Body = styled.div`
  padding: ${space.md} ${space.xs} ${space.xl3};
  min-height: ${space.xl4};

  @media (min-width: ${breakpoint.lg}) {
    padding: ${space.md} ${space.xl} ${space.xl5};
  }
`

export const Block = styled.div`
  padding-top: ${space.xl};
  padding-left: ${space.xs};
  padding-right: ${space.xs};

  &:not(:last-of-type) {
    padding-bottom: ${space.xl3};
    border-bottom: ${borders.sizes.md} dashed ${color.grayscale.light};
  }

  @media (min-width: ${breakpoint.lg}) {
    padding-top: ${space.xl3};
    padding-left: ${space.lg};
    padding-right: ${space.lg};
  }
`

export const Option = styled.div<{ direction?: string; isFull?: boolean }>`
  display: flex;
  flex-direction: ${(p) => p.direction ?? 'row'};
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: ${(p) => (p.isFull ? 'nowrap' : 'wrap')};
  gap: ${space.md};
`

export const Hint = styled.sup`
  margin-left: ${space.xs2};
  cursor: help;
`

export const Divider = styled.span`
  min-width: ${space.xl};
  color: ${color.text.normal};
  font-size: ${font.size.small};
  font-weight: ${font.weight.medium};
  align-self: center;
`

export const OpenCalculator = styled.button<{ open: boolean }>`
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  border: 0;
  background-color: transparent;

  svg {
    &:last-of-type {
      position: absolute;
      top: 50%;
      left: 50%;

      ${(p) =>
        p.open
          ? css`
              /* transform-origin: top left; */
              transform: translate(-50%, -50%) rotate(180deg);
            `
          : css`
              transform: translate(-50%, -50%);
            `}
    }
  }
`
