import {
  AdvisoryBoardAccordion,
  BlogList,
  Button,
  Column,
  Grid,
  H2,
  H3,
  H6,
  Hr,
  MediaNinja,
  Paragraph,
  Reveal,
  Section,
  SectionCta,
  SectionScrollable,
  TeamMember
} from '@components'
import { colors, spacing } from '@variables'
import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import imageGradientTwo from 'public/images/gradient-variation-two.webp'
import imagePlaceHolder from 'public/images/placeholder.jpg'
import imagePlaceHolderFour from 'public/images/placeholderfour.jpg'
import imagePlaceHolderThree from 'public/images/placeholderthree.jpg'
import imagePlaceHolderTwo from 'public/images/placeholdertwo.jpg'
import imageTeamTop from 'public/images/prosperity-digital-team.webp'
import imageTeamleft from 'public/images/teamLeft.webp'
import imageTeamTopMobile from 'public/images/teamMobile.webp'
import imageTeamRight from 'public/images/teamRight.webp'
import React from 'react'

const Team: NextPage = () => {
  const router = useRouter()

  const pillars = [
    {
      subtitle: 'Professionalism',
      title: 'Diverse fields, like-minded experts',
      description:
        "By capitalizing on the extensive network and knowledge we've built throughout our professional careers, we aim to show the fantastic potential blockchain technology, and digital assets can unlock."
    },
    {
      subtitle: 'Expertise',
      title: 'Backbone of innovation',
      description:
        'Our diversified team specializes in energy sources and distribution, data centers deployment and management, fintech, digital assets taxation, compliance, audit, and other related fields.'
    },
    {
      subtitle: 'Responsibility',
      title: 'Mission aligned team',
      description:
        "Our experience and knowledge align the team with Prosperity Digitals' mission and vision enabling our team to progress responsibly in favor of the environment and local communities and act as true tech optimists."
    }
  ]

  const team = [
    {
      name: 'Frederik Vyncke',
      position: 'Director and Co-founder',
      textPartOne:
        'Frederik is the former CEO of a Tier 3 data center in Sweden with a focus on high-end security. He also built and deployed Tier 1 data centers intended for digital assets mining and has a background in leadership and procurement in international OEMs such as Volvo, Siemens, and Bombardier.',
      textPartTwo:
        "He has been active in the HPC space since 2015 and in digital assets mining since 2017 and has managed 25 MW of ASIC mining, both operational and under construction. Frederik has a Master's degree in International Marketing, a Bachelor's degree in programming, and an executive MBA from AVT Business School, Copenhagen.",
      imageSrc: imagePlaceHolder.src,
      imageWidth: imagePlaceHolder.width,
      imageHeight: imagePlaceHolder.height,
      linkedin: 'https://www.linkedin.com/in/frederikvyncke/'
    },
    {
      name: 'Florian Ducommun',
      position: 'Director and Co-founder',
      textPartOne:
        "Florian is a seasoned attorney in Technology, Media, Telecom (TMT), digital, intellectual property, blockchain, and fintech law. He is one of the leading attorneys in Western Switzerland, advising some of the world's major distributed ledger technology players.",
      textPartTwo:
        "He also counsels tech companies on their businesses' contractual and regulatory aspects, digital transformation, intellectual property, and data protection. Florian graduated from the University of Lausanne in 2004 and was admitted to the Bar in 2009. He obtained an LL.M. at McGill University Law School in Montreal in 2006.",
      imageSrc: imagePlaceHolderTwo.src,
      imageWidth: imagePlaceHolderTwo.width,
      imageHeight: imagePlaceHolderTwo.height,
      linkedin: 'https://www.linkedin.com/in/florianducommun/'
    },
    {
      name: 'Ludovic Thomas',
      position: 'COO and Co-founder',
      textPartOne:
        'Digital assets supporter since 2016, Ludovic was the CEO and co-founder of Alpine Mining, once the biggest mining operation in Switzerland. His previous company operated a 40,000 GPU-worth mining operation in Sweden for a publicly listed entity with a turnover of $25M within 8 months of incorporation.',
      textPartTwo:
        'He consulted many industrial-scale digital assets miners on sourcing sites and equipment and improving their organizational structure. His latest position was at White Rock Management, a 57MW digital assets mining operation in Asia, Scandinavia, and the USA. Ludovic studied Accounting and Finance in a Business School.',
      imageSrc: imagePlaceHolderThree.src,
      imageWidth: imagePlaceHolderThree.width,
      imageHeight: imagePlaceHolderThree.height,
      linkedin: 'https://www.linkedin.com/in/thomasludovic1991/'
    },
    {
      name: 'Olga Konchenkova',
      position: 'Head of Legal',
      textPartOne:
        'Olga worked as the head of the Economics Department at a major power grid company, advising the board on financial issues, business planning, and dealing with energy transmission and distribution tariffs and economic aspects of grid access.',
      textPartTwo:
        'Her interests include the current international sustainability agenda, Swiss DLT legislation, and the principles of digital-asset taxation. She is an active member of the Crypto Valley Association. Olga holds degrees in Economics and Law from Russian Universities and a Master of Advanced Studies in International Taxation degree from UNIL, Switzerland.',
      imageSrc: imagePlaceHolderFour.src,
      imageWidth: imagePlaceHolderFour.width,
      imageHeight: imagePlaceHolderFour.height,
      linkedin: 'https://www.linkedin.com/in/olga-k-1a462314b/'
    },
    {
      name: 'Andri Rabetanety',
      position: 'CFO',
      textPartOne:
        'Andri has over 12 years of experience in financial modeling specializing in alternative investment funds and business modeling. He spent more than 4 years as a Tokenization Lead for Swiss Crypto Advisors working on real estate tokenization projects.',
      textPartTwo:
        'Before that, Andri worked as a Finance Manager at Amazon and Fund Manager at UFG Wealth Management in Luxembourg. Andri holds a Master’s degree in Real Estate Finance from ESSEC, a Master’s degree in Applied Mathematics and Computer Science from Ecole Nationale Supérieur de l’Informatique et de Mathématiques Appliquées de Grenoble (ENSIMAG).',
      imageSrc: imagePlaceHolder.src,
      imageWidth: imagePlaceHolder.width,
      imageHeight: imagePlaceHolder.height,
      linkedin: 'https://www.linkedin.com/in/andri-rabetanety-62023627/'
    },
    {
      name: 'Tilman Schneider',
      position: 'CTO',
      textPartOne:
        'Tilman has over a decade of experience working for startups in the sectors of web services, medical devices, and blockchain applications. In 2018, he joined Alpine Tech to architect enterprise-focused blockchain solutions.',
      textPartTwo:
        'He worked on connected objects and the blockchain-based accounting of environmental impact, non-custodial staking solutions for private banks, and secondary marketplaces for security tokens. Tilman holds an MSc in Microengineering from the Swiss Institute of Technology Lausanne (EPFL) and is a certified Blockchain Developer specializing in stablecoin payment solutions.',
      imageSrc: imagePlaceHolderTwo.src,
      imageWidth: imagePlaceHolderTwo.width,
      imageHeight: imagePlaceHolderTwo.height,
      linkedin: 'https://www.linkedin.com/in/tilman-schneider-631b5729/'
    },
    {
      name: 'Alexandre Juncker',
      position: 'Head of Operations',
      textPartOne:
        'A 15-year veteran of the Energy-Blockchain nexus, Alexandre has extensive knowledge of both. He got the chance to dive into blockchain technology after joining Ernst & Young in 2016 as an operations consultant and take part in building the DLT expertise of the Paris EY digital lab.',
      textPartTwo:
        ' He led the Swiss national standardization initiative to define distributed execution platform principles for the power generation sector. He applied himself to the various aspects of DLT, including governance, mining, decentralized systems architecture, on-chain data management, crypto-economics, tokenization, etc.',
      imageSrc: imagePlaceHolderThree.src,
      imageWidth: imagePlaceHolderThree.width,
      imageHeight: imagePlaceHolderThree.height,
      linkedin: 'https://www.linkedin.com/in/alexandre-juncker84/?locale=en_US'
    }
  ]

  const advisors = [
    {
      name: 'Francesco Abbate',
      expertise: 'Finance',
      link: 'https://www.linkedin.com/in/francescoabbate1/',
      biography:
        'Francesco has been an entrepreneur in the blockchain space since 2017. He is the co-founder of Swiss Crypto Advisors, a boutique financial firm active in value creation opportunities around the blockchain asset class and in traditional asset management, featuring a range of proprietary regulated products in the blockchain space, and a multi-family office division. Before 2018, Francesco had extensive management background with 14 years in Finance at Procter & Gamble across business units and regions. His last position was that of a senior director for finance and strategy in the global Beauty Care business units with over 10 billion USD turnover.'
    },
    {
      name: 'Julien Donnet',
      expertise: 'Audit',
      link: 'https://www.linkedin.com/in/julien-donnet-781a123b/',
      biography:
        'Julien is an engineer with a master’s degree in computer science from Telecom Nancy engineering school and more than 10 years of experience in consulting. He started his career as a tech consultant, after which he joined Deloitte and assumed a management position delivering high-value services (data, capital income and taxes) to private banks across Switzerland. He participated in many innovative projects, including a tokenization engine for a private bank running on the Ethereum blockchain. Since 2020, he has been a part of Citi Ventures as a Vice President. Julien is also currently enrolled in an executive MBA at the EPFL.'
    },
    {
      name: 'Laurent Nanzer',
      expertise: 'Energy',
      link: 'https://www.linkedin.com/in/laurent-nanzer-6578a04/',
      biography:
        'Laurent has 17 years of experience in the energy sector. In 2004, he founded AIS Automated Investment Systems, a company trading on the forex market for small and medium investors. In 2005, he joined FMV, an energy producer, as a portfolio manager and asset optimization manager. In 2011, he joined Axpo, the biggest renewable energy producer in Switzerland, as Area manager and then as Head Origination Switzerland, where he negotiates energy supply/offtake contracts across Europe and develops projects such as PPAs, large-scale batteries, hydrogen, biogas, derivative financial products, etc. He is also involved in the Swiss energy strategy working groups.'
    },
    {
      name: 'David Tschan',
      expertise: 'Energy',
      link: 'https://www.linkedin.com/in/david-tschan-b47823b8/',
      biography:
        'David has 5 years of experience in the energy sector. In 2017 he founded BeeSolar, a startup helping big real estate owners to install PV. In 2018, he joined Axpo, the biggest renewable energy producer in Switzerland, to contribute to valorizing the flexibility of production/consumption and then as an originator. He negotiated energy supply/offtake contracts across Europe and projects such as PPAs (wind, solar, hydro), large-scale batteries, hydrogen, biogas. Since 2021, David is an advisor for Moroccan partners in the framework of a 400MW PV tender and has a Master degree from ETH Zurich in Environmental Sciences & Sustainable Energy Use.'
    }
  ]

  return (
    <>
      <Head>
        <title>Meet our versatile team of experts | Prosperity Digital</title>

        <meta
          name="description"
          content="Learn more about the specialists who makes our company tick and their versatile skillsets that represent the backbone of innovation."
        />
        <meta
          name="twitter:title"
          content="Meet our versatile team of experts | Prosperity Digital"
        />
        <meta
          name="twitter:description"
          content="Learn more about the specialists who makes our company tick and their versatile skillsets that represent the backbone of innovation."
        />
        <meta
          property="og:title"
          content="Meet our versatile team of experts | Prosperity Digital"
        />
        <meta
          property="og:description"
          content="Learn more about the specialists who makes our company tick and their versatile skillsets that represent the backbone of innovation."
        />
      </Head>
      {/*
       * Section Hero
       */}
      <Section
        backgroundColor={colors.grayscale.x400}
        paddingBottomMobile="0"
        paddingBottomTablet="0"
        paddingBottomLaptop="0"
        paddingBottomDesktop="0"
        textColor={colors.text.light}
      >
        <Grid>
          <Column gridColumnLaptop="span 6" spaceBottomLaptop={spacing.space04}>
            <Reveal>
              <H3>
                Meet the experienced and versatile team behind Prosperity
                Digital
              </H3>
            </Reveal>
          </Column>

          <Column gridColumnLaptop="span 6">
            <Reveal delay={0.2}>
              <Paragraph spaceBottomMobile={spacing.space02}>
                The force behind Prosperity Digital is a like-minded senior team
                of diverse and deep-knowledge experts who advance responsibly in
                favor of the environment and local communities and act as true
                tech optimists. Teamwork is the fuel that enables extraordinary
                results.
              </Paragraph>
            </Reveal>
          </Column>

          <Column
            spaceBottomLaptop={spacing.space01}
            spaceBottomMobile={spacing.space01}
          >
            <MediaNinja showOnLaptop showOnDesktop>
              <Image
                src={imageTeamTop.src}
                sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
                width={imageTeamTop.width}
                height={imageTeamTop.height}
                alt="team"
                unoptimized
                priority
              />
            </MediaNinja>
            <MediaNinja showOnMobile showOnTablet>
              <Image
                src={imageTeamTopMobile.src}
                width={imageTeamTopMobile.width}
                height={imageTeamTopMobile.height}
                alt="team"
                priority
              />
            </MediaNinja>
          </Column>

          <Column
            gridColumnLaptop="span 6"
            spaceBottomLaptop="0"
            spaceBottomMobile={spacing.space01}
          >
            <Image
              src={imageTeamleft.src}
              width={imageTeamleft.width}
              height={imageTeamleft.height}
              alt="team"
              unoptimized
              priority
            />
          </Column>

          <Column
            gridColumnLaptop="span 6"
            spaceBottomLaptop="0"
            spaceBottomMobile={spacing.space01}
          >
            <Image
              src={imageTeamRight.src}
              sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
              width={imageTeamRight.width}
              height={imageTeamRight.height}
              alt="team"
              unoptimized
              priority
            />
          </Column>
        </Grid>
      </Section>

      {/*
       * PillarsFixed
       */}
      <SectionScrollable
        backgroundColor={colors.grayscale.x400}
        linePosition="top"
        lineColor={colors.text.light}
        pillars={pillars}
        textColor={colors.text.light}
        title="The team spark"
      />

      {/*
       * The Team
       */}
      <Section>
        <Grid>
          <Column gridColumnLaptop="2/8" spaceBottomMobile={spacing.space04}>
            <Reveal>
              <H2>The Team</H2>
            </Reveal>
          </Column>

          <Column
            gridColumnLaptop="2/12"
            spaceBottomDesktop={spacing.space05}
            spaceBottomLaptop={spacing.space04}
          >
            {team.map((member, i) => {
              return (
                <TeamMember
                  key={i}
                  name={member.name}
                  position={member.position}
                  textPartOne={member.textPartOne}
                  textPartTwo={member.textPartTwo}
                  imageSrc={member.imageSrc}
                  imageWidth={member.imageWidth}
                  imageHeight={member.imageHeight}
                  link={member.linkedin}
                  gridColumnReverse={i % 2 !== 0}
                />
              )
            })}
          </Column>
          <Column gridColumnLaptop="2/9">
            <H2 spaceBottomMobile={spacing.space04}>The advisory board</H2>

            {advisors.map((advisor, i) => {
              return (
                <AdvisoryBoardAccordion
                  key={i}
                  biography={advisor.biography}
                  expertise={advisor.expertise}
                  link={advisor.link}
                  name={advisor.name}
                />
              )
            })}
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

export default Team
