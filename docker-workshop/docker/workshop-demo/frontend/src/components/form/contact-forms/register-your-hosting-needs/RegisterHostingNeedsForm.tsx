import {
  Button,
  Column,
  ControlGroup,
  FieldsCompany,
  FieldsContactedBy,
  FieldsGeneral,
  FieldsMessage,
  Grid,
  Hr,
  PlainText,
  RegisterHostingNeedsFields
} from '@components'
import { yupResolver } from '@hookform/resolvers/yup'
import { CompanyContactProps, GeneralContactProps } from '@interface'
import { contactState } from '@states'
import { resetCompanyFields, yupGeneralFormValidation } from '@utils'
import { colors, spacing, typography } from '@variables'
import { useEffect } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

type FormTypes = GeneralContactProps & CompanyContactProps

const schema = yup
  .object({
    message: yup.string(),
    miningHardware: yup.array().min(1, 'At least 1 item is required'),
    ...yupGeneralFormValidation
  })
  .required()

export const RegisterHostingNeedsForm = () => {
  const methods = useForm({ resolver: yupResolver(schema) })
  const { resetForm, submitForm, data, error, isLoading } = contactState()
  const onSubmit: SubmitHandler<FormTypes> = (data) => {
    submitForm(data, 'hosting')

    setTimeout(() => {
      resetForm()
    }, 5000)
  }

  const isCompany = methods.watch('contactedBy')?.toLowerCase() === 'as company'

  const onClientTypeChange = () => {
    if (!isCompany) {
      resetCompanyFields(methods)
    }
  }

  useEffect(() => {
    onClientTypeChange()
  })

  useEffect(() => {
    if (data) {
      methods.reset()
    }
  }, [data, methods])
  // nosemgrep
  return (
    // nosemgrep
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit as any)}>
        <FieldsGeneral />

        <FieldsContactedBy />

        {isCompany && <FieldsCompany />}

        <RegisterHostingNeedsFields />

        <FieldsMessage />

        <Grid
          gridTemplateColumnsLaptop="repeat(9, 1fr)"
          spaceBottomMobile="0"
          spaceBottomTablet="0"
          spaceBottomLaptop={spacing.space05}
          spaceBottomDesktop={spacing.space05}
        >
          <Column>
            <Hr color={colors.grayscale.x400} />

            <PlainText fontSize={typography.fontSize.heading06}>
              You are in good hands - we&apos;ll reply with speed.
            </PlainText>

            <ControlGroup spaceBottom={spacing.space01}>
              <Button buttonType="buttonBlack">Submit</Button>
            </ControlGroup>

            {isLoading && <div>sending...</div>}
            {error && <div>{error.message}</div>}
            {data && <div>{data?.data?.message}</div>}
          </Column>
        </Grid>
      </form>
    </FormProvider>
  )
}
