import { SvgProps } from '@interface'
import { colors } from '@variables'
import { FunctionComponent } from 'react'

export const SvgIconClose: FunctionComponent<SvgProps> = ({
  fill,
                                                            width,
  height
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
      <path
        d="m21 21.375-14-14M7 21.375l14-14"
        stroke={pathFill}
        strokeWidth="2"
      />
    </svg>
  )
}
