import { CookieNotice, Footer, Header } from '@components'
import { Children } from '@interface'
import { cookieState } from '@states'
import { getCookie } from 'cookies-next'
import Script from 'next/script'
import { FunctionComponent, useEffect } from 'react'
import styled from 'styled-components'

interface Props {
  children: Children
}

const PDLayout = styled.div`
  display: flex;
  flex-direction: column;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`

const Main = styled.main`
  flex: 1 0 auto;
`

export const Layout: FunctionComponent<Props> = ({ children }) => {
  // nosemgrep
  const {
    // nosemgrep
    allCookiesAccepted,
    setAllCookiesAccepted,
    setNecessaryCookiesAccepted
  } = cookieState()
  // nosemgrep
  useEffect(() => {
    const cookie = getCookie('cookie_control')
    // nosemgrep
    if (cookie === 'all') {
      setAllCookiesAccepted()
    }
    // nosemgrep
    if (cookie === 'necessary') {
      setNecessaryCookiesAccepted()
    }
  }, [])

  return (
    <PDLayout>
      <Header />
      <Main>{children}</Main>
      <Footer />
      <CookieNotice />
      {allCookiesAccepted && (
        <>
          {/* Global Site Tag (gtag.js) - Google Analytics */}

          <Script
            nonce="qnXV7EgLd8EprBfQVVv2"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG_CODE}`}
          />
          {/* nosemgrep*/}
          <Script
            nonce="qnXV7EgLd8EprBfQVVv2"
            id="gtag-init"
            dangerouslySetInnerHTML={{
              __html: ` 
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);} // nosemgrep 
            gtag('js', new Date());    
            gtag('config', '${process.env.NEXT_PUBLIC_GTAG_CODE}', {
              page_path: window.location.pathname,
            });
          `
            }}
          />
        </>
      )}
    </PDLayout>
  )
}
