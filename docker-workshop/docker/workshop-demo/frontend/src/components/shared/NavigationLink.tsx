import { Children } from '@interface'
import { SvgArrowRightBlue } from '@svg'
import { colors } from '@variables'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import styled from 'styled-components'

interface Props {
  color?: string
  children: Children
  href: string
}

// nosemgrep
const PDNavLink = styled.div<Props>`
  --link-color: ${(props) => props.color || colors.primary.x400};

  border-bottom: 2px solid #002bdc;
  display: inline-block;
  pointer-events: none;

  a {
    color: var(--link-color);
    margin-block-end: 1.125rem;
    pointer-events: auto;
  }
`
// nosemgrep
const LinkWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 1.688rem;
  justify-content: space-between;
`

export const NavigationLink: FunctionComponent<Props> = ({
  children,
  color,
  href
}) => {
  // nosemgrep
  return (
    // nosemgrep
    <PDNavLink href={href} color={color}>
      <LinkWrapper>
        {/* nosemgrep*/}
        <Link href={href}>{children}</Link>
        <SvgArrowRightBlue></SvgArrowRightBlue>
      </LinkWrapper>
    </PDNavLink>
  )
}
