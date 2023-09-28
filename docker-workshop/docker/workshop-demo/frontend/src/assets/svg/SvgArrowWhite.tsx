import { SvgProps } from '@interface'
import { FunctionComponent } from 'react'

export const SvgArrowWhite: FunctionComponent<SvgProps> = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="65" fill="none">
      <path
        d="m36 41.446 8-9-8-9"
        stroke="#F7F9FA"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M19 32.446h25" stroke="#F7F9FA" strokeWidth="2" />
      <rect
        x="1"
        y="1.446"
        width="62"
        height="62"
        rx="31"
        stroke="#F7F9FA"
        strokeWidth="2"
      />
    </svg>
  )
}
