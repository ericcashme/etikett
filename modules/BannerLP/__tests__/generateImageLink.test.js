import { cloudFront } from 'utils'

import generateImageLink from '../generateImageLink'

const inputs = require('./inputs.json')
const {
  fullPath,
  onlyMobilePathV1,
  onlyTabletPathV1,
  onlyDesktopPathV1,
  onlyMobilePathV2,
  onlyTabletPathV2,
  onlyDesktopPathV2,
} = inputs

const fileServer = cloudFront
const sizes = { mobile: 500, tablet: 900, desktop: 1150 }

describe('Get banner image link', () => {
  it('With incorrect path', () => {
    expect(generateImageLink(null, 960)).toEqual(null)
    expect(generateImageLink(undefined, 960)).toEqual(null)
    expect(generateImageLink(2, 960)).toEqual(null)
    expect(generateImageLink('', 960)).toEqual(null)
    expect(generateImageLink([], 960)).toEqual(null)
    expect(generateImageLink([2, 'teste'], 960)).toEqual(null)
    expect(generateImageLink({}, 960)).toEqual('')
  })

  it('With incorrect window width', () => {
    expect(generateImageLink(fullPath, null)).toEqual(null)
    expect(generateImageLink(fullPath, undefined)).toEqual(null)
    expect(generateImageLink(fullPath, '')).toEqual(null)
    expect(generateImageLink(fullPath, [])).toEqual(null)
    expect(generateImageLink(fullPath, {})).toEqual(null)
    expect(generateImageLink(fullPath, [2, 'teste'])).toEqual(null)
  })

  it('With correct values but without path of desktop', () => {
    expect(generateImageLink(onlyMobilePathV1, sizes.mobile)).toEqual(`${fileServer}mobile_path`)
    expect(generateImageLink(onlyMobilePathV1, sizes.tablet)).toEqual('')
    expect(generateImageLink(onlyMobilePathV1, sizes.desktop)).toEqual('')

    expect(generateImageLink(onlyTabletPathV1, sizes.mobile)).toEqual(`${fileServer}tablet_path`)
    expect(generateImageLink(onlyTabletPathV1, sizes.tablet)).toEqual(`${fileServer}tablet_path`)
    expect(generateImageLink(onlyTabletPathV1, sizes.desktop)).toEqual('')

    expect(generateImageLink(onlyMobilePathV2, sizes.mobile)).toEqual(`${fileServer}mobile_path`)
    expect(generateImageLink(onlyMobilePathV2, sizes.tablet)).toEqual('')
    expect(generateImageLink(onlyMobilePathV2, sizes.desktop)).toEqual('')

    expect(generateImageLink(onlyTabletPathV2, sizes.mobile)).toEqual(`${fileServer}tablet_path`)
    expect(generateImageLink(onlyTabletPathV2, sizes.tablet)).toEqual(`${fileServer}tablet_path`)
    expect(generateImageLink(onlyTabletPathV2, sizes.desktop)).toEqual('')
  })

  it('With correct values', () => {
    expect(generateImageLink(fullPath, sizes.mobile)).toEqual(`${fileServer}mobile_path`)
    expect(generateImageLink(fullPath, sizes.tablet)).toEqual(`${fileServer}tablet_path`)
    expect(generateImageLink(fullPath, sizes.desktop)).toEqual(`${fileServer}desktop_path`)

    expect(generateImageLink(onlyDesktopPathV1, sizes.mobile)).toEqual(`${fileServer}desktop_path`)
    expect(generateImageLink(onlyDesktopPathV1, sizes.tablet)).toEqual(`${fileServer}desktop_path`)
    expect(generateImageLink(onlyDesktopPathV1, sizes.desktop)).toEqual(`${fileServer}desktop_path`)

    expect(generateImageLink(onlyDesktopPathV2, sizes.mobile)).toEqual(`${fileServer}desktop_path`)
    expect(generateImageLink(onlyDesktopPathV2, sizes.tablet)).toEqual(`${fileServer}desktop_path`)
    expect(generateImageLink(onlyDesktopPathV2, sizes.desktop)).toEqual(`${fileServer}desktop_path`)
  })
})
