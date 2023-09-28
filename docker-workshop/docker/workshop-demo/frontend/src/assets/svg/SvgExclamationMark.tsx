import { SvgProps } from '@interface'
import { colors } from '@variables'
import { FunctionComponent } from 'react'

export const SvgExclamationMark: FunctionComponent<SvgProps> = ({
  fill,
  width,
  height
}) => {
  const pathFill = fill || colors.error
  const pathWidth = width || 28
  const pathHeight = height || 28

  return (
    <svg
      width={pathWidth}
      height={pathHeight}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 7c0 1.105-1 11-1 11h-2S12 7.934 12 7a2 2 0 1 1 4 0Z"
        fill={pathFill}
      />
      <circle cx="14" cy="21.5" r="1.5" fill="#DB504A" />
    </svg>
  )
}
