import { spacing } from '@variables'
import styled from 'styled-components'

interface Props {
  position?: string
  top?: string
}
// nosemgrep
export const SidebarMenu = styled.aside<Props>`
  --position: ${(props) => props.position || 'unset'};
  --top: ${(props) => props.top};

  display: flex;
  flex-direction: column;
  gap: ${spacing.space01};
  position: var(--position);
  top: var(--top);
`
