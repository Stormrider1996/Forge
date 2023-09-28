import { SvgProps } from '@interface'
import { FunctionComponent } from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  display: block;
`

export const SvgIconCheckmarkHalfSmall: FunctionComponent<SvgProps> = () => {
  return (
    <Svg width="60" height="61" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="m21 31.625 7 6 11-14" stroke="#1C282E" strokeWidth="2" />
      <circle
        cx="29.987"
        cy="30.638"
        r="19.987"
        stroke="#1AF597"
        strokeWidth="2"
      />
      <path
        d="M29.987 50.599C18.949 50.599 10 41.651 10 30.612c0-11.038 8.948-19.987 19.987-19.987"
        stroke="#1C282E"
        strokeWidth="2"
      />
      <path
        d="M27.32 10.625a2.667 2.667 0 1 0 5.334 0 2.667 2.667 0 0 0-5.334 0Zm2.667 39.474c-10.762 0-19.487-8.725-19.487-19.487h-1c0 11.315 9.172 20.487 20.487 20.487v-1ZM10.5 30.612c0-10.762 8.725-19.487 19.487-19.487v-1C18.672 10.125 9.5 19.297 9.5 30.612h1Z"
        fill="#1C282E"
      />
    </Svg>
  )
}
