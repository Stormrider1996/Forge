import { colors, transitions, typography } from '@variables'
import styled, { css } from 'styled-components'

interface Props {
  buttonType:
    | 'buttonBlue' //
    | 'buttonGreen'
    | 'buttonBlack'
    | 'buttonOutlineBlue'
    | 'buttonOutlineGreen'
    | 'buttonOutlineBlack'
  bottomSpacing?: string
  isLoading?: boolean
}

export const Button = styled.button<Props>`
  --button-background: ${(props) => {
    if (props.buttonType === 'buttonBlue') return colors.primary.x400
    if (props.buttonType === 'buttonGreen') return colors.secondary.x400
    if (props.buttonType === 'buttonBlack') return colors.grayscale.x400
    if (props.buttonType === 'buttonOutlineBlue') return 'transparent'
    if (props.buttonType === 'buttonOutlineBlack') return 'transparent'
    if (props.buttonType === 'buttonOutlineGreen') return 'transparent'
    return colors.grayscale.x400
  }};

  --button-background-hover: ${(props) => {
    if (props.buttonType === 'buttonBlue') return colors.primary.x500
    if (props.buttonType === 'buttonBlack') return colors.grayscale.x500
    if (props.buttonType === 'buttonGreen') return colors.secondary.x500
    if (props.buttonType === 'buttonOutlineBlue') return 'transparent'
    if (props.buttonType === 'buttonOutlineBlack') return 'transparent'
    if (props.buttonType === 'buttonOutlineGreen') return 'transparent'
    return colors.grayscale.x500
  }};

  --button-border: ${(props) => {
    if (props.buttonType === 'buttonOutlineBlue')
      return '0.125rem solid #002bdc'
    if (props.buttonType === 'buttonOutlineBlack')
      return '0.125rem solid #1f2d33'
    if (props.buttonType === 'buttonOutlineGreen')
      return '0.125rem solid #01f48b'
    return colors.grayscale.x500
  }};

  --button-border-hover: ${(props) => {
    if (props.buttonType === 'buttonOutlineBlue')
      return '0.125rem solid #0027c6'
    if (props.buttonType === 'buttonOutlineBlack')
      return '0.125rem solid #1c282e'
    if (props.buttonType === 'buttonOutlineGreen')
      return '0.125rem solid #01dc7d'
    return colors.grayscale.x500
  }};

  --button-color: ${(props) => {
    if (props.buttonType === 'buttonBlue') return colors.shades.light.x50
    if (props.buttonType === 'buttonGreen') return colors.grayscale.x400
    if (props.buttonType === 'buttonBlack') return colors.shades.light.x50
    if (props.buttonType === 'buttonOutlineBlue') return colors.primary.x400
    if (props.buttonType === 'buttonOutlineBlack') return colors.grayscale.x400
    if (props.buttonType === 'buttonOutlineGreen') return colors.grayscale.x400
    return colors.shades.light.x50
  }};

  --button-color-hover: ${(props) => {
    if (props.buttonType === 'buttonBlue') return colors.shades.light.x50
    if (props.buttonType === 'buttonGreen') return colors.grayscale.x500
    if (props.buttonType === 'buttonBlack') return colors.shades.light.x50
    if (props.buttonType === 'buttonOutlineBlue') return colors.primary.x500
    if (props.buttonType === 'buttonOutlineBlack') return colors.grayscale.x500
    if (props.buttonType === 'buttonOutlineGreen') return colors.grayscale.x500
    return colors.grayscale.x400
  }};

  ${(props) =>
    props.isLoading &&
    css`
      pointer-events: none;

      @keyframes spin {
        0% {
          transform: rotate(0);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      &:before {
        background: var(--button-background);
        content: '';
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
      }

      &:after {
        animation: spin 1s linear infinite;
        border: 0.125rem solid white;
        border-left: 0.125rem solid transparent;
        border-radius: 50%;
        content: '';
        height: 1.5rem;
        left: calc(50% - 0.438rem);
        position: absolute;
        width: 1.5rem;
      }
    `}

  background: var(--button-background);
  border: var(--button-border);
  border-radius: 0.125rem;
  color: var(--button-color);
  cursor: pointer;
  display: inline-block;
  font-size: ${typography.fontSize.text};
  line-height: ${typography.lineHeight.text};
  margin-bottom: ${(props) => props.bottomSpacing};
  padding: 1.125rem 2.5rem;
  position: relative;
  transition: border ${transitions.s03}, background ${transitions.s03},
    color ${transitions.s03};
  width: max-content;

  &:hover {
    background: var(--button-background-hover);
    border: var(--button-border-hover);
    color: var(--button-color-hover);
  }

  &:focus-within {
    outline: 1px solid var(--button-background);
  }

  &:disabled {
    background: ${colors.shades.light.x500};
    color: ${colors.shades.light.x50};
    cursor: not-allowed;
  }
`
