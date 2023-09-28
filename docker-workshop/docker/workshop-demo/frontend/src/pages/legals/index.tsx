import {
  BlogList,
  Button,
  Column,
  Grid,
  H3,
  H6,
  Hr,
  LegalsBlockLink,
  Paragraph,
  Reveal,
  Section
} from '@components'
import { colors, spacing } from '@variables'
import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import imageLegal from 'public/images/legals-hero-image.webp'

const legals: NextPage = () => {
  return (
    <>
      <Head>
        <title>Legals | Prosperity Digital</title>

        <meta
          name="description"
          content="Get acquainted with Prosperity Digital’s legal documentation — Terms and Conditions, Cookies Policy, and Privacy Notice."
        />
        <meta name="twitter:title" content="Legals | Prosperity Digital" />
        <meta
          name="twitter:description"
          content="Get acquainted with Prosperity Digital’s legal documentation — Terms and Conditions, Cookies Policy, and Privacy Notice."
        />
        <meta property="og:title" content="Legals | Prosperity Digital" />
        <meta
          property="og:description"
          content="Get acquainted with Prosperity Digital’s legal documentation — Terms and Conditions, Cookies Policy, and Privacy Notice."
        />
      </Head>
      {/*
       * Section Hero
       */}
      <Section
        backgroundColor={colors.grayscale.x400}
        paddingBottomLaptop={spacing.space04}
        textColor={colors.text.light}
      >
        <Grid>
          <Column gridColumnLaptop="span 6" spaceBottomLaptop={spacing.space04}>
            <Reveal>
              <H3>Legals</H3>
            </Reveal>
          </Column>
          <Column gridColumnLaptop="span 6">
            <Reveal>
              <Paragraph>
                Fairness and transparency are the core of our sustainable
                business Our seasoned legal department ensures that Prosperity
                Digitals&apos; terms and policies are transparent. We
                established our headquarters in canton of Zug, Switzerland, and
                comply with all local laws and regulations.
              </Paragraph>
            </Reveal>
          </Column>

          <Column
            spaceBottomLaptop={spacing.space05}
            spaceBottomMobile={spacing.space02}
          >
            <Image
              src={imageLegal.src}
              sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
              width={imageLegal.width}
              height={imageLegal.height}
              alt="legals"
              unoptimized
            />
          </Column>
          <Column gridColumnLaptop="span 8" spaceBottomLaptop={spacing.space05}>
            <LegalsBlockLink
              title={'Terms and conditions'}
              href="/legals/terms-and-conditions"
            />
            <LegalsBlockLink
              title={'Cookie policy'}
              href="/legals/cookie-policy"
            />
            <LegalsBlockLink
              title={'Privacy policy'}
              href="/legals/privacy-policy"
            />
          </Column>
        </Grid>
      </Section>

      {/*
       * Latest news, blog
       */}
      <Section textColor="light">
        <Grid>
          <Column>
            <H3 spaceBottomMobile={spacing.space04} gridColumn="span 6">
              Latest news
            </H3>

            <BlogList />

            <Hr
              gridColumn="1/-1"
              color={colors.grayscale.x400}
              spaceBottom={spacing.space01}
            />

            <Reveal>
              <H6 spaceBottomMobile={spacing.space01}>
                Read more insightful information on our news blog
              </H6>
            </Reveal>
          </Column>

          <Column>
            <Reveal>
              <Button buttonType="buttonBlack" disabled>
                See archive
              </Button>
            </Reveal>
          </Column>
        </Grid>
      </Section>
    </>
  )
}

export default legals
