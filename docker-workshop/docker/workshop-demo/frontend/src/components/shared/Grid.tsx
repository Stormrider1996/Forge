import { breakpoints, spacing } from '@variables'
import styled, { css } from 'styled-components'

interface Props {
  backgroundColor?: string
  gridTemplateColumnsDesktop?: string
  gridTemplateColumnsLaptop?: string
  gridTemplateColumnsMobile?: string
  gridTemplateColumnsTablet?: string
  paddingBlock?: string
  paddingInline?: string
  spaceBottomDesktop?: string
  spaceBottomLaptop?: string
  spaceBottomMobile?: string
  spaceBottomTablet?: string
}

export const Grid = styled.div<Props>`
  --background-color: ${(props) => props.backgroundColor || 'none'};
  --grid-template-columns-desktop: ${(props) =>
    props.gridTemplateColumnsDesktop || 'repeat(12, 1fr)'};

  --grid-template-columns-laptop: ${(props) =>
    props.gridTemplateColumnsLaptop || 'repeat(12, 1fr)'};

  --grid-template-columns-mobile: ${(props) =>
    props.gridTemplateColumnsMobile || 'repeat(4, 1fr)'};

  --grid-template-columns-tablet: ${(props) =>
    props.gridTemplateColumnsTablet || 'repeat(4, 1fr)'};

  --padding-block: ${(props) => props.paddingBlock || 'none'};

  --padding-inline: ${(props) => props.paddingInline || 'none'};

  --space-bottom-desktop: ${(props) => props.spaceBottomDesktop || 0};

  --space-bottom-laptop: ${(props) => props.spaceBottomLaptop || 0};

  --space-bottom-mobile: ${(props) => props.spaceBottomMobile || 0};

  --space-bottom-tablet: ${(props) => props.spaceBottomTablet || 0};

  background-color: var(--background-color);
  column-gap: ${spacing.grid.gap};
  display: grid;
  grid-template-columns: var(--grid-template-columns-mobile);
  margin-block-end: var(--space-bottom-mobile);
  padding-block: var(--padding-block);
  padding-inline: var(--padding-inline);
  width: 100%;

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: var(--grid-template-columns-tablet);

    ${(props) =>
      props.spaceBottomTablet &&
      css`
        margin-block-end: var(--space-bottom-tablet);
      `}
  }

  @media (min-width: ${breakpoints.laptop}) {
    grid-template-columns: var(--grid-template-columns-laptop);

    ${(props) =>
      props.spaceBottomLaptop &&
      css`
        margin-block-end: var(--space-bottom-laptop);
      `}
  }

  @media (min-width: ${breakpoints.desktop}) {
    grid-template-columns: var(--grid-template-columns-desktop);

    ${(props) =>
      props.spaceBottomDesktop &&
      css`
        margin-block-end: var(--space-bottom-desktop);
      `}
  }
`
