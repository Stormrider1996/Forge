import { Children } from '@interface'
import { colors, transitions } from '@variables'
import NextLink, { LinkProps } from 'next/link'
import { FunctionComponent } from 'react'
import styled from 'styled-components'

interface ChildProps {
  fontWeight?: number
  textColor?: string
  textColorHover?: string
}

interface Props extends LinkProps {
  children: Children
  fontWeight?: number
  href: string
  textColor?: string
  textColorHover?: string
}
// nosemgrep
const LinkWrapper = styled.div<ChildProps>`
  --animation-transition: ${transitions.s03};
  --font-weight: ${(props) => props.fontWeight || 400};
  --text-color: ${(props) => props.textColor || colors.text.dark};
  --text-color-hover: ${(props) => props.textColorHover || colors.primary.x500};

  a {
    color: var(--text-color);
    cursor: pointer;
    font-weight: var(--font-weight);
    text-decoration: none;
    transition: color var(--animation-transition);

    &:hover {
      background-size: var(--background-size-hover);
      color: var(--text-color-hover);
    }
  }
`

export const Link: FunctionComponent<Props> = ({
  // nosemgrep
  children,
  fontWeight,
  href,
  textColor,
  textColorHover
}) => {
  if (href.match('^(http|https)://')) {
    return (
      <LinkWrapper
        fontWeight={fontWeight}
        textColor={textColor}
        textColorHover={textColorHover}
      >
        {/* nosemgrep*/}
        <a href={href} target="_blank" rel="noopener nofollow noreferrer">
          {children}
        </a>
      </LinkWrapper>
    )
  }

  return (
    <LinkWrapper
      fontWeight={fontWeight}
      textColor={textColor}
      textColorHover={textColorHover}
    >
      {/* nosemgrep*/}
      <NextLink href={href}>{children}</NextLink>
    </LinkWrapper>
  )
}
