import { SvgProps } from '@interface'
import { colors } from '@variables'
import { FunctionComponent } from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  display: block;
`

export const SvgIconBackCircle: FunctionComponent<SvgProps> = ({ fill }) => {
  const pathFill = fill || colors.grayscale.x500

  return (
    <Svg
      width="100"
      height="101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m53.5 43.29-7 7 7 7"
        stroke={pathFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="1"
        y="1.29"
        width="98"
        height="98"
        rx="49"
        stroke={pathFill}
        strokeWidth="2"
      />
    </Svg>
  )
}
