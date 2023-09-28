import { SvgProps } from '@interface'
import { FunctionComponent } from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  display: block;
`

export const SvgIconCheckmarkFullSmall: FunctionComponent<SvgProps> = () => {
  return (
    <Svg width="60" height="61" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="m21 31.125 7 6 11-14" stroke="#01F48B" strokeWidth="2" />
      <rect
        x="11"
        y="11.125"
        width="38"
        height="38"
        rx="19"
        stroke="#1C282E"
        strokeWidth="2"
      />
    </Svg>
  )
}
