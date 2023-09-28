import { breakpoints, spacing } from '@variables'
import styled from 'styled-components'

interface Props {
  spaceBottom?: string
}

export const ControlGroup = styled.div<Props>`
  --space-bottom: ${(props) => props.spaceBottom || 0};

  display: flex;
  flex-direction: column;
  gap: ${spacing.baseSpacing};
  margin-block-end: ${spacing.space02};

  @media (min-width: ${breakpoints.laptop}) {
    margin-block-end: var(--space-bottom);
  }
`
