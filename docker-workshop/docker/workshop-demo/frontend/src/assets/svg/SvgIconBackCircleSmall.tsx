import { SvgProps } from '@interface'
import { FunctionComponent } from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  display: block;
`

export const SvgIconBackCircleSmall: FunctionComponent<SvgProps> = () => {
  return (
    <Svg width="40" height="41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m23.5 13.13-7 7 7 7"
        stroke="#1C282E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="1"
        y="1.13"
        width="38"
        height="38"
        rx="19"
        stroke="#1C282E"
        strokeWidth="2"
      />
    </Svg>
  )
}
