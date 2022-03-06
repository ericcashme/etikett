import { cloudFront } from 'utils'

const generateImageLink = (path, windowWidth) => {
  if (!path || typeof path === 'number' || Array.isArray(path)) {
    return null
  }

  if (typeof windowWidth !== 'number') {
    return null
  }

  const { mobile, tablet, desktop } = path

  let url = desktop

  if (tablet && windowWidth < 992) {
    url = tablet
  }

  if (mobile && windowWidth <= 600) {
    url = mobile
  }

  if (url) {
    return `${cloudFront}${url}`
  }

  return ''
}

export default generateImageLink
