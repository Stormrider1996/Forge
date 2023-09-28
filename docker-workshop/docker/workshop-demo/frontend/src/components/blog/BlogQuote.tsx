import { H6 } from '@components'
import { colors, spacing } from '@variables'
import { FunctionComponent } from 'react'
import styled from 'styled-components'

interface Props {
  text: string
}

export const PDBlogQuote = styled.div`
  border-left: 0.125rem solid ${colors.grayscale.x500};
  display: flex;
  margin-block-end: ${spacing.space02};
  padding-inline-start: ${spacing.space02};
`

export const BlogQuote: FunctionComponent<Props> = ({ text }) => {
  return (
    <PDBlogQuote>
      <H6 spaceBottomMobile="0">{text}</H6>
    </PDBlogQuote>
  )
}
