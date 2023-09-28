import {
  BlogList,
  Button,
  Column,
  Flex,
  Grid,
  H1,
  H2,
  H3,
  H6,
  Hr,
  MediaNinja,
  Paragraph,
  Reveal,
  RevealImage,
  Section,
  SectionCta,
  SectionScrollable,
  ShortTermGoals
} from '@components'
import { colors, spacing } from '@variables'
import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import imageGradientTwo from 'public/images/gradient-variation-two.webp'
import imageRoadmapHero from 'public/images/roadmapHero.webp'
import React from 'react'
import { LongTermGoals } from 'src/components/shared/LongTermGoals'

const Roadmap: NextPage = () => {
  const router = useRouter()

  const pillars = [
    {
      subtitle: 'Innovation',
      title: 'What we want to achieve',
      description:
        'Our bottom line is not our end goal. We genuinely believe that utilizing Blockchain technology and digital assets economics are catalysts for numerous trailblazing prospects. The digital assets mining infrastructure development helps the energy infrastructure not just in remote corners of the world but also globally. This is the legacy  we want to bestow on the world.'
    },
    {
      subtitle: 'Advancement',
      title: 'How big spenders help',
      description:
        'Data centers are the first customer of remote sustainable energy sources and communities, and our workload bring balance to the asynchronously stressed electrical grid. The industry was enabled in 2019 when telecommunication companies began deploying the fifth-generation technology standard for broadband cellular networks worldwide.'
    },
    {
      subtitle: 'Realization',
      title: 'Putting words into action',
      description:
        'When broken down into bite-size objectives, even the most inconceivable visions can become a worthwhile reality. We have laid out our plans before us. We are working hard to involve local stakeholders, collaborate with non-compete industries regarding waste heat usage, and ultimately become a standard in the industry and eligible for IPO.'
    }
  ]
  const shortTermGoals = [
    { complete: false, text: 'Expand throughout Sweden' },
    { complete: false, text: 'Deploy 43 MW intended for self-mining' },
    {
      complete: true,
      text: 'Establish a professional operational team on site'
    },
    { complete: false, text: 'Construct PoW for waste heat usage' },
    {
      complete: false,
      text: "Replace the district's current wood pellet heating process"
    },
    {
      complete: true,
      text: 'Partner up with non-compete industries for heat valorization'
    },
    {
      complete: false,
      text: 'Strengthen relationships with existing partners'
    },
    {
      complete: false,
      text: 'Build long-term relationships with the communities'
    },
    { complete: false, text: 'Expand Proof-of-Concept to Norway' }
  ]

  const longTermGoals = [
    { text: 'Grow Scandinavian operations' },
    { text: 'Reinforce the existing power infrastructure' },
    { text: 'Establish operations in North America and the Nordics' },
    { text: 'Expand the operational team globally' },
    { text: 'Become a standard in the industry' },
    { text: 'Plan an IPO by 2025 - 2026' }
  ]
  return (
    <>
      <Head>
        <title>Roadmap to success | Prosperity Digital</title>

        <meta
          name="description"
          content="Take a deep dive into the action plan we have laid out to see how you can embark on our vision to disrupt the digital assets landscape."
        />

        <meta
          name="twitter:title"
          content="Roadmap to success | Prosperity Digital"
        />
        <meta
          name="twitter:description"
          content="Take a deep dive into the action plan we have laid out to see how you can embark on our vision to disrupt the digital assets landscape."
        />
        <meta
          property="og:title"
          content="Roadmap to success | Prosperity Digital"
        />
        <meta
          property="og:description"
          content="Take a deep dive into the action plan we have laid out to see how you can embark on our vision to disrupt the digital assets landscape."
        />
      </Head>
      {/*
       * Hero
       */}
      <Section
        backgroundColor={colors.grayscale.x400}
        paddingBottomDesktop="0"
        paddingBottomLaptop="0"
        paddingBottomMobile="0"
        paddingBottomTablet="0"
      >
        <Grid backgroundColor={colors.grayscale.x400}>
          <MediaNinja showOnLaptop showOnDesktop>
            <Column gridColumnLaptop="span 3">
              <RevealImage
                coverColor={colors.grayscale.x400}
                imageHeight={imageRoadmapHero.height}
                imageSrc={imageRoadmapHero.src}
                imageWidth={imageRoadmapHero.width}
              />
            </Column>
          </MediaNinja>

          <Column gridColumnLaptop="7/12">
            <Flex
              flexDirection="column"
              elementHeight="100%"
              justifyContent="space-between"
            >
              <div>
                <H1 textColor={colors.text.light}>Success is a journey</H1>

                <Paragraph
                  spaceBottomMobile={spacing.space02}
                  spaceBottomLaptop={spacing.space05}
                  textColor={colors.text.light}
                >
                  There are no shortcuts in a stable business model — success is
                  both strategic planning and team effort.
                </Paragraph>
              </div>

              <MediaNinja showOnMobile showOnTablet>
                <Column
                  gridColumnLaptop="span 4"
                  spaceBottomMobile={spacing.space02}
                >
                  <RevealImage
                    coverColor={colors.grayscale.x400}
                    imageHeight={imageRoadmapHero.height}
                    imageSrc={imageRoadmapHero.src}
                    imageWidth={imageRoadmapHero.width}
                  />
                </Column>
              </MediaNinja>

              <div>
                <Reveal delay={0.8}>
                  <Paragraph
                    textColor={colors.text.light}
                    spaceBottomMobile="0"
                  >
                    If you want to walk fast, walk alone. But if you want to
                    walk far, walk together - Ratan Tata.
                  </Paragraph>
                </Reveal>
              </div>
            </Flex>
          </Column>
        </Grid>
      </Section>

      {/*
       * PillarsFixed
       */}
      <SectionScrollable
        backgroundColor={colors.grayscale.x400}
        pillars={pillars}
        lineColor={colors.text.light}
        textColor={colors.text.light}
        title="We are not just interested — we are fully committed."
        linePosition="top"
      />

      {/*
       * Short-term & long-term goals
       */}
      <Section>
        <Grid>
          <Column
            gridColumnLaptop="span 8"
            spaceBottomLaptop={spacing.space05}
            spaceBottomMobile={spacing.space04}
          >
            <Reveal>
              <H2>Short-term goals</H2>
            </Reveal>

            <Reveal>
              <Paragraph
                spaceBottomMobile={spacing.space02}
                spaceBottomLaptop={spacing.space05}
              >
                Steps we are taking in 9 - 12 months
              </Paragraph>
            </Reveal>

            <ShortTermGoals shortTermGoals={shortTermGoals} />
          </Column>

          <Column gridColumnLaptop="3/11">
            <Reveal>
              <H2>Long-term goals</H2>
            </Reveal>

            <Reveal>
              <Paragraph
                spaceBottomMobile={spacing.space02}
                spaceBottomLaptop={spacing.space05}
              >
                Where we see ourselves in 1 - 4 years
              </Paragraph>
            </Reveal>

            <LongTermGoals longTermGoals={longTermGoals} />
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
        text="Let’s find out where our needs meet."
      />

      {/*
       * Latest news, blog
       */}
      <Section>
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
              <Button
                buttonType="buttonBlack"
                disabled
                onClick={() => router.push('/news')}
              >
                See archive
              </Button>
            </Reveal>
          </Column>
        </Grid>
      </Section>
    </>
  )
}

export default Roadmap
