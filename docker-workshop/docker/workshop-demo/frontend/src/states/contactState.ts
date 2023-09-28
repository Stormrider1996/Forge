import { CompanyContactProps, GeneralContactProps } from '@interface'
import axios, { AxiosError, AxiosResponse } from 'axios'
import create from 'zustand'

type Payload = GeneralContactProps & CompanyContactProps

type FormType =
  | 'data-center-location' //
  | 'funding'
  | 'general'
  | 'hosting'
  | 'investment'
  | 'sustainable-energy'
  | 'technical-audit'

interface ContactProps {
  data: AxiosResponse
  error: Error | AxiosError
  isLoading: boolean

  // eslint-disable-next-line no-unused-vars
  resetForm: () => void

  // eslint-disable-next-line no-unused-vars
  submitForm: (payload: Payload, formType: FormType) => void
}

export const contactState = create<ContactProps>()((set) => ({
  data: {} as AxiosResponse,
  error: {} as AxiosError | Error,
  isLoading: false,

  resetForm: () => {
    set({
      isLoading: false,
      error: {} as AxiosError | Error,
      data: {} as AxiosResponse
    })
  },

  submitForm: async (payload: Payload, formType) => {
    set({
      isLoading: true,
      error: {} as AxiosError | Error,
      data: {} as AxiosResponse
    })

    payload.formType = formType

    await axios({
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_CONTACT_FORM_API_URL}/contact`,
      data: payload
    })
      .then((data) => set({ data: data }))
      .catch((error: Error | AxiosError) => {
        if (axios.isAxiosError(error)) {
          set({ error: error?.response?.data })
        }

        set({ error: error })
      })
      .finally(() => set({ isLoading: false }))
  }
}))
