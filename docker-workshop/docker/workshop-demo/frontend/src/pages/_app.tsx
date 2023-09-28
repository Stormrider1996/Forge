import 'src/styles/fonts.css'
import 'src/styles/reset.css'

import { Layout } from '@components'
import { GlobalStyle } from '@styles'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import type { AppProps } from 'next/app'
import Head from 'next/head'

gsap.registerPlugin(ScrollTrigger)

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Prosperity Digital</title>

        <meta
          name="description"
          content="Securing the new financial system and the future of money"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/*
         * Twitter card meta tags
         */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="Place a Twitter site here" />
        <meta
          name="twitter:image"
          content="https://www.prosperitydigital.ch/images/meta_image.jpg"
        />

        {/*
         * Open graph meta tags
         */}
        <meta property="og:site_name" content="Prosperity Digital" />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>

      <GlobalStyle />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
