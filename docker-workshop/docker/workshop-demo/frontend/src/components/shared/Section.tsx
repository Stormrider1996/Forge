import { SectionComponentProps } from '@interface'
import { breakpoints, colors, spacing } from '@variables'
import styled, { css } from 'styled-components'

export const Section = styled.section<SectionComponentProps>`
  --background-color: ${(props) => props.backgroundColor || 'none'};
  --background-image: ${(props) => `url(${props.backgroundImage})` || 'none'};
  --background-position: ${(props) => props.backgroundPosition || 'auto'};
  --min-height: ${(props) => props.minHeight || 'auto'};

  --padding-bottom-desktop: ${(props) =>
    props.paddingBottomDesktop || spacing.space05};
  --padding-bottom-laptop: ${(props) =>
    props.paddingBottomLaptop || spacing.space04};
  --padding-bottom-mobile: ${(props) =>
    props.paddingBottomMobile || spacing.space03};
  --padding-bottom-tablet: ${(props) =>
    props.paddingBottomTablet || spacing.space03};

  --padding-inline-laptop: ${(props) =>
    props.paddingInlineLaptop || spacing.grid.wrapper};
  --padding-inline-mobile: ${(props) =>
    props.paddingInlineMobile || spacing.grid.wrapper};
  --padding-top-desktop: ${(props) =>
    props.paddingTopDesktop || spacing.space05};
  --padding-top-laptop: ${(props) => props.paddingTopLaptop || spacing.space04};
  --padding-top-mobile: ${(props) => props.paddingTopMobile || spacing.space03};
  --padding-top-tablet: ${(props) => props.paddingTopTablet || spacing.space03};

  --text-color: ${(props) => props.textColor || colors.text.dark};

  ${(props) =>
    props.backgroundImage &&
    css`
      background-image: var(--background-image);
      background-position: var(--background-position);
      background-size: cover;
    `}

  background-color: var(--background-color);
  color: var(--text-color);
  min-height: var(--min-height);
  padding-block-end: var(--padding-bottom-mobile);
  padding-block-start: var(--padding-top-mobile);
  padding-inline: var(--padding-inline-mobile);

  @media (min-width: ${breakpoints.tablet}) {
    padding-block-end: var(--padding-bottom-tablet);
    padding-block-start: var(--padding-top-tablet);
  }

  @media (min-width: ${breakpoints.laptop}) {
    padding-block-end: var(--padding-bottom-laptop);
    padding-block-start: var(--padding-top-laptop);
    padding-inline: var(--padding-inline-laptop);
  }

  @media (min-width: ${breakpoints.desktop}) {
    padding-block-end: var(--padding-bottom-desktop);
    padding-block-start: var(--padding-top-desktop);
  }
`
