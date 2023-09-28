import { SvgProps } from '@interface'
import { colors } from '@variables'
import { FunctionComponent } from 'react'

export const SvgNuclearPowerPlant: FunctionComponent<SvgProps> = ({
  fill,
  width
}) => {
  const pathFill = fill || colors.secondary.x400
  const pathWidth = width || 90

  return (
    <svg
      id="a"
      viewBox="0 0 40 40"
      width={pathWidth}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="nuclear-power"
        d="M20,40h0C8.95,40,0,31.05,0,20H0C0,8.95,8.95,0,20,0h0c11.05,0,20,8.95,20,20h0c0,11.05-8.95,20-20,20Z"
        fill={pathFill}
      />
    </svg>
  )
}
