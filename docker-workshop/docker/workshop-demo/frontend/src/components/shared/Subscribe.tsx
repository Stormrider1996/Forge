import { Button, ErrorMessage, Flex } from '@components'
import { yupResolver } from '@hookform/resolvers/yup'
import { subscribeState } from '@states'
import { colors, spacing, typography } from '@variables'
import { FunctionComponent, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import * as yup from 'yup'

type SubscribeValues = {
  email: string
}

const PDSubscribe = styled.div`
  margin-block-end: ${spacing.space01};
`
const Label = styled.label`
  display: inline-block;
  font-weight: 600;
  margin-block-end: ${spacing.baseSpacing};
`

const Input = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid ${colors.grayscale.x500};
  color: ${colors.grayscale.x400};
  line-height: ${typography.lineHeight};
  margin-block-end: ${spacing.space01};
  padding-block-end: ${spacing.baseSpacing};
  width: 100%;

  ::placeholder {
    color: ${colors.grayscale.x400};
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: ${colors.grayscale.x400};
  }

  ::-ms-input-placeholder {
    color: ${colors.grayscale.x400};
  }
`
const schema = yup
  .object({
    email: yup.string().email().required('Email is required')
  })
  .required()

export const Subscribe: FunctionComponent = () => {
  const { data, isLoading, subscribe } = subscribeState()
  const {
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    register,
    reset
  } = useForm<SubscribeValues>({ resolver: yupResolver(schema) })
  const onSubmit = handleSubmit((email) => {
    subscribe(email as any)
  })

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
  }, [isSubmitSuccessful, reset])

  return (
    <PDSubscribe>
      <form onSubmit={onSubmit}>
        <Label htmlFor="subscribe">Subscribe</Label>

        <Input
          id="subscribe"
          placeholder="Leave your email, we’re no spammers"
          type="email"
          {...register('email')}
        />

        <Button disabled={isLoading} buttonType="buttonGreen">
          Join mailing list
        </Button>

        {errors?.email && (
          <Flex spaceTop={spacing.baseSpacing}>
            <ErrorMessage spaceBottom={spacing.spaceSmall}>
              {errors.email.message}
            </ErrorMessage>
          </Flex>
        )}

        {data && (
          <Flex spaceTop={spacing.baseSpacing}>{data?.data?.message}</Flex>
        )}
      </form>
    </PDSubscribe>
  )
}
