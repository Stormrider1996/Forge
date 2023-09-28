import { colors, spacing } from '@variables'
import styled from 'styled-components'

interface Props {
  bottomSpacing?: string
}

export const TearmsColorBlock = styled.div<Props>`
  background: ${colors.background.light};
  margin-block-end: ${(props) => props.bottomSpacing};
  padding: ${spacing.baseSpacing};
`
