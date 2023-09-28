import { SvgProps } from '@interface'
import { colors } from '@variables'
import { FunctionComponent } from 'react'

export const SvgSolarPower: FunctionComponent<SvgProps> = ({ fill, width }) => {
  const pathFill = fill || colors.grayscale.x400
  const pathWidth = width || 90

  return (
    <svg
      id="a"
      viewBox="0 0 40 40"
      width={pathWidth}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20,9c-6.07,0-11,4.93-11,11s4.93,11,11,11,11-4.93,11-11-4.93-11-11-11Zm1,19.94v-3.94h2v-2h-6v2h2v3.94c-4.49-.5-8-4.32-8-8.94s3.51-8.44,8-8.94v3.94h-3.99v2h10v-2h-4.01v-3.94c4.49,.5,8,4.32,8,8.94s-3.51,8.44-8,8.94Z"
        fill={pathFill}
      />
      <path
        className="sun-rays"
        d="M34.11,5.83l-7.06,7.09M5.83,5.89l7.09,7.06m14.17,14.11l7.09,7.06M19.96,0l.02,10m.06,30l-.02-10m19.98-10.04l-10,.02m-20,.04L0,20.04m12.95,7.04l-7.06,7.09"
        fill="none"
        stroke={pathFill}
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  )
}