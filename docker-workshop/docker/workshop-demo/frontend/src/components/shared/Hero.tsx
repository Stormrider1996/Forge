import { MediaNinja } from '@components'
import { Children } from '@interface'
import { breakpoints, spacing } from '@variables'
import { FunctionComponent } from 'react'
import styled, { css } from 'styled-components'

interface Props {
  backgroundColor?: string
  backgroundImageLaptop?: string
  backgroundImageMobile?: string
  children: Children
  gridColumnDesktop?: string
  gridColumnLaptop?: string
  gridColumnMobile?: string
  gridColumnTablet?: string
  isFullHeight?: boolean
  visualsDesktop?: Children
  visualsMobile?: Children
}

interface WrapperProps {
  backgroundColor?: string
  backgroundImage?: string
  isFullHeight?: boolean
  gridColumnDesktop?: string
  gridColumnLaptop?: string
  gridColumnMobile?: string
  gridColumnTablet?: string
  backgroundImageLaptop?: string
  backgroundImageMobile?: string
}

const PDHero = styled.section<WrapperProps>`
  --background-color: ${(props) => props.backgroundColor || 'none'};
  --background-image-laptop: ${(props) =>
    `url(${props.backgroundImageLaptop})` || 'none'};
  --background-image-mobile: ${(props) =>
    `url(${props.backgroundImageMobile})` || 'none'};
  --min-height: ${(props) => (props.isFullHeight ? '100vh' : 'unset')};

  ${(props) =>
    props.backgroundImageMobile &&
    css`
      background-image: var(--background-image--mobile);
      background-size: cover;
    `}

  background-color: var(--background-color);
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  justify-content: start;
  min-height: var(--height);

  @media (min-width: ${breakpoints.laptop}) {
    ${(props) =>
      props.backgroundImageLaptop &&
      css`
        background-image: var(--background-image-laptop);
        background-size: cover;
      `}
  }
`

const ContentGrid = styled.div`
  display: grid;
  grid-column: 1/-1;
  grid-row: 2;
  grid-template-columns: repeat(4, 1fr);
  height: 100%;
  padding-inline: ${spacing.grid.wrapper};
  z-index: 3;

  @media (min-width: ${breakpoints.laptop}) {
    grid-template-columns: repeat(12, 1fr);
    max-height: 100vh;
    grid-row: 1;
  }
`
const Visuals = styled.div`
  display: grid;
  grid-column: 1/13;
  grid-row: 1;
  z-index: 2;

  img {
    display: inline-block;
  }

  @media (min-width: ${breakpoints.laptop}) {
    grid-row: 1;
    align-items: baseline;
  }
`

const Content = styled.div<Props>`
  --grid-column-desktop: ${(props) =>
    props.gridColumnDesktop ? props.gridColumnDesktop : '1/-1'};
  --grid-column-laptop: ${(props) =>
    props.gridColumnLaptop ? props.gridColumnLaptop : '1/-1'};
  --grid-column-mobile: ${(props) =>
    props.gridColumnMobile ? props.gridColumnMobile : '1/-1'};
  --grid-column-tablet: ${(props) =>
    props.gridColumnTablet ? props.gridColumnTablet : '1/-1'};

  grid-column: var(--grid-column-mobile);
  padding-block: ${spacing.space03};

  @media (min-width: ${breakpoints.tablet}) {
    padding-block: ${spacing.space03};
    grid-row: 1;

    ${(props) =>
      props.gridColumnTablet &&
      css`
        grid-column: var(--grid-column-tablet);
      `}
  }

  @media (min-width: ${breakpoints.laptop}) {
    padding-block: ${spacing.space03};
    grid-row: 1;

    ${(props) =>
      props.gridColumnLaptop &&
      css`
        grid-column: var(--grid-column-laptop);
      `}
  }

  @media (min-width: ${breakpoints.desktop}) {
    padding-block: ${spacing.space05};

    ${(props) =>
      props.gridColumnDesktop &&
      css`
        grid-column: var(--grid-column-desktop);
      `}
  }
`

export const Hero: FunctionComponent<Props> = ({
  backgroundColor,
  backgroundImageLaptop,
  backgroundImageMobile,
  children,
  gridColumnDesktop,
  gridColumnLaptop,
  gridColumnMobile,
  gridColumnTablet,
  isFullHeight,
  visualsDesktop,
  visualsMobile
}) => {
  return (
    <PDHero
      backgroundColor={backgroundColor}
      backgroundImageLaptop={backgroundImageLaptop}
      backgroundImageMobile={backgroundImageMobile}
      isFullHeight={isFullHeight}
    >
      <ContentGrid>
        <Content
          gridColumnDesktop={gridColumnDesktop}
          gridColumnLaptop={gridColumnLaptop}
          gridColumnMobile={gridColumnMobile}
          gridColumnTablet={gridColumnTablet}
        >
          {children}
        </Content>
      </ContentGrid>

      <Visuals>
        <MediaNinja showOnDesktop showOnLaptop>
          {visualsDesktop}
        </MediaNinja>

        <MediaNinja showOnMobile showOnTablet>
          {visualsMobile}
        </MediaNinja>
      </Visuals>
    </PDHero>
  )
}
