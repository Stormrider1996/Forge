import { SvgProps } from '@interface'
import { colors } from '@variables'
import { FunctionComponent } from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  display: inline-block;
`

export const SvgIconCloseCircleLarge: FunctionComponent<SvgProps> = ({
  fill
}) => {
  const pathFill = fill || colors.grayscale.x400

  return (
    <Svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M37.0718 37.0708L22.9297 22.9287"
        stroke={pathFill}
        strokeWidth="2"
      />
      <path
        d="M22.9297 37.0708L37.0718 22.9287"
        stroke={pathFill}
        strokeWidth="2"
      />
      <rect
        x="0.5"
        y="0.5"
        width="59"
        height="59"
        rx="29.5"
        stroke={pathFill}
      />
    </Svg>
  )
}
