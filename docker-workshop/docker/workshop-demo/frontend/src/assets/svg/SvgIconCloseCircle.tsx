import { SvgProps } from '@interface'
import { FunctionComponent } from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  display: inline-block;
`

export const SvgIconCloseCircle: FunctionComponent<SvgProps> = () => {
  return (
    <Svg
      width="40"
      height="41"
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M27 27.165L13 13.165" stroke="#0027C6" strokeWidth="2" />
      <path d="M13 27.165L27 13.165" stroke="#1C282E" strokeWidth="2" />
      <rect
        x="0.5"
        y="0.665039"
        width="39"
        height="39"
        rx="19.5"
        stroke="#1C282E"
      />
    </Svg>
  )
}
