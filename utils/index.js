export { default as analytics } from './analytics'
export { instance as api, customInstance as customApi } from './api'
export { staticApi, customStaticApi } from './staticApi'
export { default as browserDetection } from './browserDetection'
export { default as useDebounce } from './useDebounce'
export { default as useWindowSize } from './useWindowSize'
export { default as formatDate } from './formatDate'
export { default as formatEmail } from './formatEmail'
export { format } from './format'
export { default as generateRequestBody } from './generateRequestBody'
export { default as parseSearchProducts } from './parseSearchProducts'
export { default as mergeDeep } from './mergeDeep'
export { default as formatPhoneNumber } from './formatPhoneNumber'
export { default as cloudFront } from './cloudFront'
export { renderMerchantCenterBadge, setMerchantCenterBadge, removeMerchantCenterBadge } from './merchant-center-badge'
export {
  assertValidEmail,
  assertMatchFields,
  assertMinlength,
  assertMaxlength,
  assertRequiredField,
  assertStrongPassword,
  assertCpf,
  assertCnpj
} from './asserts'

export { default as uniqBy } from './uniqBy'
export { default as uniq } from './uniq'
export { default as removeNode } from './removeNode'

export {
  getSelection,
  nUpdateProductInfo,
  nUpdateCurrentSelection,
  isPartComplete,
  isSelectionComplete,
  nUpdateSelection,
  applyDenyRulesParts
} from './settings'

export { useScript, useStyle, useOnClickOutside, useLockBodyScroll } from './customHooks'
