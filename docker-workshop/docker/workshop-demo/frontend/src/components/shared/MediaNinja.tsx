import { breakpoints } from '@variables'
import styled from 'styled-components'

interface Props {
  showOnDesktop?: boolean
  showOnMobile?: boolean
  showOnTablet?: boolean
  showOnLaptop?: boolean
}

export const MediaNinja = styled.div<Props>`
  --visible-desktop: ${(props) => (props.showOnDesktop ? 'contents' : 'none')};
  --visible-laptop: ${(props) => (props.showOnLaptop ? 'contents' : 'none')};
  --visible-mobile: ${(props) => (props.showOnMobile ? 'contents' : 'none')};
  --visible-tablet: ${(props) => (props.showOnTablet ? 'contents' : 'none')};

  display: var(--visible-mobile);

  @media (min-width: ${breakpoints.tablet}) {
    display: var(--visible-tablet);
  }

  @media (min-width: ${breakpoints.laptop}) {
    display: var(--visible-laptop);
  }

  @media (min-width: ${breakpoints.desktop}) {
    display: var(--visible-desktop);
  }
`
