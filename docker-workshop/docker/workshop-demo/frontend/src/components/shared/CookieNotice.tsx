import {
  Button,
  Column,
  Flex,
  Grid,
  Hr,
  Paragraph,
  PlainText
} from '@components'
import { cookieState } from '@states'
import { breakpoints, colors, spacing, typography } from '@variables'
import { getCookie, setCookie } from 'cookies-next'
import Link from 'next/link'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const PDCookieNotice = styled.div`
  background-color: ${colors.secondary.x50};
  bottom: 0;
  left: 0;
  padding-block: ${spacing.space01};
  padding-inline: ${spacing.grid.wrapper};
  position: fixed;
  width: 100%;
  z-index: 9;

  a {
    color: ${colors.text.dark};
    text-decoration: underline;

    &:hover {
      color: ${colors.primary.x500};
    }
  }
`

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.spaceSmall};

  @media (min-width: ${breakpoints.desktop}) {
    gap: ${spacing.space01};
  }
`

export const CookieNotice = () => {
  const { setNecessaryCookiesAccepted, setAllCookiesAccepted } = cookieState()
  const hasCookie = !!getCookie('cookie_control')

  const [showNotice, setShowNotice] = useState(false)

  const ref = useRef() as MutableRefObject<HTMLDivElement>

  const setCookiePreferences = (key: string, data: string) => {
    const nowDate = new Date()
    const expiryDate = `${nowDate.getMonth()}-${nowDate.getDate()}-${
      nowDate.getFullYear() + 5
    }`

    if (!expiryDate) {
      return
    }

    if (data === 'all') {
      setAllCookiesAccepted()

      setCookie(key, data, {
        expires: new Date(expiryDate)
      })
    }

    if (data === 'necessary') {
      setNecessaryCookiesAccepted()

      setCookie(key, data, {
        expires: new Date(expiryDate)
      })
    }

    setShowNotice(false)
  }

  useEffect(() => {
    if (!hasCookie) {
      setShowNotice(true)
    }
  }, [hasCookie])

  if (!showNotice) {
    return null
  }

  return (
    <PDCookieNotice ref={ref}>
      <Grid>
        <Column>
          <Flex justifyContent="space-between" alignItems="flex-start">
            <PlainText
              fontSize={typography.fontSize.heading05}
              fontWeight="400"
              spaceBottom={spacing.space02}
            >
              We use cookies
            </PlainText>
          </Flex>

          <Paragraph textColor={colors.grayscale.x300}>
            We use cookies to enhance your browsing experience, serve
            personalized ads and content and analyze our traffic. By clicking
            “Accept all”, you consent to our use of cookies. For more details,
            please visit our{' '}
            <Link href="/legals/cookie-policy">Cookie Policy</Link> and{' '}
            <Link href="/legals/privacy-policy">Privacy Policy</Link> pages.
          </Paragraph>

          <Hr spaceBottom={spacing.space01} color={colors.grayscale.x500} />

          <ButtonContainer>
            <Button
              buttonType="buttonBlack"
              onClick={() => setCookiePreferences('cookie_control', 'all')}
            >
              Accept all
            </Button>
            <Button
              buttonType="buttonOutlineBlack"
              onClick={() =>
                setCookiePreferences('cookie_control', 'necessary')
              }
            >
              Only necessary
            </Button>
          </ButtonContainer>
        </Column>
      </Grid>
    </PDCookieNotice>
  )
}
