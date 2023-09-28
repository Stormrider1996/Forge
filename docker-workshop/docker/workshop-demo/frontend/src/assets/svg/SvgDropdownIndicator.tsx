import { SvgProps } from '@interface'
import { colors } from '@variables'
import { FunctionComponent } from 'react'

export const SvgDropdownIndicator: FunctionComponent<SvgProps> = ({ fill }) => {
  const pathFill = fill || colors.grayscale.x400

  return (
    <svg width="28" height="29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m7 10.415 7 7 7-7"
        stroke={pathFill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
