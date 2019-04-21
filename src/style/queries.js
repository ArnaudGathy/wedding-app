import {css} from 'styled-components'

export const mediaSizes = {
  desktop: 1024 + 64 - 1,
  tablet: 769 + 64 - 1,
  phone: 500 + 64 - 1,
}

export const media = Object.keys(mediaSizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${mediaSizes[label]}px) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})