import { colors, typography } from '@variables'
import styled from 'styled-components'

interface Props {
  active?: boolean
}

export const SidebarMenuItem = styled.div<Props>`
  --pointer-events: ${(props) => (props.active ? 'none' : 'default')};
  --text-color: ${(props) =>
    props.active ? colors.primary.x500 : colors.grayscale.x500};

  color: var(--text-color);
  cursor: pointer;
  font-size: ${typography.fontSize.inputText};
  pointer-events: var(--pointer-events);
`
