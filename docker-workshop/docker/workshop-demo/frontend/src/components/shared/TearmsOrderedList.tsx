import styled from 'styled-components'

interface Props {
  bottomSpacing?: string
}

export const TearmsOrderedList = styled.ol<Props>`
  margin-block-end: ${(props) => props.bottomSpacing};
  padding-left: 2rem;
`
