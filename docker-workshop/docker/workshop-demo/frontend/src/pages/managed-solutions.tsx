import {
  BackgroundHeroGrid,
  BlogList,
  BusinessBlockLink,
  Button,
  Column,
  Flex,
  Grid,
  H1,
  H2,
  H3,
  H6,
  Hero,
  Hr,
  Link,
  MediaNinja,
  Paragraph,
  PlainText,
  Reveal,
  RevealImage,
  Section,
  SectionCta,
  SectionScrollable
} from '@components'
import { SvgIconArrowRightCircle } from '@svg'
import { colors, spacing, typography } from '@variables'
import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import imgDataCenter from 'public/images/dataCenter.webp'
import imageGradient from 'public/images/gradient-variation-one.webp'
import imageManagedSolutionsHero from 'public/images/hero-managed-solutions.webp'
import imageDigitalAssetsHeroMobile from 'public/images/managed-solutions.webp'
import imageManagedSolution from 'public/images/managedSolutions.svg'

const ManagedSolutions: NextPage = () => {
  const router = useRouter()

  const pillars = [
    {
      subtitle: 'Scalability',
      title: 'Capacity sizing resolved',
      description:
        "Innovative and proficient management of decentralized mining operations makes a difference in the data center business. We are always on the lookout for capacity sharing and cohabitation opportunities — simply put, it's good business to share resources."
    },
    {
      subtitle: 'Management',
      title: 'Mission critical reliability',
      description:
        "Well-organized data center reliability engineers make sure facilities under Prosperity Digitals' governance operate with world-class uptime. Data center management includes monitoring, troubleshooting, and optimization to ensure stable mining operations."
    },
    {
      subtitle: 'Transparency',
      title: 'Blockchain built-in mechanism',
      description:
        'High-value assets in the blockchain industry come with inevitable high risk and require open-book transparency. The managed solutions tiered approach lets you determine how deeply you want to be involved in daily operations — confident about doing it all.'
    }
  ]

  return (
    <>
      <Head>
        <title>
          Digital assets mining hosting service | Prosperity Digital
        </title>

        <meta
          name="description"
          content="Host your mining operations and boost your revenue by utilizing our hosting services as a part of our fully managed data centers."
        />

        <meta
          name="twitter:title"
          content="Digital assets mining hosting service | Prosperity Digital"
        />
        <meta
          name="twitter:description"
          content="Host your mining operations and boost your revenue by utilizing our hosting services as a part of our fully managed data centers."
        />
        <meta
          property="og:title"
          content="Digital assets mining hosting service | Prosperity Digital"
        />
        <meta
          property="og:description"
          content="Host your mining operations and boost your revenue by utilizing our hosting services as a part of our fully managed data centers."
        />
      </Head>
      {/*
       * Section Hero
       */}
      <Hero
        backgroundImageLaptop={imageManagedSolutionsHero.src}
        gridColumnLaptop="span 7"
        visualsMobile={
          <Image
            alt="hero"
            height={imageDigitalAssetsHeroMobile.height}
            src={imageDigitalAssetsHeroMobile.src}
            width={imageDigitalAssetsHeroMobile.width}
            priority
          />
        }
        visualsDesktop={
          <BackgroundHeroGrid
            imageHeight={imageManagedSolution.height}
            imageSrc={imageManagedSolution.src}
            imageWidth={imageManagedSolution.width}
          />
        }
      >
        <H1 fontWeight={400}>
          Host your mining operations, utilizing our managed solutions and
          services
        </H1>

        <Paragraph spaceBottomMobile={spacing.space02}>
          Running small-scale mining operations is proven to be costly as miners
          are often operating on margin. Utilize Prosperity Digitals&apos;
          well-developed hosting services and increase your business
          profitability.
        </Paragraph>

        <Reveal>
          <Link
            fontWeight={600}
            textColor={colors.primary.x400}
            href="/contact"
          >
            Get in touch
          </Link>
        </Reveal>
      </Hero>

      {/*
       * PillarsFixed
       */}
      <SectionScrollable
        backgroundColor={colors.grayscale.x400}
        lineColor={colors.text.light}
        linePosition="bottom"
        pillars={pillars}
        textColor={colors.text.light}
        title="Advantages of scalable colocation"
      />

      {/*
       * Business case
       */}
      <Section
        paddingBottomMobile={spacing.space04}
        paddingBottomTablet={spacing.space04}
        paddingBottomLaptop={spacing.space04}
        paddingBottomDesktop={spacing.space04}
        backgroundColor={colors.shades.light.x100}
      >
        <Grid>
          <Column gridColumnLaptop="span 5">
            <Reveal>
              <H2 spaceBottomMobile={spacing.space03}>
                Joining forces made easy
              </H2>
            </Reveal>

            <Reveal>
              <Paragraph spaceBottomMobile={spacing.space01}>
                If you want to walk fast, walk alone. But if you want to walk
                far, walk together.
              </Paragraph>

              <Paragraph
                spaceBottomMobile={spacing.space04}
                spaceBottomLaptop={spacing.space05}
              >
                - Ratan Tata
              </Paragraph>
            </Reveal>
          </Column>

          <Column
            spaceBottomMobile={spacing.space03}
            spaceBottomLaptop={spacing.space04}
          >
            <BusinessBlockLink
              title="You run a small-scale mining operation"
              description="Your data center development is both CapEX and OpEX intensive, and your operation grows from micro to small-scale? Share our smart resources."
              iconDesktop={<SvgIconArrowRightCircle />}
              href="/contact?t=hosting"
            />

            <BusinessBlockLink
              title="You have ASIC miners"
              description="Host your Bitcoin ASIC mining machines in our data centers and affirm we meet all conditions necessary for long-term digital asset mining success."
              iconDesktop={<SvgIconArrowRightCircle />}
              href="/contact?t=hosting"
            />
            <BusinessBlockLink
              title="You lack the time"
              description="Deploy non-mission critical mining infrastructure by utilizing our managed solutions and enable a stable and continuous revenue stream."
              iconDesktop={<SvgIconArrowRightCircle />}
              href="/contact?t=hosting"
            />

            <BusinessBlockLink
              title="You lack the resources"
              description="Building an expert team is our business; keep your eyes on the prize, focus on business development, and leave the micromanagement to us."
              iconDesktop={<SvgIconArrowRightCircle />}
              href="/contact?t=hosting"
            />
          </Column>

          <Column gridColumnLaptop="span 8">
            <Reveal>
              <Flex spaceBottom={spacing.space01}>
                <Link href="/contact" textColor={colors.primary.x500}>
                  A customized approach is what is needed - we are eager to find
                  out more.
                </Link>
              </Flex>
            </Reveal>

            <Reveal>
              <Hr spaceBottom={spacing.space01} color={colors.primary.x500} />
            </Reveal>

            <Reveal>
              <MediaNinja showOnLaptop showOnDesktop>
                <Flex justifyContent="right">
                  <Button
                    buttonType="buttonBlack"
                    onClick={() => router.push('/contact')}
                  >
                    Get in touch
                  </Button>
                </Flex>
              </MediaNinja>

              <MediaNinja showOnMobile showOnTablet>
                <Button
                  buttonType="buttonBlack"
                  onClick={() => router.push('/contact')}
                >
                  Get in touch
                </Button>
              </MediaNinja>
            </Reveal>
          </Column>
        </Grid>
      </Section>

      {/*
       * Data center
       */}
      <Section
        paddingInlineMobile="0"
        paddingTopMobile="0"
        paddingBottomMobile="0"
      >
        <Grid
          backgroundColor={colors.background.dark}
          paddingBlock={spacing.space03}
          paddingInline={spacing.grid.wrapper}
        >
          <Column gridColumnLaptop="1/6">
            <Flex flexDirection="column" elementHeight="100%">
              <div>
                <Reveal>
                  <PlainText
                    textColor={colors.text.light}
                    fontSize={typography.fontSize.heading05}
                  >
                    Certification matters
                  </PlainText>
                </Reveal>

                <Reveal>
                  <H2
                    spaceBottomMobile={spacing.space05}
                    textColor={colors.text.light}
                  >
                    Data center reliability management
                  </H2>
                </Reveal>
              </div>

              <div>
                <Reveal>
                  <Paragraph textColor={colors.text.light}>
                    Business continuity management systems — ISO 22301:2019
                  </Paragraph>
                  <Hr heavy></Hr>
                </Reveal>

                <Reveal>
                  <Paragraph textColor={colors.text.light}>
                    Security management systems — ISO/IEC 27001:2013
                  </Paragraph>
                  <Hr heavy></Hr>
                </Reveal>

                <Reveal>
                  <Paragraph textColor={colors.text.light}>
                    Quality management systems — ISO 9001:2015
                  </Paragraph>
                  <Hr heavy></Hr>
                </Reveal>

                <Reveal>
                  <Paragraph textColor={colors.text.light}>
                    Uptime institute accredited tier 4 designer — ATD TIER 3644
                  </Paragraph>
                  <Hr spaceBottom={spacing.space02} heavy></Hr>
                </Reveal>

                <Reveal>
                  <Paragraph textColor={colors.text.light}>
                    Our data center engineering team specializes in
                    infrastructure development, deployment, management, and
                    optimization, executing standardized procedures in-line with
                    certified systems.
                  </Paragraph>

                  <Paragraph
                    textColor={colors.text.light}
                    spaceBottomMobile={spacing.space02}
                  >
                    Your operation is safe with Prosperity Digital&apos;s
                    advisory network, which specializes in energy, finance,
                    digital-asset taxation, compliance, and audit — to name a
                    few.
                  </Paragraph>
                </Reveal>

                <MediaNinja showOnLaptop showOnDesktop>
                  <Reveal>
                    <Button
                      buttonType="buttonBlue"
                      onClick={() => router.push('/contact')}
                    >
                      Get in touch
                    </Button>
                  </Reveal>
                </MediaNinja>
              </div>
            </Flex>
          </Column>

          <Column gridColumnLaptop="7/13">
            <RevealImage
              coverColor={colors.background.dark}
              imageHeight={imgDataCenter.height}
              imageSrc={imgDataCenter.src}
              imageWidth={imgDataCenter.width}
            />

            <MediaNinja showOnMobile showOnTablet>
              <Reveal>
                <Flex spaceTop={spacing.space01}>
                  <Button
                    buttonType="buttonBlue"
                    onClick={() => router.push('/contact')}
                  >
                    Get in touch
                  </Button>
                </Flex>
              </Reveal>
            </MediaNinja>
          </Column>
        </Grid>
      </Section>

      {/*
       * Contact CTA
       */}
      <SectionCta
        action={() => router.push('/contact')}
        backgroundImage={imageGradient.src}
        backgroundColor={colors.background.body}
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

export default ManagedSolutions
