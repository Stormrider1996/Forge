import { SvgProps } from '@interface'
import { colors, transitions } from '@variables'
import { FunctionComponent } from 'react'
import styled from 'styled-components'

const Svg = styled.svg<{ fillHover: string; fill: string }>`
  --fill-hover: ${(props) => props.fillHover || props.fill};

  display: block;

  &:hover {
    rect,
    .arrow {
      stroke: var(--fill-hover);
      transition: ${transitions.s03};
    }
  }
`

export const SvgIconArrowRightCircle: FunctionComponent<SvgProps> = ({
  fill,
  fillHover
}) => {
  const pathFill = fill || colors.grayscale.x500
  const pathFillHover = fillHover || pathFill

  return (
    <Svg
      fillHover={pathFillHover}
      width="64"
      height="65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="arrow"
        d="m36 41.607 8-9-8-9"
        stroke={pathFill}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        className="arrow"
        d="M19 32.607h25"
        stroke={pathFill}
        strokeWidth="2"
      />
      <rect
        x="1"
        y="1.607"
        width="62"
        height="62"
        rx="31"
        stroke={pathFill}
        strokeWidth="2"
      />
    </Svg>
  )
}
