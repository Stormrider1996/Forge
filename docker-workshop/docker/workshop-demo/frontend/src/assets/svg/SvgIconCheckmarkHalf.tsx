import { SvgProps } from '@interface'
import { FunctionComponent } from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  display: block;
`

export const SvgIconCheckmarkHalf: FunctionComponent<SvgProps> = () => {
  return (
    <Svg width="92" height="95" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="m37 49 7 6 11-14" stroke="#1C282E" strokeWidth="2" />
      <circle cx="46" cy="48.154" r="45" stroke="#1AF597" strokeWidth="2" />
      <path
        d="M46 93.094c-24.853 0-45-20.147-45-45s20.147-45 45-45"
        stroke="#1C282E"
        strokeWidth="2"
      />
      <path
        d="M43.333 3.094a2.667 2.667 0 1 0 5.334 0 2.667 2.667 0 0 0-5.334 0ZM46 92.594c-24.577 0-44.5-19.924-44.5-44.5h-1c0 25.129 20.371 45.5 45.5 45.5v-1Zm-44.5-44.5c0-24.577 19.923-44.5 44.5-44.5v-1c-25.129 0-45.5 20.37-45.5 45.5h1Z"
        fill="#1C282E"
      />
    </Svg>
  )
}
