import { breakpoints, spacing, typography } from '@variables'
import styled, { css } from 'styled-components'

interface Props {
  color?: string
  fontFamily?: string
  fontSize?: string
  fontWeight?: number
  gridColumn?: string
  gridColumnMobile?: string
  spaceBottomDesktop?: string
  spaceBottomLaptop?: string
  spaceBottomMobile?: string
  spaceBottomTablet?: string
  textColor?: string
  hyphens?: boolean
}

const baseStyle = css<Props>`
  --font-family: ${(props) =>
    props.fontFamily || typography.fontFamily.heading};
  --font-weight: ${(props) => props.fontWeight || 400};
  --grid-column-desktop: ${(props) => {
    return props.gridColumn || '1 / -1'
  }};
  --grid-column-mobile: ${(props) => {
    return props.gridColumnMobile || '1 / -1'
  }};

  --hyphens: ${(props) => (props.hyphens ? 'auto' : 'none')};

  --space-bottom-desktop: ${(props) =>
    props.spaceBottomDesktop || spacing.space01};

  --space-bottom-laptop: ${(props) =>
    props.spaceBottomLaptop || spacing.space01};

  --space-bottom-mobile: ${(props) =>
    props.spaceBottomMobile || spacing.space01};

  --space-bottom-tablet: ${(props) =>
    props.spaceBottomTablet || spacing.space01};

  --text-color: ${(props) => props.textColor || 'inherit'};

  color: var(--text-color);
  font-family: var(--font-family);
  font-weight: var(--font-weight);
  grid-column: var(--grid-column-desktop);
  hyphens: var(--hyphens);
  line-height: ${typography.lineHeight.heading};
  margin-block-end: var(--space-bottom-mobile);

  @media (min-width: ${breakpoints.tablet}) {
    hyphens: none;

    ${(props) =>
      props.spaceBottomTablet &&
      css`
        margin-block-end: var(--space-bottom-tablet);
      `}
  }

  @media (min-width: ${breakpoints.laptop}) {
    ${(props) =>
      props.spaceBottomLaptop &&
      css`
        margin-block-end: var(--space-bottom-laptop);
      `}
  }

  @media (min-width: ${breakpoints.desktop}) {
    ${(props) =>
      props.spaceBottomDesktop &&
      css`
        margin-block-end: var(--space-bottom-desktop);
      `}
  }
`
// nosemgrep
export const H1 = styled.h1`
  --font-size: ${(props) => props.fontSize || typography.fontSize.heading01};

  ${baseStyle};
  font-size: var(--font-size);
`
// nosemgrep
export const H2 = styled.h2`
  --font-size: ${(props) => props.fontSize || typography.fontSize.heading02};

  ${baseStyle};
  font-size: var(--font-size);
`
// nosemgrep
export const H3 = styled.h3`
  --font-size: ${(props) => props.fontSize || typography.fontSize.heading03};

  ${baseStyle};
  font-size: var(--font-size);
`
// nosemgrep
export const H4 = styled.h4`
  --font-size: ${(props) => props.fontSize || typography.fontSize.heading04};

  ${baseStyle};
  font-size: var(--font-size);
`
// nosemgrep
export const H5 = styled.h5`
  --font-size: ${(props) => props.fontSize || typography.fontSize.heading05};

  ${baseStyle};
  font-size: var(--font-size);
`
// nosemgrep
export const H6 = styled.h6`
  --font-size: ${(props) => props.fontSize || typography.fontSize.heading06};

  ${baseStyle};
  font-size: var(--font-size);
`
