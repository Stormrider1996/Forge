import {
  BlogList,
  Button,
  Column,
  Flex,
  Grid,
  H1,
  H2,
  H3,
  H5,
  H6,
  Hr,
  Link,
  Paragraph,
  Parallax,
  Reveal,
  Section,
  SectionCta,
  SectionScrollable
} from '@components'
import { colors, spacing } from '@variables'
import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import imageCompanyPerson from 'public/images/company-person.webp'
import imageCompanyHero from 'public/images/companyHero.webp'
import imageExpertise from 'public/images/expertise.webp'
import imageGradientTwo from 'public/images/gradient-variation-two.webp'
import React from 'react'

const Company: NextPage = () => {
  const router = useRouter()

  const pillars = [
    {
      subtitle: 'Experience',
      title: 'Professionalism is our forte',
      description:
        'Our strength lies in our operational and advisory team and their in-depth knowledge and first-hand experience, especially in energy, data center development and management industries. '
    },
    {
      subtitle: 'Regulated',
      title: 'Transparency is our policy',
      description:
        "We want to flip the switch on skepticism surrounding digital assets mining, and Switzerland's digital currency regulations grant us an opportunity to operate transparently."
    },
    {
      subtitle: 'Pragmatic',
      title: 'Commitment paves our roadmap',
      description:
        'We are unwavering in our decision to use energy rationally, choose readily available sustainable sources, and involve local communities and existing data center infrastructure in the venture. '
    },
    {
      subtitle: 'Compliant',
      title: 'First order of business',
      description:
        'We operate in a fully legal and compliant environment in all jurisdictions, and our self-mining and managed solutions are risk-free.'
    }
  ]

  return (
    <>
      <Head>
        <title>Discover more about our company | Prosperity Digital</title>

        <meta
          name="description"
          content="Join us on our mission to reshape the digital assets mining ecosystem, so they become more fair, inclusive, and sustainable."
        />
        <meta
          name="twitter:title"
          content="Discover more about our company | Prosperity Digital"
        />
        <meta
          name="twitter:description"
          content="Join us on our mission to reshape the digital assets mining ecosystem, so they become more fair, inclusive, and sustainable."
        />
        <meta
          property="og:title"
          content="Discover more about our company | Prosperity Digital"
        />
        <meta
          property="og:description"
          content="Join us on our mission to reshape the digital assets mining ecosystem, so they become more fair, inclusive, and sustainable."
        />
      </Head>
      {/*
       * Section Hero
       */}
      <Section
        paddingBottomMobile="0"
        paddingBottomTablet="0"
        backgroundImage={imageCompanyHero.src}
      >
        <Grid>
          <Column
            gridColumnLaptop="span 6"
            spaceBottomMobile={spacing.space03}
            spaceBottomLaptop="0"
          >
            <H1 fontWeight={400}>
              Vertically integrated sustainable Bitcoin mining company
            </H1>

            <Paragraph spaceBottomMobile={spacing.space02}>
              Prosperity Digital is a vertically-integrated, sustainable digital
              assets mining company with established headquarters in canton of
              Zug, Switzerland.
            </Paragraph>

            <Reveal delay={0.2}>
              <Link
                fontWeight={600}
                textColor={colors.primary.x400}
                href="/contact"
              >
                Get in touch
              </Link>
            </Reveal>
          </Column>

          <Column
            gridColumnLaptop="8/13"
            gridColumnDesktop="9/13"
            spaceBottomMobile="0"
          >
            <Parallax
              containerHeightDesktop="600px"
              imageHeight={imageCompanyPerson.height}
              imageSrc={imageCompanyPerson.src}
              imageWidth={imageCompanyPerson.width}
              travelDistance={0}
            />
          </Column>
        </Grid>
      </Section>

      {/*
       * Pillars
       */}
      <SectionScrollable
        lineColor={colors.shades.light.x50}
        backgroundColor={colors.grayscale.x400}
        textColor={colors.text.light}
        title="What makes us different?"
        pillars={pillars}
        linePosition="bottom"
      />

      {/*
       * Vision & Mission
       */}
      <Section
        id="vision-and-mission"
        backgroundColor={colors.primary.x300}
        textColor={colors.shades.light.x50}
        spaceBottomMobile={spacing.space03}
      >
        <Grid>
          <Column spaceBottomMobile={spacing.space02} gridColumnLaptop="span 6">
            <Reveal>
              <H1 spaceBottomMobile={spacing.space01}>Vision</H1>
            </Reveal>

            <Reveal>
              <H5 spaceBottomMobile={spacing.space01}>Where we aspire to be</H5>
            </Reveal>
            <Reveal>
              <Paragraph spaceBottomMobile="0">
                Prosperity Digital&apos;s vision is to be a global, scalable,
                and sustainable mining data center provider and electrical
                energy provider from renewable sources. Our data centers will
                create new job opportunities for residents and serve as a
                catalyst for other industries.
              </Paragraph>
            </Reveal>
          </Column>

          <Column gridColumnLaptop="7/13" spaceBottomMobile={spacing.space01}>
            <Reveal>
              <H1 spaceBottomMobile={spacing.space01}>Mission</H1>
            </Reveal>

            <Reveal>
              <H5 spaceBottomMobile={spacing.space01}>
                How we will reach our goals
              </H5>
            </Reveal>

            <Reveal>
              <Paragraph spaceBottomMobile="0">
                Prosperity Digital&apos;s mission is to operate scalable mining
                data centers with rational use of energy made possible by
                setting up infrastructure in geopolitically stable countries
                abundant in low-carbon energy sources and natural cooling.
              </Paragraph>
            </Reveal>
          </Column>

          <Column>
            <Reveal>
              <Hr spaceBottom={spacing.space01} heavy />
            </Reveal>

            <Reveal>
              <Flex justifyContent="space-between" alignItems="center">
                <H6 spaceBottomMobile={spacing.space01}>
                  Make a stable investment for the future
                </H6>
                <Button
                  buttonType="buttonBlack"
                  onClick={() => router.push('/contact')}
                >
                  Get in touch
                </Button>
              </Flex>
            </Reveal>
          </Column>
        </Grid>
      </Section>

      {/*
       * Areas of our expertise
       */}
      <Section textColor="light" paddingBottomMobile="0">
        <Grid spaceBottomMobile={spacing.space04}>
          <H2 gridColumn="span 5" spaceBottomMobile={spacing.space04}>
            Areas of our expertise
          </H2>
          <Column spaceBottomMobile={spacing.space04} gridColumnLaptop="1/6">
            <Reveal>
              <Hr color={colors.primary.x500} heavy />
            </Reveal>

            <Reveal>
              <H5
                spaceBottomMobile={spacing.space01}
                spaceBottomLaptop={spacing.space04}
              >
                Eletrical energy and energy distribution
              </H5>
            </Reveal>

            <Reveal>
              <Paragraph>
                With ample experience in energy distribution, supply, and
                offtake agreements, our carefully assembled team of advisors
                helps energize our data centers with hydro, wind, solar, and
                nuclear power.
              </Paragraph>
            </Reveal>
          </Column>

          <Column gridColumnLaptop="7/12">
            <Reveal>
              <Hr color={colors.primary.x500} heavy />
            </Reveal>

            <Reveal>
              <H5
                spaceBottomMobile={spacing.space01}
                spaceBottomLaptop={spacing.space04}
              >
                Data center deployment and management
              </H5>
            </Reveal>

            <Reveal>
              <Paragraph>
                Our specialists possess deep expertise in Bitcoin mining data
                center deployment and operations, respecting the highest
                industry standards regarding profitability, uptime, network,
                auditing, and reporting.
              </Paragraph>
            </Reveal>
          </Column>
        </Grid>

        <Grid>
          <Column
            spaceBottomMobile={spacing.space03}
            spaceBottomLaptop="0"
            gridColumnLaptop="1/6"
          >
            <Reveal>
              <Hr color={colors.primary.x500} heavy />
            </Reveal>

            <Reveal>
              <H5
                spaceBottomMobile={spacing.space01}
                spaceBottomLaptop={spacing.space04}
              >
                Digital assets legal regulations
              </H5>
            </Reveal>

            <Reveal>
              <Paragraph spaceBottomMobile={spacing.space02}>
                Our seasoned legal department is well-versed in the principles
                of digital-asset taxation, energy transmission and distribution
                tariffs, and economic aspects of grid access.
              </Paragraph>
            </Reveal>
            <Reveal>
              <Link textColor={colors.primary.x400} href="/team">
                Get to know the team
              </Link>
            </Reveal>
          </Column>

          <Column gridColumnLaptop="8/12">
            <Parallax
              imageSrc={imageExpertise.src}
              imageWidth={imageExpertise.width}
              imageHeight={imageExpertise.height}
              travelDistance={200}
              containerHeightDesktop="500px"
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

export default Company
