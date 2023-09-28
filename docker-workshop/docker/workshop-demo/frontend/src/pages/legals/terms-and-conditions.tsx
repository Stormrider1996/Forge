import {
  Column,
  Grid,
  H3,
  H4,
  Link,
  Paragraph,
  Section,
  SectionCta,
  Sidebar,
  SidebarMenu,
  TearmsColorBlock,
  TearmsOrderedList
} from '@components'
import { spacing } from '@variables'
import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import imageGradientTwo from 'public/images/gradient-variation-two.webp'
import { useEffect, useState } from 'react'

const TermsAndConditions: NextPage = () => {
  const router = useRouter()

  const [links, setLinks] = useState<string[]>([])

  useEffect(() => {
    const headings = document.querySelectorAll('h4')
    headings.forEach((item, i) => item.setAttribute('id', `${i}`))

    const headingsText: string[] = []
    headings.forEach((item) => headingsText.push(item.innerText))

    setLinks(headingsText)
  }, [])

  return (
    <>
      <Head>
        <title>Terms and Conditions | Prosperity Digital</title>

        <meta
          name="description"
          content="Get acquainted with Prosperity Digital’s legal documentation — Terms and Conditions, Cookies Policy, and Privacy Notice."
        />

        <meta
          name="twitter:title"
          content="Terms and Conditions | Prosperity Digital"
        />
        <meta
          name="twitter:description"
          content="Get acquainted with Prosperity Digital’s legal documentation — Terms and Conditions, Cookies Policy, and Privacy Notice."
        />
        <meta
          property="og:title"
          content="Terms and Conditions | Prosperity Digital"
        />
        <meta
          property="og:description"
          content="Get acquainted with Prosperity Digital’s legal documentation — Terms and Conditions, Cookies Policy, and Privacy Notice."
        />
      </Head>

      {/*
       * Section Hero
       */}
      <Section>
        <Grid>
          <Column gridColumnLaptop="span 5">
            <H3>Terms and Conditions of Prosperity Digital</H3>
          </Column>
        </Grid>
      </Section>

      {/*
       * Section content
       */}
      <Section
        paddingTopDesktop="0"
        paddingTopLaptop="0"
        paddingTopMobile="0"
        paddingTopTablet="0"
      >
        <Grid>
          <Column gridColumnLaptop="span 3" position="relative">
            <Sidebar>
              <SidebarMenu position="sticky" top="3rem">
                {!!links &&
                  links.map((item, i) => {
                    // nosemgrep
                    return (
                      // nosemgrep
                      <Link key={i} href={`#${i}`}>
                        {item}
                      </Link>
                    )
                  })}
              </SidebarMenu>
            </Sidebar>
          </Column>
          <Column gridColumnLaptop="4/12">
            <Paragraph spaceBottomMobile={spacing.space04}>
              <b>Date</b>: October 14th, 2022
              <br />
              <br />
              These terms and conditions (the <b>“Terms”</b>) govern any use of
              the website www.prosperitydigital.ch (the <b>“Website”</b>)
              operated by SPARK POWER SA, Bâtiment EPFL Innovation Park D, 1015
              Lausanne, Switzerland (the <b>“Company”</b>)
              <br />
              <br />
              By accessing or using the Website, any natural or legal person
              (the <b>“User”</b>) agrees to follow and to be bound by these
              Terms, as well as the privacy notice of the Company (the{' '}
              <b>“Privacy Notice”</b>) and the cookies policy of the Company
              (the <b>“Cookies Policy”</b>).
              <br />
              <br />
              If a User does not agree with these Terms, the Privacy Notice
              and/or the Cookies Policy he/she/it should refrain from browsing
              the Website and using its Functionalities (as defined in these
              Terms).
            </Paragraph>
            <H4 id="definitions">1. Definitions</H4>
            <Grid
              gridTemplateColumnsDesktop="repeat(8,1fr)"
              gridTemplateColumnsLaptop="repeat(8,1fr)"
              spaceBottomMobile={spacing.space04}
            >
              <Column gridColumnLaptop="span 3">
                <Paragraph>
                  <b>Company</b>
                </Paragraph>
              </Column>
              <Column gridColumnLaptop="4/9">
                <Paragraph>
                  shall mean SPARK POWER SA, Bâtiment EPFL Innovation Park D,
                  1015 Lausanne, Switzerland.
                </Paragraph>
              </Column>
              <Column gridColumnLaptop="span 3">
                <Paragraph>
                  <b>Cookies Policy</b>
                </Paragraph>
              </Column>
              <Column gridColumnLaptop="4/9">
                <Paragraph>
                  shall mean the cookies policy of the Company’s Website
                  available at the following URL: [please add].
                </Paragraph>
              </Column>
              <Column gridColumnLaptop="span 3">
                <Paragraph>
                  <b>Force Majeure Event</b>
                </Paragraph>
              </Column>
              <Column gridColumnLaptop="4/9">
                <Paragraph>
                  shall mean the circumstances beyond the reasonable control of
                  the Company, including natural phenomena, government measures,
                  acts of terrorism, demonstrations, fires, explosions, floods,
                  epidemics, pandemics, lockdown measures, quarantines,
                  blockades, strikes or other labor disputes, market fall, stock
                  market and economy crashes, IT system or infrastructure
                  attacks beyond control of the Company, accidents, factory
                  breakdowns, impediments or delays on the part of transporters,
                  impossibility or delay in obtaining supplies or appropriate
                  and necessary equipment, seizure, sequestration or other
                  measures taken by or on the orders of an apparently competent
                  authority and all other acts which are neither foreseeable nor
                  attributable to the Company and which are objectively of such
                  a nature as to delay the provision of the Website.
                </Paragraph>
              </Column>
              <Column gridColumnLaptop="span 3">
                <Paragraph>
                  <b>Intellectual Property Rights</b>
                </Paragraph>
              </Column>
              <Column gridColumnLaptop="4/9">
                <Paragraph>
                  shall especially but not only include patents, utility models,
                  copyright, neighboring rights, related rights, trademarks and
                  service marks, business names and domain names, rights in
                  get-up and trade dress, goodwill and the right to sue for
                  passing off or unfair competition, rights in designs, database
                  rights, software rights, source code, object code, rights to
                  use, and protect the confidentiality of, confidential
                  information (including know-how and trade secrets), and all
                  other intellectual property rights, in each case whether
                  registered or unregistered and including all applications and
                  rights to apply for and be granted, renewals or extensions of,
                  and rights to claim priority from, such rights and all similar
                  or equivalent rights or forms of protection which subsist or
                  will subsist now or in the future in any part of the world.
                </Paragraph>
              </Column>
              <Column gridColumnLaptop="span 3">
                <Paragraph>
                  <b>Newslettery</b>
                </Paragraph>
              </Column>
              <Column gridColumnLaptop="4/9">
                <Paragraph>shall mean the newsletter of the Company.</Paragraph>
              </Column>
              <Column gridColumnLaptop="span 3">
                <Paragraph>
                  <b>Personal Data</b>
                </Paragraph>
              </Column>
              <Column gridColumnLaptop="4/9">
                <Paragraph>
                  shall mean any information that relates to an identified or
                  identifiable person. This especially includes, in particular,
                  identifiers, such as names, surnames, phone numbers,
                  audiovisual media, identification numbers, location data or
                  online identifiers.
                </Paragraph>
              </Column>
              <Column gridColumnLaptop="span 3">
                <Paragraph>
                  <b>Privacy Notice</b>
                </Paragraph>
              </Column>
              <Column gridColumnLaptop="4/9">
                <Paragraph>
                  shall mean the privacy notice of the Company’s Website
                  available at the following URL: [please add].
                </Paragraph>
              </Column>
              <Column gridColumnLaptop="span 3">
                <Paragraph>
                  <b>Terms</b>
                </Paragraph>
              </Column>
              <Column gridColumnLaptop="4/9">
                <Paragraph>
                  shall mean these terms and conditions governing the use of the
                  Website.
                </Paragraph>
              </Column>
              <Column gridColumnLaptop="span 3">
                <Paragraph>
                  <b>User</b>
                </Paragraph>
              </Column>
              <Column gridColumnLaptop="4/9">
                <Paragraph>
                  shall mean any natural or legal person browsing the Website
                  and using its Functionalities.
                </Paragraph>
              </Column>
              <Column gridColumnLaptop="span 3">
                <Paragraph>
                  <b>Website</b>
                </Paragraph>
              </Column>
              <Column gridColumnLaptop="4/9">
                <Paragraph>
                  shall mean the website www.prosperitydigital.ch operated by
                  the Company.
                </Paragraph>
              </Column>
            </Grid>
            <H4 spaceBottomMobile={spacing.space02}>2. The website</H4>
            <Paragraph spaceBottomMobile={spacing.space04}>
              The Company is mainly active in the development, the maintenance
              and the exploitation of optimal hosting solutions for Digital
              Assets Mining and self-mining.
              <br /> Essentially, the Website provides the User with information
              about the Company and its activities. The Website also contains
              the possibility to subscribe to the Newsletter and to contact the
              Company.
              <br />
              <br /> When a User contacts the Company through the contact form,
              the email sent is stored on the Company’s server in Switzerland.
            </Paragraph>
            <H4 spaceBottomMobile={spacing.space02}>3. Prohibited actions</H4>
            <Paragraph>
              The User agrees that he/she/it will use the Website for
              his/her/its personal use only. In addition, the User agrees that
              any use of the Website shall be for the purposes expressly
              permitted and contemplated by these Terms. The User may not use
              the Website for any other purposes without the Company’s express
              prior written consent.
              <br />
              <br /> In particular, the User hereby agrees not to do any of the
              following actions in connection with the Functionalities and not
              to use the Website to:
            </Paragraph>
            <TearmsOrderedList bottomSpacing={spacing.baseSpacing}>
              <li>
                intimidate or harass any person or entity, or falsely state or
                otherwise misrepresent himself/herself/itself with any person or
                entity;
              </li>
              <li>
                restrict or inhibit any other User from using the Website and/or
                enjoying the Functionalities;
              </li>
              <li>
                upload, post, transmit, distribute or otherwise make available
                any material that contains software viruses, trojan horses,
                worms, time bombs, cancelbots, corrupted files, malwares,
                ransomwares or spywares or any other computer code (source or
                object), files or programs designed to interrupt, destroy,
                damage or limit the functionality of any computer software or
                hardware, mobile devices or telecommunications equipment or any
                other technologies that may harm the Website, its
                Functionalities or the interests or property of the Users or the
                Company;
              </li>
              <li>
                export or re-export any applications, code (source or object),
                database, Users’ list or tools developed by and/or proprietary
                to the Company;
              </li>
              <li>
                copy, scrape, extract, modify, or distribute rights or content
                from the Website in any way, including through robots, spiders
                or any other software or technology;
              </li>
              <li>
                frame or utilize any framing techniques in connection with the
                Website;
              </li>
              <li>
                duplicate or reproduce any part of the Website (except as
                expressly provided elsewhere in these Terms);
              </li>
              <li>
                “deep-link” to any page of the Website, or avoid accepting
                acknowledgement of these Terms;
              </li>
              <li>
                create any derivative works based on or using the Website, and
                the User agrees and stipulates that any and all derivative works
                are not “fair use”;
              </li>
              <li>
                use the Website for any public display, public performance, sale
                or rental, and the User hereby agrees and stipulates that any
                and all such uses are not “fair use”;
              </li>
              <li>
                redistribute the Website, and the User hereby agrees that any
                and all such uses are not deemed to be “fair use”;
              </li>
              <li>
                circumvent any encryption or other security tools used anywhere
                on the Website or in conjunction with its Functionalities;
              </li>
              <li>
                use the data of the Website and/or the data of the Company to
                develop, create, register, list, trade, clear, or settle any
                investment product, financial product or product of any kind;
              </li>
              <li>
                knowingly or recklessly use and/or take advantage of a technical
                or technological error, loophole or glitch in the Website;
              </li>
              <li>
                remove any copyright or other proprietary notices from the
                Website;
              </li>
              <li>
                commercialize any application, code (source or object) or any
                information or software associated with such application and/or
                the Website without the prior consent of the Company;
              </li>
              <li>
                sell, rent, lease, license, sublicense, transfer, distribute,
                re-transmit, time-share, use as a service bureau or otherwise
                assign to any third party the Functionalities or any of the
                User’s rights to access and use the Website as granted
                specifically by these Terms;
              </li>
              <li>
                use the Website to impersonate any other User, the Company or
                third party;
              </li>
              <li>
                use the Website to pay for, support, receive proceeds from or
                otherwise engage in any illegal activities;
              </li>
              <li>
                upload, post, email or otherwise transmit to the Company any
                submission that the User does not have a right to transmit under
                contractual, fiduciary or other relationships (such as inside
                information, trade secrets, proprietary and confidential
                information learned or disclosed as part of employment
                relationships or under nondisclosure agreements);
              </li>
              <li>
                upload, post, email or otherwise transmit any unsolicited or
                unauthorized advertising, promotional materials, “junk mail”,
                “spam”, “chain letters”, “pyramid schemes”, or any other form of
                solicitation, except in those areas that the Company may
                designate for such purpose;
              </li>
              <li>
                harvest or otherwise collect information or data (including
                Personal Data) about User without their consent or use automated
                scripts to collect information from or otherwise interact with
                the Users;
              </li>
              <li>
                use any information on the Website or included in the
                Functionalities in any manner that infringes any Intellectual
                Property Rights, publicity or other proprietary right of the
                Company, of other Users and/or of any third party;
              </li>
              <li>
                upload, post, transmit, distribute, store or otherwise make
                available content that, in the sole judgment of the Company, is
                objectionable, misleading or which restricts or inhibits any
                other person from using the Website, or which may expose the
                Company or the Users to any harm or liability of any type;
              </li>
              <li>
                upload, post, transmit, distribute, store or otherwise make
                available content that would constitute, encourage or provide
                instructions for a criminal offense; and
              </li>
              <li>
                violate these Terms, the Privacy Notice, the Cookies Policy, as
                well as any regulations, policies or applicable laws.
              </li>
            </TearmsOrderedList>
            <Paragraph>In addition, the User shall not:</Paragraph>
            <TearmsOrderedList bottomSpacing={spacing.space02}>
              <li>
                copy, modify, distribute, sell, or lease any part of the
                Website;
              </li>
              <li>
                use any meta-tags, pay-per-click advertising, or any other
                “hidden text” using the Website’s name or the Company’s
                trademarks, and the User hereby stipulates that any use of the
                Website’s name or Company’s trademarks is an infringement upon
                the Company’s trademark rights;
              </li>
              <li>
                use any data mining, bots, scrapers or similar data gathering
                and extraction tools on the Website or in conjunction with its
                Functionalities;
              </li>
              <li>
                use any automatic device or manual process to monitor or
                reproduce the Website and/or its Functionalities;
              </li>
              <li>
                do anything that may adversely affect proper operation of the
                Website, its Functionalities and the reputation and goodwill of
                the Company;
              </li>
              <li>
                use any device, software, computer code (source or object), or
                virus to interfere or attempt to disrupt or damage the Website;
              </li>
              <li>
                translate, reverse engineer, decompile, disassemble or attempt
                to extract the Website;
              </li>
              <li>
                translate, reverse engineer, decompile, disassemble or attempt
                to extract the source code or the object code of the Website;
              </li>
              <li>
                interfere or attempt to disrupt the Website in any way; and
              </li>
              <li>
                attempt to do any of the acts described in this Section or
                assist or permit any person in engaging in any of the acts
                described in this Section.
              </li>
            </TearmsOrderedList>
            <TearmsColorBlock bottomSpacing={spacing.space04}>
              <Paragraph spaceBottomMobile="0">
                The User agrees to indemnify the Company for any loss and damage
                that will be suffered by the Company as a result of the
                above-mentioned infringement, plus User agrees to pay any and
                all fees incurred in the recovery of this amount, including
                legal fees, internal fees, attorney-at-law’s fees and all
                associated costs.
              </Paragraph>
            </TearmsColorBlock>
            <H4 spaceBottomMobile={spacing.space02}>
              5. Intellectual property rights
            </H4>
            <Paragraph spaceBottomMobile={spacing.space04}>
              Intellectual Property Rights and all other proprietary rights in
              relation to the Website, its Functionalities and related databases
              are the exclusive property of the Company or its licensors.
              <br />
              <br />
              All Intellectual Property Rights and all other proprietary rights
              in relation to the Website not expressly granted herein are
              reserved to the Company. All copyright and other proprietary
              notices shall be retained on all reproductions.
              <br />
              <br />
              Subject to these Terms and for the purpose of using the Website
              and benefiting from its Functionalities, the Company hereby grants
              the Users a limited, non-exclusive, non-transferable, non-sub
              licensable, royalty free and revocable license to use and display
              the Website (i.e. by simply browsing it as well as by using it and
              benefiting from its Functionalities) for its intended purposes.
              <br />
              <br />
              Any other use of the Website and its content and Functionalities,
              including without limitation distribution, reproduction,
              modification, making available, communicate to the public,
              publicly perform, frame, download, display or transmission, in
              whole or in part, without the prior written consent of the Company
              is strictly prohibited.
              <br />
              <br />
              The User may not derive or attempt to derive the source code
              and/or the object code of all or any portion of the software or
              mobile software of the Website, permit any third party to derive
              or attempt to derive such source code and/or object code, or
              reverse engineer, decompile, disassemble, or translate the
              software of the Website or any part thereof.
              <br />
              <br />
              The Company, together with its licensors (if any), expressly
              reserve all Intellectual Property Rights in all text, programs,
              products, processes, technology, content, source codes, object
              codes, layouts, and other materials, which appear on the Website
              and its Functionalities. Access to the Website and its
              Functionalities does not confer and shall not be considered as
              conferring upon anyone any license under any of the Company’s
              Intellectual Property Rights or any third party&apos;s
              Intellectual Property Rights, except as expressly provided in
              these Terms.
              <br />
              <br />
              Provided the User respects these Terms and all applicable laws,
              he/she/it may view, print and/or download copies of content from
              the Website solely for his/her/its own use, for non-commercial
              purpose and for informational purposes.
            </Paragraph>
            <H4 spaceBottomMobile={spacing.space02}>6. Trademarks</H4>
            <Paragraph spaceBottomMobile={spacing.space04}>
              The Company’s names and logos and all related product and service
              names, design marks and slogans are the trademarks or service
              marks of the Company or its licensors (if any).
              <br />
              <br />
              No trademark or service mark license is granted in connection with
              the materials contained on the Website. Access to and use of the
              Website and its Functionalities does not authorize anyone to use
              any name, logo or trademark of the Company in any manner
              whatsoever.
              <br />
              <br />
              www.prosperitydigital.ch is a domain name owned by the Company.
              The User may not use the trademarks of the Company such as its
              domain names, especially but not only in connection with any
              product or service in any manner that is likely to cause confusion
              or create the impression that the Company endorses any of such
              product or service.
            </Paragraph>
            <H4 spaceBottomMobile={spacing.space02}>
              7. Website provided “as is”, “as available” and release of claims
            </H4>
            <Paragraph spaceBottomMobile={spacing.space04}>
              The Website and its Functionalities are provided &quot;as is&quot;
              and &quot;as available&quot;.
              <br />
              <br />
              The Website is solely provided for general information about the
              Company and its activities.
              <br />
              <br />
              The Company makes no representation, warranty, or guarantee
              regarding the reliability, timeliness, quality, suitability,
              accuracy or completeness with respect to the Functionalities, as
              well as the information contained on the Website (including third
              parties’ content) and/or communicated to any person by the
              Company. The Company does not accept any liability to any person
              for the information contained on the Website or the use of such
              information.
              <br />
              <br />
              To the maximum extent permitted by applicable law, the Company
              disclaims all representations and warranties, express, implied, or
              statutory, including the implied warranties of merchantability,
              fitness for a particular purpose, and non-infringement, in
              relation to the Website and its Functionalities. In addition, the
              Company makes no representation, warranty, or guarantee regarding
              the reliability, timeliness, quality, suitability, or availability
              of the Website and/or its Functionalities, or that the Website
              and/or its Functionalities will be uninterrupted or error-free
            </Paragraph>
            <H4 spaceBottomMobile={spacing.space02}>
              8. Limitation of liability
            </H4>
            <Paragraph spaceBottomMobile={spacing.space04}>
              These Terms set out the full extent of the Company’s obligations
              and liabilities with respect to the provision of the Website.
              <br />
              <br />
              To the greatest extent permitted by law, the Company hereby
              excludes: (i) all conditions, warranties and other terms which
              might otherwise be implied by statute, common law or the law of
              equity; and (ii) any liability for any direct, indirect, punitive,
              special, incidental, exemplary or consequential loss or damage
              (including, but not limited to, damages for deletion, corruption,
              loss of data, loss of programs, loss of income or revenue, loss of
              business, loss of business opportunity, loss of profits or
              contracts, loss of anticipated savings, loss of goodwill, User
              unsatisfaction, failure to store any information or other content
              maintained or transmitted), whether caused by tort (including
              negligence), breach of contract or otherwise, even if foreseeable,
              incurred by any User or third party in connection with the
              Website, these Terms, the Privacy Notice and/or the Cookies
              Policy, even if the Company has been advised of the probability of
              such damages and regardless of whether such liability is asserted
              on the basis of contract, tort or otherwise.
              <br />
              <br />
              The User is responsible for maintaining the security of
              his/her/its environment, including regular use of malware
              screening and prevention software. The User should also be aware
              that email and other communication services are vulnerable to
              spoofing and phishing attacks and should use care in reviewing
              such messages (if any).
              <br />
              <br />
              The Website is available to the User without liability on the part
              of the Company, whether explicit or implicit. The Company does not
              guarantee a constant availability of the Website or provision of
              the Functionalities through the Website. There is no guarantee
              that access to the Website and/or its content (including its
              Functionalities) will not be interrupted or that there will be no
              delays, failures, errors, omissions or loss of transmitted data.
              The Company is not liable for (partial) interruptions to and
              downtime of the Website due to repair, maintenance or update work
              or for other reasons that it cannot directly control (such as
              Force Majeure Event) or that only impede use of the Website to a
              negligible extent. In addition, the Company cannot be held liable
              for any malfunction, breakdown, delay or interruption of the
              Internet connection.
              <br />
              <br />
              Any warranty, condition or other term arising out of or in
              connection with the Website which might otherwise be implied into
              or incorporated into these Terms by statute, common law, laws
              applicable in the country where the User browses the Website or
              otherwise (including without limitation any implied term as to
              quality, fitness for purpose, reasonable care and skill) is hereby
              expressly excluded.
              <br />
              <br />
              The User expressly acknowledges and agrees that his/her/its use of
              the Website is at his/her/its own and sole risk. The Website is
              provided “as is” and “as available” without warranty of any kind,
              either express or implied. Therefore, the User is solely
              responsible for any damage to his/her/its computer system/mobile
              device or loss of data that results from the download of such
              material and/or data.
              <br />
              <br />
              The Company does not make any representations or warranties as to
              the quality, suitability, safety, truth, usefulness, accuracy, or
              completeness of the Functionalities, the Website or any of the
              content contained therein (including third parties’ content) and
              does not assume any responsibility or risk for the User’s use of
              the Internet in connection with the Functionalities, the Website
              and any content contained therein (including third parties’
              content).
              <br />
              <br />
              The Company does not guarantee any return, increase or revenue to
              the User thanks to the Website. The Company shall not be liable if
              the User loses money, business and/or business opportunity.
              <br />
              <br />
              When interacting with a third party, whether or not the User has
              known the third party through the Website, the User and this third
              party are solely responsible for any issue arising from their
              relationship. The Company bears absolutely no responsibility
              arising from the relationship (if any) between the Users and third
              parties.
              <br />
              <br />
              The User agrees to release the Company (including its affiliates,
              and each of its respective officers, directors, employees, agents,
              shareholders, partners, licensors, and suppliers) from any claims,
              demands and damages of every kind and nature, known and unknown,
              suspected and unsuspected, disclosed and undisclosed, arising out
              of or in any way connected to dispute(s) with the Companys
              partners, other Users or any third parties.
              <br />
              <br />
              The User understands and agrees that by filing any claim more than
              thirty (30) days after the discovery of the alleged liability of
              the Company, he/she/it will be deemed to have forfeited
              his/her/its rights; any such claim shall be time-barred. This
              provision applies to the maximum extent permitted by applicable
              law.
            </Paragraph>
            <H4 spaceBottomMobile={spacing.space02}>9. Indemnification</H4>
            <Paragraph spaceBottomMobile={spacing.space04}>
              The User agrees to defend, indemnify and hold harmless the Company
              and its affiliates with their respective shareholders (if any),
              associates, partners, officers, directors, employees, agents,
              licensors, representatives and suppliers (each, an
              &quot;Indemnified Party&quot;) from and against any losses,
              claims, actions, costs, damages, penalties, fines and expenses,
              including without limitation attorneys&quot;, experts’ and
              internal fees and expenses, that may be incurred by an Indemnified
              Party arising out of, relating to or resulting from the use,
              misuse or unauthorized use of the Website and/or its
              Functionalities by the User or from any breach by the User of
              these Terms, the Privacy Notice, the Cookies Policy and/or any
              applicable third parties’ policies and terms & conditions,
              including without limitation any actual or alleged violation of
              any applicable laws, rules or regulations.
              <br />
              <br />
              The Company shall notify the User of any such claim or suit, and
              then reasonably cooperate (at User’s expense) in the defense of
              such claim or suit. The Company reserves the right to participate
              in the defense of such claim or choose its own legal counsel but
              is not obligated to do so.
              <br />
              <br />
              To the maximum extent permitted by applicable law, the User hereby
              discharges, acquits, and otherwise releases the Indemnified Party,
              from any and all allegations, counts, charges, debts, causes of
              action, claims and losses, relating in any way to the use of the
              Website.
            </Paragraph>
            <H4 spaceBottomMobile={spacing.space02}>10. Downtime</H4>
            <Paragraph spaceBottomMobile={spacing.space04}>
              Since the Website is web-based, it might be subject to temporary
              downtime.
              <br />
              <br />
              From time to time, the Company may also update or maintain the
              Website, which will result in the Website not being available for
              a certain period of time. The Company does not warrant that the
              Website operates uninterrupted or error free.
              <br />
              <br />
              The Company is not responsible for any damages or losses suffered
              by the User because of any failure or interruption of the Website
              and/or suspension of User’s access to the Website and/or its
              Functionalities.
            </Paragraph>
            <H4 spaceBottomMobile={spacing.space02}>11. Force Majeure Event</H4>
            <Paragraph spaceBottomMobile={spacing.space04}>
              The Company cannot accept responsibility for any damage, loss,
              delay, or inconvenience caused by circumstances beyond its
              reasonable control, such as Force Majeure Event.
              <br />
              <br />
              In this situation, the Company reserves the right to shut-down the
              Website without any obligation to indemnify any User.
              <br />
              <br />
              Without prejudice to any other right under these Terms, if any
              law, regulation, rule or decision of any self-regulatory
              organization, or ordinance, whether domestic or international,
              becomes effective and substantially alters the Company’s ability
              to offer the Website hereunder and/or its Functionalities, the
              Company shall also have the right to shut-down the Website without
              any obligation to indemnify any User.
            </Paragraph>
            <H4 spaceBottomMobile={spacing.space02}>11. Force Majeure Event</H4>
            <Paragraph spaceBottomMobile={spacing.space04}>
              The Company may, at its sole and entire discretion, display third
              parties’ content through the Website, as well as links to other
              companies’ websites or third parties’ content.
              <br />
              <br />
              In this case, the User expressly understands and agrees that the
              Company does not assume responsibility for the third parties’
              content made available through the Website, as well as for the
              third parties’ website and content available through a link on the
              Website. The Company has no control on the third parties’ content
              it may display on the Website and shall bear no liability for this
              content.
              <br />
              <br />
              The User understands and agrees that he/she/it potentially may be
              bound by third parties’ policies and terms & conditions while
              using the Website and third parties’ content.
              <br />
              <br />
              The User represents and warrants that he/she/it read and accepted
              the third parties’ policies and terms & conditions (if any).
              <br />
              <br />
              The User expressly agrees that the Company does not assume
              responsibility for the third parties’ policies and terms &
              conditions.
              <br />
              <br />
              If the User has a dispute related to third parties’ content (of
              any kind) and/or third parties’ policies and terms & conditions,
              he/she/it agrees to release the Company (including its affiliates,
              and each of its respective officers, directors, employees, agents,
              shareholders (if any), associates, partners, licensors,
              representatives and suppliers) from any claims, demands and
              damages of every kind and nature, known and unknown, suspected and
              unsuspected, disclosed and undisclosed, arising out of or in any
              way connected to such disputes.
            </Paragraph>
            <H4 spaceBottomMobile={spacing.space02}>
              13. Personal Data protection
            </H4>
            <Paragraph spaceBottomMobile={spacing.space04}>
              The Company uses the User’s Personal Data for the purposes set out
              in the Privacy Notice and in the Cookies Policy and/or for other
              purposes permitted by law.
              <br />
              <br />
              Generally, the Personal Data are solely process by the Company to
              provide the User with the Website and its Functionalities and to
              allow him/her/it to use the Website and its Functionalities in the
              best possible way.
            </Paragraph>
            <H4 spaceBottomMobile={spacing.space02}>
              14. Entire agreement & severability
            </H4>
            <Paragraph spaceBottomMobile={spacing.space04}>
              These Terms, subject to any amendments made by the Company from
              time to time, shall constitute the entire agreement between the
              User and the Company with respect to the Website and any use
              thereof.
              <br />
              <br />
              If any provision of these Terms is found to be invalid by a court
              or competent jurisdiction, that provision only will be limited to
              the minimum extent necessary and the remaining provisions will
              remain in full force and effect.
            </Paragraph>
            <H4 spaceBottomMobile={spacing.space02}>15. Modifications</H4>
            <Paragraph spaceBottomMobile={spacing.space04}>
              The Company reserves the right to make any changes to these Terms
              at any time, as the Company deems necessary or desirable. The
              User’s continued use of the Website after any such changes shall
              constitute his/her/its consent to such changes.
              <br />
              <br />
              The User agrees that, where lawful, all modifications or changes
              to these Terms shall take effect and be enforceable immediately
              upon posting unless otherwise indicated and, subject to applicable
              laws, any updated or edited version of these Terms supersedes any
              prior versions immediately upon posting, and the prior version is
              of no continuing legal effect unless the revised version
              specifically refers to the prior version and explicitly states
              that the prior version (or portions thereof) will remain in
              effect.
              <br />
              <br />
              If the User does not wish to be bound by the revised Terms,
              he/she/it should cease using the Website and benefiting from its
              Functionalities. It is the User’s responsibility to review the
              Website and these Terms on a regular basis.
            </Paragraph>
            <H4 spaceBottomMobile={spacing.space02}>16. No waiver</H4>
            <Paragraph spaceBottomMobile={spacing.space04}>
              The Company’s failure to enforce a provision of these Terms does
              not constitute a waiver of its right to do so in the future with
              respect to that provision, any other provision, or these Terms as
              a whole.
            </Paragraph>
            <H4 spaceBottomMobile={spacing.space02}>17. Assignment</H4>
            <Paragraph spaceBottomMobile={spacing.space04}>
              The User may not assign any of his/her/its rights, licenses, or
              obligations under these Terms. Any such attempt at assignment by
              the User shall be void.
              <br />
              <br />
              The Company may freely assign its rights, licenses, and
              obligations under these Terms without limitation.
            </Paragraph>
            <H4 spaceBottomMobile={spacing.space02}>
              18. Governing law and jurisdiction
            </H4>
            <Paragraph spaceBottomMobile={spacing.space04}>
              These Terms shall be governed by the laws of Switzerland, to the
              exclusion of any rules of conflict of laws.
              <br />
              <br />
              Any dispute regarding these Terms, the Website and its
              Functionalities shall be subject to the exclusive jurisdiction of
              the Courts of Lausanne, Switzerland, subject to possible appeal to
              the Swiss Supreme Court (Tribunal fédéral).
            </Paragraph>
          </Column>
        </Grid>
      </Section>

      {/*
       * Contact CTA
       */}
      <SectionCta
        text="We are opinioned but also easy to talk to."
        buttonText="Get in touch"
        backgroundImage={imageGradientTwo.src}
        action={() => router.push('/contact')}
      />
    </>
  )
}
export default TermsAndConditions
