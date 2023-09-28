import { SvgProps } from '@interface'
import { colors } from '@variables'
import { FunctionComponent } from 'react'

export const SvgHydroPower: FunctionComponent<SvgProps> = ({ fill, width }) => {
  const pathFill = fill || colors.primary.x400
  const pathWidth = width || 90

  return (
    <svg
      id="a"
      viewBox="0 0 40 39.27"
      width={pathWidth}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="wave-1"
        d="M0,1c3.33,0,3.33,4,6.66,4S10,1,13.33,1s3.33,4,6.66,4,3.33-4,6.67-4,3.34,4,6.67,4,3.34-4,6.67-4"
        fill="none"
        stroke={pathFill}
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        className="wave-2"
        d="M0,12.09c3.33,0,3.33,4,6.66,4s3.33-4,6.66-4,3.33,4,6.66,4,3.33-4,6.67-4,3.34,4,6.67,4,3.34-4,6.67-4"
        fill="none"
        stroke={pathFill}
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        className="wave-3"
        d="M0,23.18c3.33,0,3.33,4,6.66,4s3.33-4,6.66-4,3.33,4,6.66,4,3.33-4,6.67-4,3.34,4,6.67,4,3.34-4,6.67-4"
        fill="none"
        stroke={pathFill}
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        className="wave-4"
        d="M0,34.27c3.33,0,3.33,4,6.66,4s3.33-4,6.66-4,3.33,4,6.66,4,3.33-4,6.67-4,3.34,4,6.67,4,3.34-4,6.67-4"
        fill="none"
        stroke={pathFill}
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  )
}
