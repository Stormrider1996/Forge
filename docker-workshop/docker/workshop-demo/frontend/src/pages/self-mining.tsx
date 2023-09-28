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
  H4,
  H6,
  Hero,
  Hr,
  Link,
  Paragraph,
  Parallax,
  Reveal,
  Section,
  SectionCta,
  SectionScrollable
} from '@components'
import {
  SvgDataCenter,
  SvgDataCenterLoading,
  SvgDecentralization,
  SvgIconArrowRightCircle
} from '@svg'
import { colors, spacing } from '@variables'
import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import imageDam from 'public/images/dam.webp'
import imgDigitalAssetGrid from 'public/images/digitalAssetGrid.svg'
import imageGradient from 'public/images/gradient-variation-one.webp'
import imageGradientThree from 'public/images/gradient-variation-three.webp'
import imageDigitalAssetsHero from 'public/images/hero-self-mining.webp'
import imageDigitalAssetsHeroMobile from 'public/images/self-mining.webp'

const SelfMining: NextPage = () => {
  const router = useRouter()

  const pillars = [
    {
      subtitle: 'Now',
      title: 'Digital assets self-mining',
      description:
        'Modern civilization habitat is centralized, creating an energy surplus in remote areas. Prosperity Digital facilitates that energy surplus by deploying fragments of decentralized large-scale Bitcoin mining operations in sparsely inhabited locations.'
    },
    {
      subtitle: 'Future',
      title: 'Consensus mechanisms',
      description:
        "Prosperity Digital's vision is to develop sustainable compute capacity infrastructure for Proof-of-Work (PoW) consensus mechanism, running on low-carbon sustainable energy sources in stable geopolitical regions."
    },
    {
      subtitle: '2049',
      title: 'Think of future generations',
      description:
        "We are deeply committed to preserving the environment, and we believe blockchain is more than another disruptive technology. It's an opportunity to reshape our world, build purposely in uninhabitable locations, and develop remote sustainable energy sources."
    }
  ]

  return (
    <>
      <Head>
        <title>Digital assets self-mining service | Prosperity Digital</title>

        <meta
          name="description"
          content="Secure a continuous revenue stream and help reshape our institutions by taking part in sustainable digital assets self-mining."
        />
        <meta
          name="twitter:title"
          content="Digital assets self-mining service | Prosperity Digital"
        />
        <meta
          name="twitter:description"
          content="Secure a continuous revenue stream and help reshape our institutions by taking part in sustainable digital assets self-mining."
        />
        <meta
          property="og:title"
          content="Digital assets self-mining service | Prosperity Digital"
        />
        <meta
          property="og:description"
          content="Secure a continuous revenue stream and help reshape our institutions by taking part in sustainable digital assets self-mining."
        />
      </Head>
      {/*
       * Section Hero
       */}
      <Hero
        backgroundImageLaptop={imageDigitalAssetsHero.src}
        gridColumnLaptop="span 8"
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
            imageHeight={imgDigitalAssetGrid.height}
            imageSrc={imgDigitalAssetGrid.src}
            imageWidth={imgDigitalAssetGrid.width}
          />
        }
      >
        <H1 fontWeight={400} hyphens>
          Self-mining operations focused on the next generation of decentralized
          monetary systems
        </H1>

        <Paragraph spaceBottomMobile={spacing.space03}>
          Sustainable blockchain processing of various consensus algorithms is
          paramount in creating new value and circulating the existing. We are
          committed to supporting our long-term vision.
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
        backgroundColor={colors.background.dark}
        lineColor={colors.shades.light.x50}
        linePosition="bottom"
        pillars={pillars}
        textColor={colors.text.light}
        title="Advantages of scalable cohabitation"
      />

      {/*
       * Prosperity stands
       */}
      <Section
        backgroundColor={colors.primary.x300}
        textColor={colors.shades.light.x50}
      >
        <Grid>
          <Column gridColumnLaptop="span 7">
            <Reveal>
              <H2 spaceBottomMobile={spacing.space03}>
                Prosperity stands for prosperity in the digital
              </H2>
            </Reveal>

            <Reveal>
              <Paragraph spaceBottomMobile={spacing.space03}>
                Fully integrated large-scale self-mining operations securing a
                stable and continuous revenue stream without an intermediary
                body.
              </Paragraph>
            </Reveal>

            <Reveal>
              <Hr spaceBottom={spacing.space01} heavy />
            </Reveal>

            <Flex
              gapMobile={spacing.space01}
              justifyContent="space-between"
              alignItems="center"
            >
              <Reveal>
                <H6 spaceBottomMobile="0">
                  Make a stable investment for the future
                </H6>
              </Reveal>

              <Reveal delay={0.2}>
                <Button
                  buttonType="buttonBlack"
                  onClick={() => router.push('/contact')}
                >
                  Get in touch
                </Button>
              </Reveal>
            </Flex>
          </Column>
        </Grid>
      </Section>

      {/*
       * Competitive outlook
       */}
      <Section textColor="light" paddingBottomMobile="0">
        <Grid spaceBottomMobile={spacing.space04}>
          <H2 gridColumn="span 5" spaceBottomMobile={spacing.space04}>
            Competitive outlook
          </H2>
          <Column gridColumnLaptop="1/6" spaceBottomMobile={spacing.space04}>
            <Reveal>
              <Flex spaceBottom={spacing.space01}>
                <SvgDataCenter width={90} />
                <SvgDataCenterLoading width={90} />
              </Flex>
            </Reveal>

            <Reveal>
              <Hr color={colors.primary.x500} heavy />
            </Reveal>

            <Reveal>
              <H4 spaceBottomLaptop={spacing.space04}>Efficiency matters</H4>
            </Reveal>

            <Reveal>
              <Paragraph>
                An intelligent approach to competitive electricity prices
                leveraging predictive hedging models, electrical grid
                stabilization through a demand-response solution, and marketing
                the heat by-product allows us to operate well below average
                Bitcoin production price.
              </Paragraph>
            </Reveal>
          </Column>

          <Column gridColumnLaptop="7/12" spaceBottomMobile={spacing.space04}>
            <Reveal>
              <Flex
                gapMobile={spacing.spaceSmall}
                spaceBottom={spacing.space01}
              >
                <SvgDecentralization width={90} />
              </Flex>
            </Reveal>

            <Reveal>
              <Hr color={colors.primary.x500} heavy />
            </Reveal>

            <Reveal>
              <H4 spaceBottomLaptop={spacing.space04}>
                Global diversification
              </H4>
            </Reveal>

            <Reveal>
              <Paragraph>
                Prosperity is all about stability—the basis for incorporating
                our headquarters in canton of Zug, Switzerland, and running our
                self-mining operations in North America and Nordics.
              </Paragraph>
            </Reveal>
          </Column>
        </Grid>

        <Grid>
          <Column gridColumnLaptop="1/6">
            <Reveal>
              <Hr color={colors.primary.x500} heavy />
            </Reveal>

            <Reveal>
              <H4 spaceBottomMobile={spacing.space04}>
                Vertically integrated scalability
              </H4>
            </Reveal>

            <Reveal>
              <Paragraph>
                Prosperity Digital business continuity policy dictates that the
                data centers cluster is under our ownership and governance. All
                data center layers&apos; planning and execution standards align
                with ISO certifications.
              </Paragraph>
              <Paragraph>
                There&apos;s no settling for the second-best; we choose to
                deploy state-of-the-art infrastructure from verified
                manufacturers Schneider Electric, ABB, Bitmain, MicroBT, Canaan,
                and Intel.
              </Paragraph>
            </Reveal>
          </Column>

          <Column gridColumnLaptop="8/12">
            <Parallax
              imageSrc={imageDam.src}
              imageWidth={imageDam.width}
              imageHeight={imageDam.height}
              travelDistance={100}
              containerHeightDesktop="300px"
            />
          </Column>
        </Grid>
      </Section>

      {/*
       * Contact CTA
       */}
      <SectionCta
        action={() => router.push('/contact')}
        backgroundImage={imageGradientThree.src}
        buttonText="Get in touch"
        text="Open a dialogue with Prosperity Digital executives on a tiered
          investment lineup"
      />

      {/*
       * Business case
       */}
      <Section textColor="light">
        <Grid>
          <Column gridColumnLaptop="span 6">
            <Reveal>
              <H2 spaceBottomLaptop={spacing.space03}>
                Be a part of a prosperous business case
              </H2>
            </Reveal>

            <Reveal>
              <Paragraph
                spaceBottomMobile={spacing.space03}
                spaceBottomLaptop={spacing.space05}
              >
                Geopolitically stable regions, primarily North America and the
                Nordics, are Prosperity Digitals&apos; investment interests.
              </Paragraph>
            </Reveal>
          </Column>

          <Column>
            <BusinessBlockLink
              title="Register your investment interest"
              description="Join forces with Prosperity Digital and diversify your investment portfolio. Running a continuous revenue stream does not require industry experience or in-depth knowledge — if you have investment interest, get in touch with us."
              href="/contact?t=investment"
              iconDesktop={<SvgIconArrowRightCircle />}
              iconMobile={<SvgIconArrowRightCircle />}
            />

            <BusinessBlockLink
              title="Register your sustainable energy source"
              description="You are an electric power producer planning a renewable energy
                source project, a readily available wind farm or solar park, or a
                prospect involving hydro and geothermal energy sources — we want to
                know all about it."
              href="/contact?t=sustainable-energy"
              iconDesktop={<SvgIconArrowRightCircle />}
              iconMobile={<SvgIconArrowRightCircle />}
            />

            <BusinessBlockLink
              title="Register data center location availability"
              description="Mining operations of digital assets, primarily ASICs, are hosted in
                your data center. The location you offer must run on low-carbon
                energy sources to spark our business interest. If you are looking
                for a new tenant, M&A, or if you are selling — contact our audit
                team."
              href="/contact?t=data-center-location"
              iconDesktop={<SvgIconArrowRightCircle />}
              iconMobile={<SvgIconArrowRightCircle />}
            />

            <BusinessBlockLink
              title="Apply idea for funding"
              description="Prosperity Digital welcomes new ideas in the data center
                industry and always keeps its eyes on the ball regarding
                sustainability, scalability, and efficiency. Contact our
                technical team if you have an idea to improve our business case."
              href="/contact?t=funding"
              iconDesktop={<SvgIconArrowRightCircle />}
              iconMobile={<SvgIconArrowRightCircle />}
            />

            <BusinessBlockLink
              title="Apply for technical audit"
              description="Do you own a possible location in line with Prosperity
                Digitals' business interest, but you are unsure if it
                complies with technical requirements? Reach out to our technical
                team for an audit and make your listing more compelling to us or
                other investment opportunities"
              href="/contact?t=technical-audit"
              iconDesktop={<SvgIconArrowRightCircle />}
              iconMobile={<SvgIconArrowRightCircle />}
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
        backgroundColor={colors.background.body}
        buttonText="Get in touch"
        text="Let’s find out where our needs meet."
      />

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

export default SelfMining
