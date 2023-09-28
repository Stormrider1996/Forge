import { SvgExclamationMark, SvgIconClose } from '@svg'
import {
  breakpoints,
  colors,
  spacing,
  transitions,
  typography
} from '@variables'
import { FunctionComponent } from 'react'
import { useFormContext } from 'react-hook-form'
import styled from 'styled-components'

interface Props {
  errorMessage?: string
  inputType: string
  instructions?: string
  isDisabled?: boolean
  label?: string
  placeholder?: string // will show only if no label
  registerName: string
}

const PDInputText = styled.div`
  position: relative;
`
const Label = styled.label<{ value?: string | number; hasError: boolean }>`
  --font-size: ${(props) =>
    props.value
      ? typography.fontSize.inputLabel
      : typography.fontSize.inputText};
  --text-color: ${(props) => {
    if (props.hasError) return colors.error
    return colors.grayscale.x600
  }};

  color: var(--text-color);
  font-size: var(--font-size);
  left: 0;
  line-height: ${typography.lineHeight};
  pointer-events: none;
  position: absolute;
  top: ${(props) => (props.value ? '-0.9rem' : spacing.spaceSmall)};
  transition: ${transitions.s03};

  @media (min-width: ${breakpoints.laptop}) {
    top: ${(props) => (props.value ? '-1.375rem' : spacing.spaceSmall)};
  }
`
// nosemgrep
const Input = styled.input<{
  value?: string
  hasError: boolean
  isValid: boolean
}>`
  --border-color: ${(props) =>
    props.isValid ? colors.primary.x400 : colors.grayscale.x400};
  --text-color: ${(props) => {
    if (props.hasError) return colors.error
    return colors.grayscale.x600
  }};

  background: transparent;
  border: none;
  border-bottom: 1px solid var(--border-color);
  border-radius: 0;
  color: var(--text-color);
  line-height: ${typography.lineHeight};
  padding-block: ${spacing.spaceSmall};
  width: 100%;

  &:focus + ${Label} {
    --text-color-focus: ${(props) => {
      if (props.hasError) return colors.grayscale.x400
      return colors.primary.x500
    }};

    color: var(--text-color-focus);
    font-size: ${typography.fontSize.inputLabel};
    top: -0.9rem;

    @media (min-width: ${breakpoints.laptop}) {
      top: -1.375rem;
    }
  }
`

const InputWrapper = styled.div`
  position: relative;
`

const Instructions = styled.div<{ hasError: boolean }>`
  --text-color: ${(props) =>
    props.hasError ? colors.error : colors.grayscale.x600};

  color: var(--text-color);
  cursor: default;
  font-size: ${typography.fontSize.inputLabel};
  line-height: ${typography.lineHeight};
  padding-block: ${spacing.spaceSmall};
`

const Clear = styled.span`
  cursor: pointer;
  display: block;
  line-height: 1;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`

const Exclamation = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`

export const InputField: FunctionComponent<Props> = ({
  inputType,
  instructions,
  isDisabled,
  label,
  placeholder,
  registerName
}) => {
  const { register, setValue, watch, formState } = useFormContext() // retrieve all hook methods

  const value = watch(registerName as string)
  const error = formState.errors[registerName as string] // nosemgrep
  const isValid = !error && !!value?.length

  return (
    <PDInputText>
      <InputWrapper>
        <Input
          disabled={isDisabled}
          isValid={isValid}
          hasError={!!error}
          placeholder={label ? '' : placeholder}
          type={inputType}
          {...register(registerName as string)}
        />

        {value && (
          <Clear onClick={() => setValue(registerName as string, '')}>
            <SvgIconClose />
          </Clear>
        )}
        {label && (
          <Label hasError={!!error} value={value}>
            {label}
          </Label>
        )}
      </InputWrapper>

      {error && (
        <Exclamation>
          <SvgExclamationMark />
        </Exclamation>
      )}

      <Instructions hasError={!!error?.message}>
        {(error?.message as string) || instructions}
      </Instructions>
    </PDInputText>
  )
}
