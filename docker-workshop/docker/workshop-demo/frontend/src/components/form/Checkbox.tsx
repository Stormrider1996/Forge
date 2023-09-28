import { colors, spacing, typography } from '@variables'
import { FunctionComponent } from 'react'
import { useFormContext } from 'react-hook-form'
import styled from 'styled-components'

interface Props {
  label: string
  registerName: string
  value: string
}

const PDRadioButton = styled.label`
  cursor: pointer;
  display: flex;
  gap: ${spacing.baseSpacing};
  pointer-events: none;
  position: relative;
`

const CustomRadioButton = styled.span`
  border: 1px solid ${colors.grayscale.x400};
  border-radius: 50%;
  display: block;
  flex-shrink: 0;
  height: 2.5rem;
  outline: none;
  overflow: hidden;
  pointer-events: auto;
  position: relative;
  width: 2.5rem;

  &:after {
    background: url('/icons/icon-checkmark.svg') center no-repeat;
    background-size: 28px;
    content: '';
    height: 40px;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transform: scale(0.5);
    width: 40px;
  }
`

const Label = styled.span`
  font-size: ${typography.fontSize.inputText};
  line-height: ${typography.lineHeight.text};
  margin-block-start: 5px;
  pointer-events: auto;
`
// nosemgrep
const TrueRadioButton = styled.input`
  appearance: none;
  cursor: pointer;
  position: absolute;

  &:focus-visible {
    + ${CustomRadioButton} {
      border-radius: 50%;
      display: block;
      box-shadow: 0 0 0 1px ${colors.grayscale.x400};
    }

    &:checked + ${CustomRadioButton} {
      box-shadow: 0 0 0 2px ${colors.grayscale.x400};
    }
  }

  &:checked + ${CustomRadioButton} {
    border-radius: 50%;
    box-shadow: 0 0 0 1px ${colors.grayscale.x400};
    outline: none;

    &:after {
      opacity: 1;
      transform: scale(1);
    }
  }
`

export const Checkbox: FunctionComponent<Props> = ({
  label,
  registerName,
  value
}) => {
  const { register } = useFormContext() // retrieve all hook methods

  return (
    <PDRadioButton>
      <TrueRadioButton
        type="checkbox"
        value={value}
        {...register(registerName as string)}
      />

      <CustomRadioButton />

      <Label>{label}</Label>
    </PDRadioButton>
  )
}
