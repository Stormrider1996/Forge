import {
  Button,
  Column,
  ControlGroup,
  FieldsBusinessGoals,
  FieldsCompany,
  FieldsContactedBy,
  FieldsGeneral,
  FieldsMessage,
  Grid,
  Hr,
  PlainText
} from '@components'
import { yupResolver } from '@hookform/resolvers/yup'
import { CompanyContactProps, GeneralContactProps } from '@interface'
import { contactState } from '@states'
import { resetCompanyFields, yupGeneralFormValidation } from '@utils'
import { colors, spacing, typography } from '@variables'
import { useEffect } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

import { RegisterDataCenterLocationFields } from './RegisterDataCenterLocationFields'

type FormTypes = GeneralContactProps & CompanyContactProps

const schema = yup
  .object({
    businessGoalsMessage: yup.string(),
    dataCenterCountry: yup.string().required('Country is required'),
    dataCenterCity: yup.string().required('City is required'),
    dataCenterZip: yup.string().required('ZIP code is required'),
    dataCenterAddress: yup.string().required('Address is required'),
    electricalCapacity: yup
      .string()
      .nullable()
      .required('Please select a choice'),
    listingType: yup.string().nullable().required('Please select a choice'),
    locationType: yup.string().nullable().required('Please select a choice'),
    locationOffer: yup
      .array()
      .nullable()
      .min(1, 'At least one choice is required')
      .of(yup.string().required('Please select one or more choices'))
      .required('Please select one or more choices'),
    energySource: yup
      .array()
      .nullable()
      .min(1, 'At least one choice is required')
      .of(yup.string().required('Please select one or more choices'))
      .required('Please select one or more choices'),
    ...yupGeneralFormValidation
  })
  .required()

export const RegisterDataCenterLocationForm = () => {
  const methods = useForm({ resolver: yupResolver(schema) })
  const { resetForm, submitForm, data, error, isLoading } = contactState()
  const onSubmit: SubmitHandler<FormTypes> = (data) => {
    submitForm(data, 'data-center-location')

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

        <RegisterDataCenterLocationFields />

        <FieldsBusinessGoals />

        <FieldsMessage />

        <Grid
          gridTemplateColumnsLaptop="repeat(9, 1fr)"
          spaceBottomMobile="0"
          spaceBottomTablet="0"
          spaceBottomLaptop={spacing.space04}
          spaceBottomDesktop={spacing.space04}
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
