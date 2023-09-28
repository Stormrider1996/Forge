import { breakpoints } from '@variables'
import styled, { css } from 'styled-components'

interface Props {
  alignItems?: string
  borderBottom?: string
  elementHeight?: string
  flexDirection?: string
  flexWrap?: string
  gapDesktop?: string
  gapLaptop?: string
  gapMobile?: string
  gapTablet?: string
  justifyContent?: string
  spaceBottom?: string
  spaceBottomDesktop?: string
  spaceBottomLaptop?: string
  spaceBottomTablet?: string
  spaceTop?: string
  spaceTopDesktop?: string
  spaceTopLaptop?: string
  spaceTopTablet?: string
}

export const Flex = styled.div<Props>`
  --align-items: ${(props) => props.alignItems || 'unset'};
  --border-bottom: ${(props) => props.borderBottom};
  --flex-direction: ${(props) => props.flexDirection || 'unset'};
  --flex-wrap: ${(props) => props.flexWrap || 'wrap'};
  --gap-desktop: ${(props) => props.gapDesktop || '0'};
  --gap-laptop: ${(props) => props.gapLaptop || '0'};
  --gap-mobile: ${(props) => props.gapMobile || '0'};
  --gap-tablet: ${(props) => props.gapTablet || '0'};
  --height: ${(props) => props.elementHeight || 'unset'};
  --justify-content: ${(props) => props.justifyContent || 'unset'};
  --space-bottom: ${(props) => props.spaceBottom || 0};
  --space-bottom-desktop: ${(props) => props.spaceBottomDesktop || 0};
  --space-bottom-laptop: ${(props) => props.spaceBottomLaptop || 0};
  --space-bottom-tablet: ${(props) => props.spaceBottomTablet || 0};
  --space-top: ${(props) => props.spaceTop || 0};
  --space-top-desktop: ${(props) => props.spaceTopDesktop || 0};
  --space-top-laptop: ${(props) => props.spaceTopLaptop || 0};
  --space-top-tablet: ${(props) => props.spaceTopTablet || 0};

  align-items: var(--align-items);
  border: 0;
  border-bottom: var(--border-bottom);
  display: flex;
  flex-direction: var(--flex-direction);
  flex-wrap: var(--flex-wrap);
  gap: var(--gap-mobile);
  height: var(--height);
  justify-content: var(--justify-content);
  margin-block-end: var(--space-bottom);
  margin-block-start: var(--space-top);

  @media (min-width: ${breakpoints.tablet}) {
    ${(props) =>
      props.gapTablet &&
      css`
        gap: var(--gap-tablet);
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
      props.gapLaptop &&
      css`
        gap: var(--gap-laptop);
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
      props.gapDesktop &&
      css`
        gap: var(--gap-desktop);
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
