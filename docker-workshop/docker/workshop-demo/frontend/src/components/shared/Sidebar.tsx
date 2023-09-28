import { breakpoints, colors, spacing } from '@variables'
import styled from 'styled-components'

interface Props {
  paddingTopDesktop?: string
  paddingBottomDesktop?: string
}

export const Sidebar = styled.aside<Props>`
  --padding-bottom-desktop: ${(props) => props.paddingTopDesktop || 0};
  --padding-top-desktop: ${(props) => props.paddingTopDesktop || 0};

  height: 100%;

  @media (min-width: ${breakpoints.laptop}) {
    border-right: 1px solid ${colors.shades.medium.x500};
    padding-block-end: var(--padding-bottom-desktop);
    padding-block-start: var(--padding-top-desktop);
    padding-inline-end: ${spacing.grid.gap};
  }
`
