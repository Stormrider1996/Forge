import { spacing, typography } from '@variables'
import styled from 'styled-components'

interface Props {
  fontFamily?: string
  fontSize?: string
  fontWeight?: string
  lineHeight?: string
  spaceBottom?: string
  spaceTop?: string
  textColor?: string
}

export const PlainText = styled.div<Props>`
  --font-family: ${(props) => props.fontFamily || typography.fontFamily.text};
  --font-size: ${(props) => props.fontSize || typography.fontSize.text};
  --font-weight: ${(props) => props.fontWeight || 400};
  --line-height: ${(props) => props.lineHeight || typography.lineHeight.text};
  --space-bottom: ${(props) => props.spaceBottom || spacing.baseSpacing};
  --space-top: ${(props) => props.spaceTop || '0'};
  --text-color: ${(props) => props.textColor || 'inherit'};

  color: var(--text-color);
  font-family: var(--font-family);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  grid-column: var(--grid-column-desktop);
  line-height: var(--line-height);
  margin-block-end: var(--space-bottom);
  margin-block-start: var(--space-top);
`
