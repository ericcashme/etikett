import { DynamicKeys } from 'types'
import { tokens } from '../theme'
const { font, breakpoint } = tokens

export const getSize: DynamicKeys = {
  xs: `
    font-size: ${font.size.xxsmall};
    line-height: ${font.lineHeight.lg};

    @media (min-width: ${breakpoint.lg}) {
      
      font-size: ${font.size.xsmall};
    }
  `,
  sm: `
    font-size: ${font.size.xsmall};
    line-height: ${font.lineHeight.lg};

    @media (min-width: ${breakpoint.lg}) {
      font-size: ${font.size.small};
    }
  `,
  md: `
    font-size: ${font.size.small};
    line-height: ${font.lineHeight.lg};

    @media (min-width: ${breakpoint.lg}) {
      font-size: ${font.size.root};
    }
  `,
  lg: `
    font-size: ${font.size.root};
    line-height: ${font.lineHeight.sm};

    @media (min-width: ${breakpoint.lg}) {
      font-size: ${font.size.h6};
    }
  `,
  xlg: `
    font-size: ${font.size.h6};
    line-height: ${font.lineHeight.sm};

    @media (min-width: ${breakpoint.lg}) {
      font-size: ${font.size.h5};
    }
  `,
  xxlg: `
    font-size: ${font.size.h5};
    line-height: ${font.lineHeight.sm};

    @media (min-width: ${breakpoint.lg}) {
      font-size: ${font.size.h4};
    }
  `,
  h3: `
    font-size: ${font.size.h4};
    line-height: ${font.lineHeight.sm};

    @media (min-width: ${breakpoint.lg}) {
      font-size: ${font.size.h3};
    }
  `,
  h2: `
    font-size: ${font.size.h3};
    line-height: ${font.lineHeight.xs};

    @media (min-width: ${breakpoint.lg}) {
      font-size: ${font.size.h2};
    }
  `,
  h1: `
    font-size: ${font.size.h2};
    line-height: ${font.lineHeight.xs};

    @media (min-width: ${breakpoint.lg}) {
      font-size: ${font.size.h1};
    }
  `
}

export const getWeight: DynamicKeys = {
  normal: `
    font-weight: ${font.weight.normal};
  `,
  medium: `
    font-weight: ${font.weight.medium};
  `,
  bold: `
    font-weight: ${font.weight.bold};
  `
}

export const getTransform: DynamicKeys = {
  none: '',
  capitalize: `
    text-transform: capitalize;
  `,
  lowercase: `
    text-transform: lowercase;
  `,
  uppercase: `
    text-transform: uppercase;
  `
}
