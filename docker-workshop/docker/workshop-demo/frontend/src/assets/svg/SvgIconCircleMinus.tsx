import { SvgProps } from '@interface'
import { FunctionComponent } from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  display: block;
`

export const SvgIconCircleMinus: FunctionComponent<SvgProps> = () => {
  return (
    <Svg width="40" height="41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28 20.165H12" stroke="#0027C6" strokeWidth="2" />
      <rect x=".5" y=".665" width="39" height="39" rx="19.5" stroke="#1C282E" />
    </Svg>
  )
}
