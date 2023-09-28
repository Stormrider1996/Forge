import { Hr } from '@components'
import { breakpoints, colors, spacing, typography } from '@variables'
import React, { FunctionComponent } from 'react'
import { useFormContext } from 'react-hook-form'
import styled from 'styled-components'

interface Props {
  placeholder?: string
  registerName: string
}

const PDTextArea = styled.div`
  background: ${colors.shades.light.x400};
  padding: ${spacing.space01};

  @media (min-width: ${breakpoints.desktop}) {
    ${spacing.space01}
  }
`
const Instructions = styled.span`
  color: ${colors.grayscale.x400};
  font-size: ${typography.fontSize.inputLabel};
`

const TextAreaComponent = styled.textarea`
  background: inherit;
  border: 0;
  font-size: ${typography.fontSize.inputText};
  outline: none;
  resize: none;
  width: 100%;

  &::placeholder {
    font-size: ${typography.fontSize.inputText};
  }
`

export const TextArea: FunctionComponent<Props> = ({
  placeholder,
  registerName
}) => {
  const { register, watch } = useFormContext() // retrieve all hook methods

  const value = watch(registerName as string)

  return (
    <PDTextArea>
      {/*<Heading>Subject</Heading>*/}

      {/*<Hr color={colors.grayscale.x400} />*/}

      <TextAreaComponent
        placeholder={placeholder || 'Message'}
        cols={20}
        rows={10}
        maxLength={960}
        {...register(registerName as string)}
      />

      <Hr color={colors.grayscale.x400} spaceBottom={spacing.spaceExtraSmall} />

      <Instructions>
        Available characters <b>{960 - (value?.length || 0)}</b>
      </Instructions>
    </PDTextArea>
  )
}
