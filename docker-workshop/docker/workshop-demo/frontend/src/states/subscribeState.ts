import axios, { AxiosError, AxiosResponse } from 'axios'
import create from 'zustand'

interface SubscribeProps {
  data: AxiosResponse
  error: Error | AxiosError
  isLoading: boolean

  // eslint-disable-next-line no-unused-vars
  subscribe: (email: string) => void
}

export const subscribeState = create<SubscribeProps>()((set) => ({
  data: {} as AxiosResponse,
  error: {} as AxiosError | Error,
  isLoading: false,

  subscribe: async (email: string) => {
    set({
      isLoading: true,
      error: {} as AxiosError | Error,
      data: {} as AxiosResponse
    })

    await axios({
      method: 'PUT',
      url: `${process.env.NEXT_PUBLIC_CONTACT_FORM_API_URL}/subscribe`,
      data: email
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
