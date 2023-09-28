import { FunctionComponent } from 'react'

export const SvgArrow: FunctionComponent = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="65" fill="none">
      <path
        d="m36 41.308 8-9-8-9"
        stroke="#000"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M19 32.308h25" stroke="#0027C6" strokeWidth="2" />
      <rect
        x="1"
        y="1.308"
        width="62"
        height="62"
        rx="31"
        stroke="#1C282E"
        strokeWidth="2"
      />
    </svg>
  )
}
