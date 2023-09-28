import { Icon } from '@components'
import { Children } from '@interface'
import { colors, spacing, transitions } from '@variables'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import styled from 'styled-components'

interface Props {
  color?: string
  children: Children
  href: string
}

export const Line = styled.div`
  background: ${colors.shades.light.x50};
  height: 2px;
  margin-block-start: ${spacing.baseSpacing};
  pointer-events: none;
  position: relative;
  transition: ${transitions.s03};
  width: 100%;

  &:after {
    background: ${colors.secondary.x400};
    content: '';
    height: 2px;
    left: 0;
    position: absolute;
    top: 0;
    transition: ${transitions.s06};
    width: 0;
  }
`

const IconWrapper = styled.div`
  transition: ${transitions.s03};
  transition-delay: ${transitions.s03};
`
// nosemgrep
const PDBlockLink = styled.div<Props>`
  --link-color: ${(props) => props.color || colors.secondary.x400};

  pointer-events: none;

  a {
    color: var(--link-color);
    pointer-events: auto;
  }
`
// nosemgrep
const LinkWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  &:hover {
    ${IconWrapper} {
      transform: translateX(${spacing.spaceExtraSmall});
    }

    & + ${Line} {
      &:after {
        width: 100%;
      }
    }
  }
`

export const BlockLink: FunctionComponent<Props> = ({
  children,
  color,
  href
}) => {
  return (
    // nosemgrep
    <PDBlockLink href={href} color={color}>
      {/* nosemgrep*/}
      <LinkWrapper>
        {/* nosemgrep*/}
        <Link href={href}>{children}</Link> {/* nosemgrep*/}
        <IconWrapper>
          <Icon iconName="icon-arrow-right" />
        </IconWrapper>
      </LinkWrapper>
      <Line />
    </PDBlockLink>
  )
}
