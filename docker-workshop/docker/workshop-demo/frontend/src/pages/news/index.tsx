import {
  BlogItem,
  BlogList,
  Column,
  Grid,
  H3,
  H6,
  Hr,
  NavigationLink,
  Paragraph,
  Reveal,
  Section,
  SectionCta
} from '@components'
import { colors, spacing } from '@variables'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import imageGradient from 'public/images/gradient-variation-one.webp'
import imageGradientTwo from 'public/images/gradient-variation-two.webp'
import React from 'react'

const News: NextPage = () => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Latest news | Prosperity Digital</title>

        <meta
          name="description"
          content="Follow the latest updates from the areas of sustainable energy, crypto-asset regulations, equipment, investments and Prosperity Digital."
        />
        <meta name="twitter:title" content="Latest news | Prosperity Digital" />
        <meta
          name="twitter:description"
          content="Follow the latest updates from the areas of sustainable energy, crypto-asset regulations, equipment, investments and Prosperity Digital."
        />
        <meta property="og:title" content="Latest news | Prosperity Digital" />
        <meta
          property="og:description"
          content="Follow the latest updates from the areas of sustainable energy, crypto-asset regulations, equipment, investments and Prosperity Digital."
        />
      </Head>
      {/*
       * Section Hero
       */}
      <Section>
        <Grid>
          <Column gridColumnLaptop="span 6">
            <H3 fontWeight={400}>Our take on the latest industry trends</H3>
          </Column>
        </Grid>
      </Section>

      {/*
       * Featured
       */}
      <Section backgroundImage={imageGradient.src}>
        <Grid>
          <Column spaceBottomMobile={spacing.space03}>
            <H6 spaceBottomMobile={spacing.space04}>Our featured take</H6>
            <BlogItem
              heading={'Crypto-mining in times of energy crisis'}
              titleLeft={'September 13 ― Alexandre Juncker'}
              titleRight={'6 minutes read'}
            />
          </Column>

          <Column gridColumnLaptop="7/13">
            <Paragraph>
              In 2022, the global energy supply is in the middle of turmoil not
              seen for nearly half a century. The shock had been brewing some
              time already, and as of September 2022 has probably not reached
              its peak, expected for the winter. But it is already possible to
              tell that the extent of the impacts will be huge, especially in
              Europe.
            </Paragraph>
            <NavigationLink href={'/news/news-post'}>
              Read my take
            </NavigationLink>
          </Column>
        </Grid>
      </Section>

      {/*
       * Latest news, blog
       */}
      <Section textColor="light">
        <Grid>
          <Column>
            <Reveal>
              <H3 spaceBottomMobile={spacing.space04} gridColumn="span 6">
                Archive
              </H3>
            </Reveal>
            <Reveal>
              <Paragraph spaceBottomMobile={spacing.space03}>
                September takes
              </Paragraph>
            </Reveal>

            <BlogList />

            <Hr
              gridColumn="1/-1"
              color={colors.grayscale.x400}
              spaceBottom={spacing.space01}
              spaceTop={spacing.space05}
            />
          </Column>
        </Grid>
      </Section>

      {/*
       * Contact CTA
       */}
      <SectionCta
        action={() => router.push('/contact')}
        backgroundImage={imageGradientTwo.src}
        buttonText="Get in touch"
        text="Open a dialog with Prosperity Digital executives on a tiered
          investment approach"
      />
    </>
  )
}

export default News
