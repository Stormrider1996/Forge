import { breakpoints } from '@variables'
import styled, { css } from 'styled-components'

interface Props {
  gridColumnDesktop?: string
  gridColumnLaptop?: string
  gridColumnMobile?: string
  gridColumnTablet?: string
  gridRowDesktop?: string
  gridRowLaptop?: string
  gridRowMobile?: string
  gridRowTablet?: string
  spaceBottomDesktop?: string
  spaceBottomLaptop?: string
  spaceBottomMobile?: string
  spaceBottomTablet?: string
  spaceTopDesktop?: string
  spaceTopLaptop?: string
  spaceTopMobile?: string
  spaceTopTablet?: string
  position?: string
}

export const Column = styled.div<Props>`
  --grid-column-desktop: ${(props) => {
    return props.gridColumnDesktop || props.gridColumnLaptop
  }};
  --grid-column-laptop: ${(props) => {
    return props.gridColumnLaptop || props.gridColumnTablet
  }};
  --grid-column-mobile: ${(props) => {
    return props.gridColumnMobile || '1/-1'
  }};
  --grid-column-tablet: ${(props) => {
    return props.gridColumnTablet || '1/-1'
  }};
  --grid-row-desktop: ${(props) => {
    return props.gridRowDesktop || props.gridRowLaptop
  }};
  --grid-row-laptop: ${(props) => {
    return props.gridRowLaptop || props.gridRowTablet
  }};
  --grid-row-mobile: ${(props) => {
    return props.gridRowMobile || 'auto'
  }};
  --grid-row-tablet: ${(props) => {
    return props.gridRowTablet || props.gridColumnMobile
  }};
  --position: ${(props) => props.position || 'unset'};
  --space-bottom-desktop: ${(props) => props.spaceBottomDesktop || 0};
  --space-bottom-laptop: ${(props) => props.spaceBottomLaptop || 0};
  --space-bottom-mobile: ${(props) => props.spaceBottomMobile || 0};
  --space-bottom-tablet: ${(props) => props.spaceBottomTablet || 0};

  --space-top-desktop: ${(props) => props.spaceTopDesktop || 0};
  --space-top-laptop: ${(props) => props.spaceTopLaptop || 0};
  --space-top-mobile: ${(props) => props.spaceTopMobile || 0};
  --space-top-tablet: ${(props) => props.spaceTopTablet || 0};

  grid-column: var(--grid-column-mobile);
  grid-row: var(--grid-row-mobile);
  margin-block-end: var(--space-bottom-mobile);
  margin-block-start: var(--space-top-mobile);
  position: var(--position);

  @media (min-width: ${breakpoints.tablet}) {
    ${(props) =>
      props.gridColumnTablet &&
      css`
        grid-column: var(--grid-column-tablet);
      `}

    ${(props) =>
      props.gridRowTablet &&
      css`
        grid-row: var(--grid-row-tablet);
      `}

    ${(props) =>
      props.spaceBottomTablet &&
      css`
        margin-block-end: var(--space-bottom-tablet);
      `}

    ${(props) =>
      props.spaceTopTablet &&
      css`
        margin-block-start: var(--space-top-tablet);
      `}
  }

  @media (min-width: ${breakpoints.laptop}) {
    ${(props) =>
      props.gridColumnLaptop &&
      css`
        grid-column: var(--grid-column-laptop);
      `}

    ${(props) =>
      props.gridRowLaptop &&
      css`
        grid-row: var(--grid-row-laptop);
      `}

    ${(props) =>
      props.spaceBottomLaptop &&
      css`
        margin-block-end: var(--space-bottom-laptop);
      `}

    ${(props) =>
      props.spaceTopLaptop &&
      css`
        margin-block-start: var(--space-top-laptop);
      `}
  }

  @media (min-width: ${breakpoints.desktop}) {
    ${(props) =>
      props.gridColumnDesktop &&
      css`
        grid-column: var(--grid-column-desktop);
      `}

    ${(props) =>
      props.gridRowDesktop &&
      css`
        grid-row: var(--grid-row-desktop);
      `}

    ${(props) =>
      props.spaceBottomDesktop &&
      css`
        margin-block-end: var(--space-bottom-desktop);
      `}

    ${(props) =>
      props.spaceTopDesktop &&
      css`
        margin-block-start: var(--space-top-desktop);
      `}
  }
`
