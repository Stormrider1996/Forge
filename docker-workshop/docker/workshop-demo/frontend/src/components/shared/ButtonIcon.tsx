import { Children } from '@interface'
import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface Props {
  children: Children
  href?: string
  onClick?: () => void
}
// nosemgrep
const PDLink = styled.div`
  cursor: pointer;

  img,
  svg {
    display: inline-block;
  }
`

const PDButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
`

export const ButtonIcon: FunctionComponent<Props> = ({
  // nosemgrep
  children,
  href,
  onClick
}) => {
  if (href) {
    return (
      // nosemgrep
      <PDLink>
        {/* nosemgrep*/}
        <Link href={href}>
          <a>{children}</a>
        </Link>
      </PDLink>
    )
  }

  return <PDButton onClick={onClick}>{children}</PDButton>
}
