import { SvgProps } from '@interface'
import { FunctionComponent } from 'react'

export const SvgPlusDesktop: FunctionComponent<SvgProps> = () => {
  return (
    <svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M42 32.005H22M32 42.005v-20" stroke="#0027C6" strokeWidth="2" />
      <rect
        x="1"
        y="1.005"
        width="62"
        height="62"
        rx="31"
        stroke="#1C282E"
        strokeWidth="2"
      />
    </svg>
  )
}
