import { breakpoints, spacing, typography } from '@variables'
import styled, { css } from 'styled-components'

interface Props {
  gridColumn?: string
  gridColumnMobile?: string
  textColor?: string
  fontSize?: string
  spaceBottomDesktop?: string
  spaceBottomLaptop?: string
  spaceBottomMobile?: string
  spaceBottomTablet?: string
}

export const Paragraph = styled.p<Props>`
  --font-size: ${(props) => props.fontSize || typography.fontSize.text};

  --grid-column-desktop: ${(props) => {
    return props.gridColumn || '1 / -1'
  }};

  --grid-column-mobile: ${(props) => {
    return props.gridColumnMobile || '1 / -1'
  }};

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
  font-family: ${typography.fontFamily.text};
  font-size: var(--font-size);
  grid-column: var(--grid-column-desktop);
  line-height: ${typography.lineHeight.text};
  margin-block-end: var(--space-bottom-mobile);

  @media (min-width: ${breakpoints.tablet}) {
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
