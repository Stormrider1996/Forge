import {
  ApplyForFundingForm,
  ApplyForTechnicalAuditForm,
  ButtonIcon,
  Column,
  Flex,
  GeneralContact,
  Grid,
  H1,
  H2,
  Hr,
  InvestmentInterestForm,
  Link,
  MediaNinja,
  Paragraph,
  PlainText,
  RegisterDataCenterLocationForm,
  RegisterHostingNeedsForm,
  Reveal,
  RevealImage,
  Section,
  Sidebar,
  SidebarMenu,
  SidebarMenuItem,
  SustainableEnergyForm
} from '@components'
import {
  SvgIconArrowRightCircle,
  SvgIconArrowRightCircleSmall,
  SvgIconBackCircle,
  SvgIconBackCircleSmall,
  SvgIconCheckmark
} from '@svg'
import { colors, spacing, typography } from '@variables'
import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import heroImage from 'public/images/prosperity-digital-contact.webp'
import { MutableRefObject, useEffect, useRef, useState } from 'react'

export interface FormTopic {
  id: string
  label: string
}

const Contact: NextPage = () => {
  const [topic, setTopic] = useState<FormTopic>()
  const router = useRouter()
  const ref = useRef() as MutableRefObject<HTMLDivElement>

  const formTopics = [
    {
      id: 'general',
      label: 'General contact',
      href: '/contact?t=general'
    },
    {
      id: 'hosting',
      label: 'Register your hosting needs',
      href: '/contact?t=hosting'
    },
    {
      id: 'investment',
      label: 'Register your investment interest',
      href: '/contact?t=investment'
    },
    {
      id: 'sustainable-energy',
      label: 'Register your sustainable energy source',
      href: '/contact?t=sustainable-energy'
    },
    {
      id: 'data-center-location',
      label: 'Register data center location availability',
      href: '/contact?t=data-center-location'
    },
    {
      id: 'funding',
      label: 'Apply idea for funding',
      href: '/contact?t=funding'
    },
    {
      id: 'technical-audit',
      label: 'Apply for technical audit',
      href: '/contact?t=technical-audit'
    }
  ]

  useEffect(() => {
    if (formTopics.filter((item) => item.id === router?.query?.t).length) {
      setTopic(formTopics.find((item) => item.id === router?.query?.t))

      window.scrollTo({
        top: ref?.current?.getBoundingClientRect()?.height
      })

      return
    }

    setTopic(undefined)
  }, [router.query])

  return (
    <>
      <Head>
        <title>Get in touch | Prosperity Digital</title>

        <meta
          name="description"
          content="Let’s find out where our needs meet: join our vision of empowering a sustainable digital asset mining future that will propel other industries."
        />
        <meta
          name="twitter:title"
          content="Get in touch | Prosperity Digital"
        />
        <meta
          name="twitter:description"
          content="Let’s find out where our needs meet: join our vision of empowering a sustainable digital asset mining future that will propel other industries."
        />
        <meta property="og:title" content="Get in touch | Prosperity Digital" />
        <meta
          property="og:description"
          content="Let’s find out where our needs meet: join our vision of empowering a sustainable digital asset mining future that will propel other industries."
        />
      </Head>
      <Section
        ref={ref}
        spaceBottomMobile="0"
        spaceBottomTablet="0"
        spaceBottomLaptop="0"
        spaceBottomDesktop="0"
        backgroundColor={colors.background.dark}
      >
        <Grid>
          <Column gridColumnLaptop="span 5">
            <Flex
              elementHeight="100%"
              flexDirection="column"
              justifyContent="space-between"
            >
              <H1 textColor={colors.text.light}>
                Get in touch with Prosperity Digital&apos;s team
              </H1>

              <Paragraph textColor={colors.text.light}>
                Let&apos;s start a conversation and find out where our interests
                align. We are eager to curate a customized approach if
                that&apos;s what&apos;s needed. After a discovery session,
                we&apos;ll determine where you fit.
              </Paragraph>
            </Flex>
          </Column>

          <Column gridColumnLaptop="7/11">
            <RevealImage
              coverColor={colors.background.dark}
              imageHeight={heroImage.height}
              imageSrc={heroImage.src}
              imageWidth={heroImage.width}
            />
          </Column>
        </Grid>
      </Section>

      {!topic?.id ? (
        <Section
          paddingTopDesktop={spacing.space05}
          paddingTopLaptop={spacing.space04}
          paddingTopTablet={spacing.space03}
          paddingTopMobile={spacing.space03}
        >
          <Grid>
            <Column gridColumnLaptop="span 8">
              <Flex
                spaceBottom={spacing.space02}
                spaceBottomLaptop={spacing.space04}
              >
                <PlainText fontSize={typography.fontSize.heading06}>
                  Conversation topic
                </PlainText>
              </Flex>

              {formTopics.map((topic, i) => {
                return (
                  <Reveal key={i}>
                    <Flex
                      gapMobile={spacing.space01}
                      flexWrap="nowrap"
                      alignItems="center"
                      justifyContent="space-between"
                      spaceBottom={spacing.baseSpacing}
                    >
                      <PlainText
                        spaceBottom="0"
                        fontSize={typography.fontSize.heading06}
                      >
                        {/* nosemgrep*/}
                        <Link href={topic.href}>{topic.label}</Link>
                      </PlainText>
                      {/* nosemgrep*/}
                      <ButtonIcon href={topic.href}>
                        <MediaNinja showOnLaptop showOnDesktop>
                          <SvgIconArrowRightCircle
                            fillHover={colors.primary.x400}
                          />
                        </MediaNinja>

                        <MediaNinja showOnMobile showOnTablet>
                          <SvgIconArrowRightCircleSmall />
                        </MediaNinja>
                      </ButtonIcon>
                    </Flex>

                    <Hr
                      spaceBottom={spacing.space01}
                      color={colors.grayscale.x500}
                    />
                  </Reveal>
                )
              })}
            </Column>
          </Grid>
        </Section>
      ) : (
        <Section
          paddingTopDesktop="0"
          paddingTopLaptop="0"
          paddingTopTablet={spacing.space03}
          paddingTopMobile={spacing.space03}
          paddingBottomMobile="0"
          paddingBottomTablet="0"
          paddingBottomLaptop="0"
          paddingBottomDesktop="0"
        >
          <Grid>
            <MediaNinja showOnLaptop showOnDesktop>
              <Column gridColumnLaptop="span 3">
                <Sidebar
                  paddingTopDesktop={spacing.space04}
                  paddingBottomDesktop={spacing.space05}
                >
                  <PlainText fontWeight="600" spaceBottom={spacing.space01}>
                    Currently selected
                  </PlainText>

                  <PlainText spaceBottom={spacing.space03}>
                    <Flex
                      flexWrap="nowrap"
                      flexDirection="row"
                      gapMobile={spacing.space01}
                    >
                      <SvgIconCheckmark fill={colors.grayscale.x500} />
                      <span>{topic?.label || 'none'}</span>
                    </Flex>
                  </PlainText>

                  <PlainText fontWeight="600">
                    Change conversation topic
                  </PlainText>

                  <SidebarMenu>
                    {formTopics.map((item, i) => {
                      // nosemgrep
                      return (
                        // nosemgrep
                        <Link key={i} href={item.href}>
                          <SidebarMenuItem active={topic?.id === item.id}>
                            {item.label}
                          </SidebarMenuItem>
                        </Link>
                      )
                    })}
                  </SidebarMenu>
                </Sidebar>
              </Column>
            </MediaNinja>

            <Column gridColumnLaptop="span 9">
              <MediaNinja showOnMobile showOnTablet>
                <Flex>
                  <ButtonIcon href="/contact">
                    <SvgIconBackCircleSmall />
                  </ButtonIcon>
                </Flex>
              </MediaNinja>

              <Flex
                spaceTop={spacing.space02}
                spaceTopLaptop={spacing.space04}
                spaceTopDesktop={spacing.space04}
                flexWrap="nowrap"
                justifyContent="space-between"
                alignItems="flex-start"
                gapMobile={spacing.space03}
              >
                <Reveal>
                  <H2
                    spaceBottomMobile={spacing.space02}
                    spaceBottomTablet={spacing.space02}
                    spaceBottomLaptop={spacing.space04}
                    spaceBottomDesktop={spacing.space05}
                  >
                    {topic?.label || 'none'}
                  </H2>
                </Reveal>

                <MediaNinja showOnLaptop showOnDesktop>
                  <Reveal delay={0.2}>
                    <ButtonIcon href="/contact">
                      <SvgIconBackCircle fillHover={colors.primary.x500} />
                    </ButtonIcon>
                  </Reveal>
                </MediaNinja>
              </Flex>
              {/*
            Form
            */}
              {topic?.id === 'general' && <GeneralContact />}

              {topic?.id === 'hosting' && <RegisterHostingNeedsForm />}

              {topic?.id === 'investment' && <InvestmentInterestForm />}

              {topic?.id === 'sustainable-energy' && <SustainableEnergyForm />}

              {topic?.id === 'data-center-location' && (
                <RegisterDataCenterLocationForm />
              )}

              {topic?.id === 'funding' && <ApplyForFundingForm />}

              {topic?.id === 'technical-audit' && (
                <ApplyForTechnicalAuditForm />
              )}
            </Column>
          </Grid>
        </Section>
      )}
    </>
  )
}

export default Contact
