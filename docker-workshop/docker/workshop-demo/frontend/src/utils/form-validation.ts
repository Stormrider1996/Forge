import * as yup from 'yup'

export const yupGeneralFormValidation = {
  city: yup.string().when('contactedBy', {
    is: 'As Company',
    then: yup.string().required('City is required'),
    otherwise: yup.string()
  }),
  company: yup.string().when('contactedBy', {
    is: 'As Company',
    then: yup.string().required('Company or organization name is required'),
    otherwise: yup.string()
  }),
  companyAddress: yup.string().when('contactedBy', {
    is: 'As Company',
    then: yup.string().required('Company address is required'),
    otherwise: yup.string()
  }),
  companyEmail: yup.string().when('contactedBy', {
    is: 'As Company',
    then: yup
      .string()
      .email('Must be a valid email')
      .required('Company email s required'),
    otherwise: yup.string()
  }),
  country: yup.string().when('contactedBy', {
    is: 'As Company',
    then: yup.string().required('Country is required'),
    otherwise: yup.string()
  }),
  contactedBy: yup.string().nullable().required('Please select a choice'),
  email: yup
    .string()
    .email('Must be a valid email')
    .required('Email is required'),
  firstName: yup.string().required('Name is required'),
  hearAboutUs: yup.string().nullable().required('Please select a choice'),
  lastName: yup.string().required('Surname is required')
}
