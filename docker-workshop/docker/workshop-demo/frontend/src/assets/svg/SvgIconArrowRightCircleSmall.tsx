import { FunctionComponent } from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  display: block;
`

export const SvgIconArrowRightCircleSmall: FunctionComponent = () => {
  return (
    <Svg width="44" height="45" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m26 31.63 8-9-8-9"
        stroke="#1C282E"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M9 22.63h25" stroke="#1C282E" strokeWidth="2" />
      <rect
        x="1"
        y="1.63"
        width="42"
        height="42"
        rx="21"
        stroke="#1C282E"
        strokeWidth="2"
      />
    </Svg>
  )
}
