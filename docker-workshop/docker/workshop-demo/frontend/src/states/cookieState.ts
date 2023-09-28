import create from 'zustand'

export interface CookieState {
  allCookiesAccepted: boolean
  necessaryCookiesAccepted: boolean
  setAllCookiesAccepted: () => void
  setNecessaryCookiesAccepted: () => void
}

export const cookieState = create<CookieState>()((set) => ({
  allCookiesAccepted: false,
  necessaryCookiesAccepted: false,

  setAllCookiesAccepted: () => {
    set({ allCookiesAccepted: true, necessaryCookiesAccepted: true })
  },

  setNecessaryCookiesAccepted: () => {
    set({ necessaryCookiesAccepted: true })
  }
}))
