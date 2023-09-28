import { SvgProps } from '@interface'
import { colors } from '@variables'
import { FunctionComponent } from 'react'

export const SvgDataCenterLoading: FunctionComponent<SvgProps> = ({
  fill,
  width
}) => {
  const pathFill = fill || colors.grayscale.x400
  const pathWidth = width || 90

  return (
    <svg
      id="a"
      viewBox="0 0 40 40"
      width={pathWidth}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="loading-bars">
        <path className="bar-1" d="M0,0H12V40H0V0Z" fill={pathFill} />
        <path className="bar-2" d="M16,0h8V40h-8V0Z" fill={pathFill} />
        <path className="bar-3" d="M28,0h4V40h-4V0Z" fill={pathFill} />
        <path className="bar-4" d="M40,0V40h-4V0h4Z" fill={pathFill} />
      </g>
    </svg>
  )
}
