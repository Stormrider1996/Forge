import { SvgProps } from '@interface'
import { FunctionComponent } from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  display: block;
`

export const SvgIconCheckmarkFull: FunctionComponent<SvgProps> = () => {
  return (
    <Svg width="90" height="90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="m36 46 7 6 11-14" stroke="#01F48B" strokeWidth="2" />
      <rect
        x="1"
        y="1"
        width="88"
        height="88"
        rx="44"
        stroke="#1C282E"
        strokeWidth="2"
      />
    </Svg>
  )
}
