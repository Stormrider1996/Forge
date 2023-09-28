import { colors, typography } from '@variables'
import styled from 'styled-components'

interface Props {
  fontSize?: string
  spaceBottom?: string
}

export const ErrorMessage = styled.div<Props>`
  --font-size: ${(props) => props.fontSize || typography.fontSize.inputLabel};
  --space-bottom: ${(props) => props.spaceBottom || 0};

  color: ${colors.error};
  font-size: var(--font-size);
  margin-block-end: var(--space-bottom);
`
