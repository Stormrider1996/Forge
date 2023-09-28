const baseScale = 1.5
const baseSpacing = '27px'

const space = {
  baseSpace01: '40px',
  baseSpace02: '61px',
  baseSpace03: '91px',
  baseSpace04: '137px',
  baseSpace05: '205px',
  baseSpaceSmall: '13px',
  baseSpaceExtraSmall: '7px'
}

export const spacing = {
  baseSpacing,

  grid: {
    wrapper: '5%',
    gap: space.baseSpace01
  },

  space01: `calc(${baseSpacing} * ${baseScale})`, // 40px
  space02: `calc(${space.baseSpace01} * ${baseScale})`, // 61px
  space03: `calc(${space.baseSpace02} * ${baseScale})`, // 91px
  space04: `calc(${space.baseSpace03} * ${baseScale})`, // 137px
  space05: `calc(${space.baseSpace04} * ${baseScale})`, // 205px
  spaceSmall: `calc(${space.baseSpaceSmall} / ${baseScale})`, // 13px
  spaceExtraSmall: `calc(${space.baseSpaceExtraSmall} / ${baseScale})` // 7px
}
