import { SvgProps } from '@interface'
import { colors } from '@variables'
import { FunctionComponent } from 'react'

export const SvgWindPower: FunctionComponent<SvgProps> = ({ fill, width }) => {
  const pathFill = fill || colors.grayscale.x400
  const pathWidth = width || 90

  return (
    <svg
      id="a"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      width={pathWidth}
    >
      <g className="elise">
        <path
          d="M29.75,25.93l-8.41-8.39,1.41-1.42,8.41,8.39-1.41,1.42Z"
          fill={pathFill}
        />
        <path
          d="M31.22,5.01l-1.41-1.42-8.49,8.47,1.41,1.42L31.22,5.01Z"
          fill={pathFill}
        />
        <path
          d="M18.64,11.98L10.19,3.56l-1.41,1.42,8.45,8.42,1.41-1.42Z"
          fill={pathFill}
        />
        <path
          d="M18.77,17.46l-1.41-1.42-8.53,8.5,1.41,1.42,8.53-8.5Z"
          fill={pathFill}
        />
      </g>
      <path
        d="M24.04,14.75c0-2.21-1.79-4-4-4s-4,1.79-4,4c0,1.86,1.28,3.41,3,3.86v21.3h2V18.61c1.72-.45,3-2,3-3.86Zm-4,2c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2-.9,2-2,2Z"
        fill={pathFill}
      />
      <path d="M40,40H0V0H40V40Z" fill="none" />
    </svg>
  )
}
