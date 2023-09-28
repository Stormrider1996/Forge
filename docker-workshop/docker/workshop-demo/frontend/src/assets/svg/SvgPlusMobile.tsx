import { SvgProps } from '@interface'
import { FunctionComponent } from 'react'

export const SvgPlusMobile: FunctionComponent<SvgProps> = () => {
  return (
    <svg width="34" height="35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27 17.5H7M17 27.5v-20" stroke="#0027C6" strokeWidth="2" />
      <rect
        x="1"
        y="1.5"
        width="32"
        height="32"
        rx="16"
        stroke="#1C282E"
        strokeWidth="2"
      />
    </svg>
  )
}
