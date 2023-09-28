import { colors, spacing } from '@variables'
import styled from 'styled-components'

interface Props {
  heavy?: boolean
  color?: string
  spaceBottom?: string
  gridColumn?: string
  spaceTop?: string
}

export const Hr = styled.div<Props>`
  --grid-column: ${(props) => props.gridColumn || '1/-1'};
  --line-color: ${(props) => props.color || colors.shades.light.x50};
  --line-height: ${(props) => (props.heavy ? '2px' : '1px')};
  --space-bottom: ${(props) => props.spaceBottom || spacing.baseSpacing};
  --space-top: ${(props) => props.spaceTop};

  border-bottom: var(--line-height) solid var(--line-color);
  grid-column: var(--grid-column);
  height: var(--line-height);
  margin-block-end: var(--space-bottom);
  margin-block-start: var(--space-top);
`
