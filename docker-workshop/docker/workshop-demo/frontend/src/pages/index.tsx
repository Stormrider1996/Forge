import {
  BlockLink,
  BlogList,
  BusinessBlockLink,
  Button,
  CheckList,
  Column,
  Flex,
  Grid,
  H1,
  H2,
  H3,
  H4,
  H6,
  Hero,
  Hr,
  MediaNinja,
  Paragraph,
  Parallax,
  PictogramGrid,
  PictogramGridMobile,
  PlainText,
  Reveal,
  RevealImage,
  Section,
  SectionCta,
  SectionScrollable
} from '@components'
import {
  SvgHydroPower,
  SvgIconArrowRightCircle,
  SvgNuclearPowerPlant,
  SvgSolarPower,
  SvgWindPower
} from '@svg'
import { colors, spacing, typography } from '@variables'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import circleDecorImage from 'public/images/circle-decoration.webp'
import imageGradient from 'public/images/gradient-variation-one.webp'
import imageCheerfulPeople from 'public/images/positive-couple.webp'
import imagePositiveWorkMates from 'public/images/positive-work-mates.webp'
import imageRenewableEnergy from 'public/images/renevable-energy-portrait.webp'

const Home: NextPage = () => {
  const router = useRouter()

  const pillars = [
    {
      subtitle: 'Energy',
      title: 'Leveraging low-carbon sources',
      description:
        'Employing low-carbon energy sources — hydro, wind, solar, nuclear — is not the future but the present. The only way for data centers to move forward is to embrace the rational use of cost-efficient, sustainable energy.'
    },
    {
      subtitle: 'Expertise',
      title: 'Specialists from different fields',
      description:
        'Our team gathers professionals from various domains — energy, data center deployment and operation, digital-asset taxation, investment, etc. — whose combined experience and expertise brings about the change BTC mining community needs.'
    },
    {
      subtitle: 'Infrastructure',
      title: 'Geographically diversified',
      description:
        'Instead of one large power-consuming data center, we build smaller optimized ones located where sustainable energy sources are bountiful. This made Sweden, a geopolitically stable country, the perfect starting point. '
    },
    {
      subtitle: 'Stability',
      title: 'Highly developed digital assets regulations',
      description:
        'The company has its headquarter in Switzerland, a developed European nation with a stable political climate and economy. It is among the first countries to institute government regulations on digital assets, Switzerland continues to refine them, attracting investors and paving the way.'
    }
  ]

  return (
    <>
      <Head>
        <title>
          Mining infrastructure powered by sustainable energy | Prosperity
          Digital
        </title>

        <meta
          name="description"
          content="Prosperity Digital is a global and vertically-integrated, sustainable Bitcoin mining company."
        />
        <meta
          name="twitter:title"
          content=" Mining infrastructure powered by sustainable energy | Prosperity
          Digital"
        />
        <meta
          name="twitter:description"
          content="Prosperity Digital is a global and vertically-integrated, sustainable Bitcoin mining company."
        />
        <meta
          property="og:title"
          content="Mining infrastructure powered by sustainable energy | Prosperity
          Digital"
        />
        <meta
          property="og:description"
          content="Prosperity Digital is a global and vertically-integrated, sustainable Bitcoin mining company."
        />
      </Head>
      {/*
       * Section Hero
       */}
      <Hero
        gridColumnLaptop="span 6"
        gridColumnDesktop="span 6"
        visualsDesktop={
          <Grid>
            <PictogramGrid />
          </Grid>
        }
        visualsMobile={<PictogramGridMobile />}
      >
        <H1 fontWeight={400} hyphens>
          Mining infrastructure powered by sustainable energy.
        </H1>

        <Paragraph spaceBottomMobile="0">
          Get on board the new decentralized financial system with Prosperity
          Digital. We are a global and vertically-integrated, sustainable
          Bitcoin mining company.
        </Paragraph>
      </Hero>

      {/*
       * Change the narative
       */}
      <Section
        textColor={colors.text.light}
        backgroundColor={colors.background.dark}
      >
        <Grid spaceBottomLaptop={spacing.space05}>
          <Column
            spaceBottomMobile={spacing.space04}
            spaceBottomLaptop="0"
            gridColumnLaptop="span 5"
            gridRowLaptop="1/-1"
          >
            <Reveal>
              <H2
                spaceBottomMobile={spacing.space03}
                spaceBottomLaptop={spacing.space05}
              >
                Changing the narrative
              </H2>
            </Reveal>

            <Reveal>
              <H3 fontFamily={typography.fontFamily.text}>The misconception</H3>
            </Reveal>

            <Reveal>
              <Paragraph spaceBottomMobile={spacing.space02}>
                There&apos;s a misconception that the digital assets mining
                industry is a huge energy consumer that contributes little to
                nothing to the communities in which their data centers are
                located. There is, however, a huge flaw with this “taker, not a
                giver” narrative.
              </Paragraph>
            </Reveal>

            <Reveal>
              <Hr spaceBottom={spacing.space02} />
            </Reveal>

            <Reveal>
              <H3 fontFamily={typography.fontFamily.text}>The reality</H3>
            </Reveal>

            <Reveal>
              <Paragraph spaceBottomMobile={spacing.space03}>
                Data centers are large energy consumers, no matter what they are
                used for.
              </Paragraph>
            </Reveal>

            <Reveal>
              <BlockLink href="#">Read the survey</BlockLink>
            </Reveal>
          </Column>

          <Column
            gridColumnLaptop="9/13"
            gridRowMobile="2"
            gridRowLaptop="1/-1"
          >
            <Image
              src={circleDecorImage.src}
              width={circleDecorImage.width}
              height={circleDecorImage.height}
              alt="decor"
            />
          </Column>

          <Column
            spaceTopMobile={spacing.space04}
            spaceTopLaptop="0"
            gridColumnLaptop="7/11"
            gridRowMobile="2"
            gridRowLaptop="1/-1"
            spaceBottomMobile={spacing.space03}
          >
            <Parallax
              imageSrc={imageRenewableEnergy.src}
              imageWidth={imageRenewableEnergy.width}
              imageHeight={imageRenewableEnergy.height}
              travelDistance={300}
            />
          </Column>
        </Grid>

        <Grid
          spaceBottomLaptop={spacing.space04}
          spaceBottomDesktop={spacing.space05}
        >
          <Column gridColumnLaptop="span 6" gridRowLaptop="1">
            <Reveal>
              <H2
                spaceBottomMobile={spacing.space02}
                textColor={colors.secondary.x400}
              >
                How is Prosperity Digital different?
              </H2>
            </Reveal>

            <Reveal delay={0.2}>
              <Paragraph
                spaceBottomMobile={spacing.space01}
                spaceBottomLaptop={spacing.space03}
              >
                We focus our efforts on:
              </Paragraph>
            </Reveal>
          </Column>

          <Column
            spaceBottomMobile={spacing.space03}
            spaceBottomLaptop="0"
            gridColumnLaptop="span 8"
          >
            <CheckList
              list={[
                'Data centers in areas with abundant sustainable energy sources',
                'Reinforcing the existing power infrastructure',
                'Creating job opportunities for the local community'
              ]}
            />
          </Column>
        </Grid>

        <Grid>
          <Column spaceBottomMobile={spacing.space03} gridColumnLaptop="1/4">
            <Reveal>
              <Flex gapMobile="8px" spaceBottom="22px">
                <SvgHydroPower width={90} fill={colors.text.light} />
                <SvgWindPower width={90} fill={colors.text.light} />
              </Flex>

              <Flex
                gapMobile={spacing.baseSpacing}
                spaceBottom={spacing.spaceSmall}
              >
                <SvgSolarPower width={90} fill={colors.text.light} />
                <SvgNuclearPowerPlant width={60} fill={colors.secondary.x400} />
              </Flex>
            </Reveal>
          </Column>
          <Column gridColumnLaptop="4/10">
            <Reveal delay={0.2}>
              <H3>Where to start the change?</H3>
            </Reveal>

            <Reveal delay={0.3}>
              <Paragraph>
                We opted for Sweden, a geopolitically stable country with vast
                hydro reservoirs and wind parks. This setting enables making a
                profit while paving the way to a low-carbon economy.
              </Paragraph>
            </Reveal>

            <Reveal delay={0.4}>
              <Paragraph spaceBottomMobile={spacing.space02}>
                We want to take part in this venture and strengthen digital
                assets position as the future of money.
              </Paragraph>
            </Reveal>

            <Reveal delay={0.5}>
              <Button
                buttonType="buttonGreen"
                onClick={() => router.push('/company#vision-and-mission')}
              >
                Join our vision
              </Button>
            </Reveal>
          </Column>
        </Grid>
      </Section>

      {/*
       * Our business case
       */}
      <Section textColor="light">
        <Grid spaceBottomMobile="0">
          <Column gridColumnLaptop="span 5">
            <Reveal>
              <H2
                spaceBottomLaptop={spacing.space03}
                spaceBottomMobile={spacing.space02}
              >
                Our business case
              </H2>
            </Reveal>

            <Reveal>
              <Paragraph spaceBottomMobile={spacing.space03}>
                Let’s see how you, too, can join our venture. The resources
                include hosting, energy, energy distribution, network, data
                center management, and maintenance.
              </Paragraph>
            </Reveal>
          </Column>

          <Column gridColumnLaptop="1/-1">
            <BusinessBlockLink
              title="Digital assets self-mining"
              description="Diversify your asset portfolio and invest in the Blockchain infrastructure of the future to ensure future financial stability."
              iconDesktop={<SvgIconArrowRightCircle />}
              href="/self-mining"
            />

            <BusinessBlockLink
              title="Managed solutions and services"
              description="Choose a long-term, reliable, and stable partner for long-term digital assets cloud mining. We do the heavy lifting for you."
              iconDesktop={<SvgIconArrowRightCircle />}
              href="/managed-solutions"
            />
          </Column>
        </Grid>
      </Section>

      {/*
       * Pillars
       */}
      <SectionScrollable
        backgroundImage={imageGradient.src}
        lineColor={colors.primary.x500}
        linePosition="bottom"
        pillars={pillars}
        textColor={colors.text.dark}
        title="Our company pillars"
      />

      {/*
       * Tips
       */}
      <Section paddingBottomMobile="0">
        <Grid spaceBottomLaptop={spacing.space04}>
          <H2
            spaceBottomMobile={spacing.space04}
            spaceBottomLaptop={spacing.space04}
          >
            What we aim to accomplish
          </H2>
          <Column
            spaceBottomMobile={spacing.space04}
            spaceBottomLaptop="0"
            gridColumnLaptop="1/6"
          >
            <Reveal>
              <Flex
                gapMobile={spacing.spaceSmall}
                spaceBottom={spacing.space01}
              >
                <SvgHydroPower width={90} />
                <SvgWindPower width={90} />
              </Flex>
            </Reveal>

            <Reveal>
              <Hr color={colors.primary.x500} heavy />
            </Reveal>

            <Reveal>
              <H4
                spaceBottomMobile={spacing.space01}
                spaceBottomLaptop={spacing.space04}
              >
                Expansion in Sweden
              </H4>
            </Reveal>

            <Reveal>
              <Paragraph>
                By aiming to reach net-zero greenhouse gas emissions by 2045,
                Sweden provides the perfect conditions for incorporating social
                responsibility into the mining industry.
              </Paragraph>
            </Reveal>
          </Column>

          <Column
            spaceBottomMobile={spacing.space04}
            spaceBottomLaptop="0"
            gridColumnLaptop="7/12"
          >
            <Reveal>
              <Flex
                gapMobile={spacing.spaceSmall}
                spaceBottom={spacing.space01}
              >
                <SvgNuclearPowerPlant width={90} />
                <SvgSolarPower width={90} />
              </Flex>
            </Reveal>

            <Reveal>
              <Hr color={colors.primary.x500} heavy />
            </Reveal>

            <Reveal>
              <H4 spaceBottomLaptop={spacing.space04}>
                Global decentralization
              </H4>
            </Reveal>

            <Reveal>
              <Paragraph>
                Focusing on regions with renewable energy and highly developed
                legal frameworks related to digital assets mining has pointed to
                North America and Nordic countries as key locations.
              </Paragraph>
            </Reveal>
          </Column>
        </Grid>

        <Grid>
          <Column spaceBottomMobile={spacing.space03} gridColumnLaptop="1/6">
            <Reveal>
              <Hr color={colors.primary.x500} heavy />
            </Reveal>

            <Reveal>
              <H4 spaceBottomLaptop={spacing.space04}>New partnerships</H4>
            </Reveal>

            <Reveal>
              <Paragraph>
                Improving energy efficiency demands strategic partnerships with
                non-compete industries to achieve consensus regarding heat
                valorization under a circular economy model.
              </Paragraph>
            </Reveal>
          </Column>

          <Column gridColumnLaptop="8/12">
            <Parallax
              imageSrc={imageCheerfulPeople.src}
              imageWidth={imageCheerfulPeople.width}
              imageHeight={imageCheerfulPeople.height}
              travelDistance={200}
              containerHeightDesktop="600px"
            />
          </Column>
        </Grid>
      </Section>

      {/*
       * Contact CTA
       */}
      <SectionCta
        action={() => router.push('/contact')}
        backgroundImage={imageGradient.src}
        buttonText="Get in touch"
        text="Let’s find out where our needs meet."
      />

      {/*
       * Team expertise
       */}
      <Section paddingInlineMobile="0" paddingTopMobile="0">
        <Grid
          backgroundColor={colors.background.dark}
          paddingBlock={spacing.space03}
          paddingInline={spacing.grid.wrapper}
        >
          <Column gridColumnLaptop="1/6">
            <Flex
              elementHeight="100%"
              flexDirection="column"
              justifyContent="space-between"
            >
              <div>
                <Reveal>
                  <PlainText
                    textColor={colors.text.light}
                    fontSize={typography.fontSize.heading05}
                  >
                    Expertise of our team
                  </PlainText>
                </Reveal>

                <Reveal>
                  <H2
                    spaceBottomLaptop={spacing.space05}
                    textColor={colors.text.light}
                  >
                    Professionals that rise to the challenge
                  </H2>
                </Reveal>
              </div>

              <div>
                <Reveal>
                  <Paragraph textColor={colors.text.light}>
                    Our advisory network and operational team specialize in
                    different fields — energy, data centers deployment and
                    management, finance, digital-asset taxation, compliance,
                    audit — to name a few. Their comprehensive experience and
                    skillsets ensure we take part in the global energy
                    transition strategy and decentralized financial system.
                  </Paragraph>
                </Reveal>

                <MediaNinja showOnLaptop showOnDesktop>
                  <Reveal>
                    <Button
                      buttonType="buttonBlue"
                      onClick={() => router.push('/team')}
                    >
                      Meet our team
                    </Button>
                  </Reveal>
                </MediaNinja>
              </div>
            </Flex>
          </Column>

          <Column gridColumnLaptop="7/13">
            <RevealImage
              coverColor={colors.background.dark}
              imageHeight={imagePositiveWorkMates.height}
              imageSrc={imagePositiveWorkMates.src}
              imageWidth={imagePositiveWorkMates.width}
            />

            <MediaNinja showOnMobile showOnTablet>
              <Reveal>
                <Flex spaceTop={spacing.space01}>
                  <Button
                    buttonType="buttonBlue"
                    onClick={() => router.push('/team')}
                  >
                    Meet our team
                  </Button>
                </Flex>
              </Reveal>
            </MediaNinja>
          </Column>
        </Grid>
      </Section>

      {/*
       * Latest news, blog
       */}
      <Section
        paddingTopMobile="0"
        paddingTopDesktop="0"
        paddingTopLaptop="0"
        paddingTopTablet="0"
      >
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

export default Home
