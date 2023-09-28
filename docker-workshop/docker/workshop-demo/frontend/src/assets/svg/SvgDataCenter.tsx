import { SvgProps } from '@interface'
import { colors } from '@variables'
import { FunctionComponent } from 'react'

export const SvgDataCenter: FunctionComponent<SvgProps> = ({ fill, width }) => {
  const pathFill = fill || colors.grayscale.x400
  const pathWidth = width || 90

  return (
    <svg
      id="a"
      viewBox="0 0 40 40"
      width={pathWidth}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M40 40H0V0H40V40Z" fill={pathFill} />
    </svg>
  )
}
