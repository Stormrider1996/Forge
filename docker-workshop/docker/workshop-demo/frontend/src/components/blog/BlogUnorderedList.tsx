import { Children } from '@interface'
import { spacing } from '@variables'
import { FunctionComponent } from 'react'
import styled from 'styled-components'

interface Props {
  children: Children
  spaceBottom?: string
  paddingLeft?: string
}

const PDBlogUnorderedList = styled.ul<Props>`
  --margin-bottom: ${(props) => props.spaceBottom || spacing.baseSpacing};
  --padding-left: ${(props) => props.paddingLeft || '3rem'};

  margin-block-end: var(--margin-bottom);
  padding-inline-start: var(--padding-left);
`

export const BlogUnorderedList: FunctionComponent<Props> = ({
  children,
  spaceBottom,
  paddingLeft
}) => {
  return (
    <div>
      <PDBlogUnorderedList spaceBottom={spaceBottom} paddingLeft={paddingLeft}>
        {children}
      </PDBlogUnorderedList>
    </div>
  )
}
