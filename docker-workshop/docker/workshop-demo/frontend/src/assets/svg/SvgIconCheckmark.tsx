import { SvgProps } from '@interface'
import { colors } from '@variables'
import { FunctionComponent } from 'react'

export const SvgIconCheckmark: FunctionComponent<SvgProps> = ({
  fill,
  height,
  width
}) => {
  const pathFill = fill || colors.grayscale.x400
  const pathWidth = width || 28
  const pathHeight = height || 29

  return (
    <svg
      width={pathWidth}
      height={pathHeight}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m7 15.063 5 4 9-10" stroke={pathFill} strokeWidth="2" />
    </svg>
  )
}
