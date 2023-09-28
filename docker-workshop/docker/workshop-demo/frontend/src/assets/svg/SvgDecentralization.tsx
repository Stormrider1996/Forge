import { SvgProps } from '@interface'
import { FunctionComponent } from 'react'

export const SvgDecentralization: FunctionComponent<SvgProps> = ({ width }) => {
  const pathWidth = width || 90

  return (
    <svg
      width={pathWidth}
      height="90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="45" cy="45" r="44.5" stroke="#1F2D33" />
      <circle cx="66.315" cy="28.421" r="4.737" fill="#01F48B" />
      <circle cx="75.79" cy="56.842" r="4.737" fill="#01F48B" />
      <circle cx="56.842" cy="47.368" r="4.737" fill="#01F48B" />
      <circle cx="56.842" cy="75.79" r="4.737" fill="#01F48B" />
      <circle cx="18.948" cy="56.842" r="4.737" fill="#01F48B" />
      <circle cx="47.368" cy="28.421" r="4.737" fill="#01F48B" />
      <circle cx="47.368" cy="9.474" r="4.737" fill="#01F48B" />
      <circle cx="18.948" cy="37.895" r="4.737" fill="#01F48B" />
    </svg>
  )
}
