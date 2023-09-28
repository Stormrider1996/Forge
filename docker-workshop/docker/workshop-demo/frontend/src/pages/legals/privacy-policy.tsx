import {
  BlogUnorderedList,
  Column,
  Grid,
  H3,
  H4,
  H5,
  Link,
  Paragraph,
  Section,
  SectionCta,
  Sidebar,
  SidebarMenu,
  TearmsColorBlock
} from '@components'
import { spacing } from '@variables'
import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import imageGradientTwo from 'public/images/gradient-variation-two.webp'
import { useEffect, useState } from 'react'

const PrivacyPolicy: NextPage = () => {
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
        <title>Privacy Notice | Prosperity Digital</title>

        <meta
          name="description"
          content="Get acquainted with Prosperity Digital’s legal documentation — Terms and Conditions, Cookies Policy, and Privacy Notice."
        />

        <meta
          name="twitter:title"
          content="Privacy Notice | Prosperity Digital"
        />
        <meta
          name="twitter:description"
          content="Get acquainted with Prosperity Digital’s legal documentation — Terms and Conditions, Cookies Policy, and Privacy Notice."
        />
        <meta
          property="og:title"
          content="Privacy Notice | Prosperity Digital"
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
            <H3>Privacy Notice Prosperity Digital</H3>
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
                    // nosegrep
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
              The security and protection of your Personal Data is a priority of
              Prosperity Digital operating the Website.
              <br />
              <br />
              Prosperity Digitalis collecting Personal Data from the Users
              browsing the Website.
              <br />
              <br />
              This Privacy Notice aims to protect the privacy of the Users when
              their Personal Data is being Processed by Prosperity Digital and
              while they are browsing the Website. This Privacy Notice is
              applicable to all Users of the Website. This Privacy Notice should
              be read in conjunction with the Terms applicable to the Website.
              <br />
              <br />
              Prosperity Digital uses privacy by default standards and
              undertakes to store and Process the Personal Data of the Users in
              a secure manner and with all appropriate care and attention in
              accordance with all the Applicable Laws.
            </Paragraph>
            <H4 spaceBottomMobile={spacing.space02}>1. Definitions</H4>
            <Paragraph spaceBottomMobile={spacing.space04}>
              The definitions available in Annex A to this Privacy Notice are
              applicable to the capitalized terms of this Privacy Notice.
              <br />
              <br /> Capitalized terms not defined in this Privacy Notice have
              the meanings set forth in the Terms available at the following
              address: [please add].
            </Paragraph>
            <H4 spaceBottomMobile={spacing.space02}>2. Scope</H4>
            <Paragraph>
              Prosperity Digital provides this Privacy Notice to describe its
              procedures regarding the Processing and Disclosure of Personal
              Data Collected by Prosperity Digital. This Privacy Notice shall
              apply to any use of the Website and social networks accounts,
              whatever the method or medium used. It details the conditions at
              which Prosperity Digital may Collect, keep, use, Process and save
              information that relates to the Users.
            </Paragraph>
            <H4 spaceBottomMobile={spacing.space02}>3. Acceptance</H4>
            <TearmsColorBlock bottomSpacing={spacing.space04}>
              <Paragraph spaceBottomMobile="0">
                By browsing the Website, the User acknowledges that he/she/it
                has read and understood this Privacy Notice and agree to be
                bound by it and to comply with all Applicable Laws.
                <br />
                <br />
                Before accessing and/or continuing to use the Website, the User
                shall first read and understand the terms of this Privacy Notice
                and any amended versions to this Privacy Notice.
                <br />
                <br />
                <b>
                  In the event of non-acceptance of this Privacy Notice, all use
                  of the Website must cease immediately.
                </b>
              </Paragraph>
            </TearmsColorBlock>
            <H4 spaceBottomMobile={spacing.space02}>
              4. Processing Principles
            </H4>
            <Paragraph spaceBottomMobile={spacing.space02}>
              While Processing Personal Data, Prosperity Digital will be guided
              by the following principles:
            </Paragraph>
            <H5>4.1. Fairness and lawfulness</H5>
            <Paragraph spaceBottomMobile={spacing.space02}>
              When Processing Personal Data, the individual rights of the Users
              will be protected. Personal Data will be Collected and Processed
              lawfully, in a fair manner, in good faith and will be
              proportionate to the objective.
            </Paragraph>
            <H5>4.2. Restriction to a specific purpose</H5>
            <Paragraph spaceBottomMobile={spacing.space02}>
              Personal Data Processed by Prosperity Digital will be adequate and
              relevant to the purpose for which they are Collected and
              Processed. This requires, in particular, ensuring that the types
              of Personal Data Collected are not excessive to the purpose for
              which they are Collected. Subsequent changes to the purpose are
              only possible to a limited extent and require substantiation.
            </Paragraph>
            <H5>4.3. Transparency</H5>
            <Paragraph>
              The User is informed of how his/her/its Personal Data is being
              Processed. This Privacy Notice informs the User of:
            </Paragraph>
            <BlogUnorderedList>
              <li>the existence of this Privacy Notice;</li>
              <li>the identity of the Data Controller;</li>
              <li>the purpose of Personal Data Processing;</li>
              <li>
                how, where, and by whom the Personal Data is being Processed;
                and
              </li>
              <li>
                third parties to whom the Personal data might be transmitted.
              </li>
            </BlogUnorderedList>
            <Paragraph spaceBottomMobile={spacing.space02}>
              Generally, the User shall obtain this information for any other
              Personal Data Collected which are not listed in this Privacy
              Notice.
            </Paragraph>
            <H4 spaceBottomMobile={spacing.space02}>1. Definitions</H4>
            <Paragraph spaceBottomMobile={spacing.space04}>
              The definitions available in Annex A to this Privacy Notice are
              applicable to the capitalized terms of this Privacy Notice.
              <br />
              <br /> Capitalized terms not defined in this Privacy Notice have
              the meanings set forth in the Terms available at the following
              address: [please add].
            </Paragraph>
            <H5>4.4. Accuracy</H5>
            <Paragraph spaceBottomMobile={spacing.space04}>
              Personal Data kept on file will be correct and if necessary, be
              kept up to date. Inaccurate or incomplete Personal Data will not
              be kept on file and deleted.
            </Paragraph>
            <H4 spaceBottomMobile={spacing.space02}>5. Collected data</H4>
            <Paragraph spaceBottomMobile={spacing.space02}>
              This Privacy Notice applies to all information that is received
              during the use of the Website by the User.
            </Paragraph>
            <H5>
              5.1. Use of the Website without contacting Prosperity Digital
            </H5>
            <Paragraph>
              The User may contact Prosperity Digital through the Website by
              filling in the contact form. This implies that the User grants
              Prosperity Digital the following Personal Data:
            </Paragraph>
            <Paragraph>
              <b>a. Mandatory Personal Data</b>
            </Paragraph>
            <BlogUnorderedList paddingLeft="3rem">
              <li>Email address.</li>
            </BlogUnorderedList>
            <Paragraph>
              <b>b. Optional Personal Data</b>
            </Paragraph>
            <BlogUnorderedList paddingLeft="3rem">
              <li>Company’s name;</li>
              <li>Phone number; and</li>
              <li>
                Address (street name, street number, ZIP code, city and
                country).
              </li>
            </BlogUnorderedList>
            <Paragraph spaceBottomMobile={spacing.space02}>
              (the <b>“Contact Data”</b>)
            </Paragraph>
            <H5>5.3. Newsletter</H5>
            <Paragraph>
              The User may subscribe to the Newsletter through the Website by
              granting Prosperity Digital the following Personal Data:
            </Paragraph>
            <Paragraph>
              <b>a. Mandatory Personal Data</b>
            </Paragraph>
            <BlogUnorderedList paddingLeft="3rem">
              <li>Email address.</li>
            </BlogUnorderedList>
            <Paragraph>
              <b>b. Optional Personal Data</b>
            </Paragraph>
            <BlogUnorderedList paddingLeft="3rem">
              <li>First name;</li>
              <li>Last name.</li>
            </BlogUnorderedList>
            <Paragraph spaceBottomMobile={spacing.space02}>
              (the <b>“Newsletter Data”</b>)
            </Paragraph>
            <H5>5.4. Support in the development of a company / project</H5>
            <Paragraph>
              Since Prosperity Digital’s mission is to provide support to
              foreign companies allowing them to get established quickly and
              develop their activities in Western Switzerland, Prosperity
              Digital may decide – at its sole and entire discretion – to
              support a User in the development of his/her/its project.
              <br />
              <br />
              In such case, Prosperity Digital will collect Personal Data about
              the User and his/her/its company or project, which especially but
              not only includes:
            </Paragraph>
            <BlogUnorderedList paddingLeft="3rem">
              <li>
                the contact information (name, surname, company name, address,
                seat, phone number, email address, and so on) of the User;
              </li>
              <li>
                the correspondence between the User and Prosperity Digital;
              </li>
              <li>
                the correspondence between the User and third parties (such as
                partners, authorities, companies, etc.) communicated to
                Prosperity Digital;
              </li>
              <li>
                the correspondence between Prosperity Digital and third parties
                (such as partners, authorities, companies, etc.);
              </li>
              <li>the details about the project;</li>
              <li>
                minutes of the meeting between Prosperity Digital and the User,
                as well as between Prosperity Digital and third parties (such as
                partners, authorities, companies, etc.);
              </li>
              <li>internal documentation of the User; and</li>
              <li>
                any other Personal data that the User voluntarily and freely
                communicate to Prosperity Digital.
              </li>
            </BlogUnorderedList>
            <Paragraph spaceBottomMobile={spacing.space04}>
              (the <b>“Project Data”</b>)
            </Paragraph>
            <H4 spaceBottomMobile={spacing.space02}>
              6. Use of collected data
            </H4>
            <Paragraph spaceBottomMobile={spacing.space02}>
              The following paragraphs describe the various purposes for which
              Prosperity Digital Collects and Processes the Personal Data of the
              User listed in Article 5 of this Privacy Notice.
            </Paragraph>
            <H5>6.1. Legitimate interest</H5>
            <Paragraph spaceBottomMobile={spacing.space02}>
              Prosperity Digital has a legitimate interest to Process Users’
              Cookies, in order to actively monitor, investigate, prevent and
              mitigate any potentially prohibited or illegal activities, and/or
              violations of the Terms or the Applicable Laws.
              <br />
              <br />
              In addition, Prosperity Digital Processes Users’ Cookies in order
              to know who uses the Website, to ensure that there is no
              cyber-security threat, as well as to have an initial verification
              of the Users that use the Website. Prosperity Digital uses the
              geographical location information of the User in order to ensure
              that the Website will not be used in a country/area where it is
              expressly prohibited for the Website to be used.
              <br />
              <br />
              Prosperity Digital also Processes Users’ Cookies to evaluate the
              use of the Website, to optimize and improve the Website, as well
              as to analyze the preferences and the patterns of each User in
              order to personalize User’s experience of the Website.
            </Paragraph>
            <H5>6.2. Consent</H5>
            <Paragraph>
              <b>a.Generaly</b>
              <br />
              <br />
              The User is free to communicate to Prosperity Digital the Personal
              Data he/she/it desires. By voluntarily communicating his/her/its
              Personal Data to Prosperity Digital, the User expressly Consents
              that Prosperity Digital Processes the Personal Data communicated.
              <br />
              <br />
              In any case, Users agree that Prosperity Digital may Process:
              <br />
              <br />
            </Paragraph>
            <BlogUnorderedList>
              <li>
                Cookies Data which are not Processed on the basis of a
                legitimate interest as specified in the Cookies Policy;
              </li>
              <li>
                the Personal Data listed under Article 5.2 of this Privacy
                Notice to answer to the question asked by the User through the
                contact form;
              </li>
              <li>
                the Personal Data listed under Article 5.3 of this Privacy
                Notice to communicate the Newsletter to the User; and
              </li>
              <li>
                the Personal Data listed under Article 5.4 of this Privacy
                Notice to provide support to the User within the context of
                his/her/its project.
              </li>
            </BlogUnorderedList>
            <Paragraph>
              For the sake of clarity, Prosperity Digital also Collects and
              Processes all the Personal Data the User freely and voluntarily
              indicates in any communication with Prosperity Digital, either by
              phone, by email, or by mail, as long as these Personal Data is
              required to answer to a User, to help the User in his/her/its
              project, as well as to provide the User with the Newsletter and/or
              with any other kind of service.
            </Paragraph>
            <TearmsColorBlock bottomSpacing={spacing.baseSpacing}>
              <Paragraph spaceBottomMobile="0">
                By freely and voluntarily providing his/her/its Personal Data to
                Prosperity Digital, User hereby Consents with the use and
                Processing of his/her/its Personal Data communicated to
                Prosperity Digital and in accordance with the terms of this
                Privacy Notice.
              </Paragraph>
            </TearmsColorBlock>
            <Paragraph>
              <b>b. Communication with Prosperity Digital (Article 5.2)</b>
              <br />
              <br />
              For the purpose of allowing the User to contact Prosperity
              Digital, this latter needs to Process the Personal Data described
              under Article 5.2 (a) of this Privacy Notice. By contacting
              Prosperity Digital and providing the mandatory Personal Data, the
              User expressly Consents to the use of his/her/its mandatory
              Personal Data listed under Article 5.2 (a) of this Privacy Notice.
              <br />
              <br />
              The User is not obliged to communicate the optional Personal Data
              listed under Article 5.2 (b) of this Privacy Notice but if
              he/she/it does, the User expressly Consents to the use of
              his/her/its optional Personal Data listed under Article 5.2 (b) of
              this Privacy Notice.
            </Paragraph>

            <Paragraph>
              <b>c. Newsletter (Article 5.3)</b>
              <br />
              <br />
              For the purpose of allowing the User to receive the Newsletter,
              Prosperity Digital needs to Process the Personal Data described
              under Article 5.3 (a) of this Privacy Notice. By subscribing to
              the Newsletter and providing the mandatory Personal Data, the User
              expressly Consents with the use of his/her/its mandatory Personal
              Data described under Article 5.3 (a) of this Privacy Notice.
              <br />
              <br />
              The User is not obliged to communicate the optional Personal Data
              listed under Article 5.3 (b) of this Privacy Notice but if
              he/she/it does, the User expressly Consents with the use of
              his/her/its optional Personal Data described under Article 5.3 (b)
              of this Privacy Notice.
            </Paragraph>
            <Paragraph spaceBottomMobile={spacing.space04}>
              <b>d. Project Data (Article 5.4)</b>
              <br />
              <br />
              For the purpose of allowing the User to receive the support of
              Prosperity Digital within the context of a project in Western
              Switzerland, Prosperity Digital needs to Process the Personal Data
              described under Article 5.4 of this Privacy Notice. By contacting
              Prosperity Digital and providing the Project Data, the User
              expressly Consents with the use of his/her/its Project Personal
              Data described under Article 5.4 of this Privacy Notice.
              <br />
              <br />
              The User is not obliged to communicate the Project Data listed
              under Article 5.4 of this Privacy Notice but if he/she/it does,
              the User expressly Consents with the use of his/her/its Project
              Data described under Article 5.4 of this Privacy Notice.
            </Paragraph>
            <H4 spaceBottomMobile={spacing.space02}>7. Data disclosure</H4>
            <Paragraph spaceBottomMobile={spacing.space02}>
              Prosperity Digital may disclose User’s Personal Data under some
              circumstances specified in this Article. In any case, Prosperity
              Digital shall ensure that an adequate protection is guaranteed for
              User’s Personal Data, especially by using data transfer agreements
              or data processing agreement (if needed).
              <br />
              <br />
              In some specific cases, when the level of protection is not
              guaranteed, Prosperity Digital will obtain User’s prior Consent or
              establish with the Recipient of Personal Data a contractual
              framework or sufficient safeguards that ensure an adequate level
              of protection abroad, especially by using Standard Contractual
              Clauses. The User may request access to a copy of these safeguards
              by contacting Prosperity Digital. The User shall be informed of
              any cross-border transfer in the event that it occurs.
            </Paragraph>
            <H5>7.1. Prosperity Digital’s employees</H5>
            <Paragraph spaceBottomMobile={spacing.space02}>
              Prosperity Digital’s employees may Process User’s Personal Data
              listed under Articles 5.1 to 5.4 of this Privacy Notice in order
              to ensure a consistently high service standard and in line with
              the internal regulations of Prosperity Digital. Prosperity
              Digital’s employees also have to Process User’s Personal Data to
              run Prosperity Digital’s activities, which especially include
              answering to the question of the User, sending the Newsletter, as
              well as providing support to Users in their project.
              <br />
              <br /> The employment contracts of the employees contain
              confidentiality clause.
            </Paragraph>
            <H5>7.2. IT Service Provider</H5>
            <Paragraph spaceBottomMobile={spacing.space02}>
              The IT Service Provider of Prosperity Digital has access to some
              of the User’s Personal Data since it hosts the Website and makes
              sure that the Website technically works.
              <br />
              <br /> Contact Data (Article 5.2) and Newsletter Data (Article
              5.3) are hosted by the IT Service Provider in Switzerland.
              <br />
              <br />
              The storage, as well as the Processing of these Personal Data, may
              require that Personal Data is ultimately transmitted to, and/or
              stored at a destination outside of the User’s country of
              residence. Where permitted by law, by accepting the terms of this
              Privacy Notice, the User accepts that this transmission and
              disclosure may occur.
            </Paragraph>
            <H5>7.3. add.com</H5>
            <Paragraph>
              When Prosperity Digital decides – at its sole and entire
              discretion – to support a User in his/her/its project, Prosperity
              Digital needs to Process Project Data.
              <br />
              <br /> Thus, Prosperity Digital’s employees create a folder with
              Project Data which is stored on add CRM (Customer Relationship
              Management) on servers located in add.
            </Paragraph>
            <TearmsColorBlock bottomSpacing={spacing.space02}>
              <Paragraph spaceBottomMobile="0">
                By freely and voluntarily communicating Project Data (Article
                5.4) to Prosperity Digital, the User expressly understands, and
                Consents that Project Data will be stored on add CRM (Customer
                Relationship Management) on servers located in the United States
                of America and Processed by add.com on the basis of a Data
                Processing Agreement (DPA) concluded with Prosperity Digital.
              </Paragraph>
            </TearmsColorBlock>
            <H5>7.4. Public or regulatory authorities</H5>
            <Paragraph spaceBottomMobile={spacing.space04}>
              If required from time to time, Prosperity Digital may disclose
              Personal Data to public authorities, regulators or governmental
              bodies, including when required by law or regulation, under a code
              of practice or conduct, or when these authorities or bodies
              require Prosperity Digital to do so.
            </Paragraph>
            <H4 spaceBottomMobile={spacing.space02}>
              8. Retention of user’s personal data
            </H4>
            <Paragraph spaceBottomMobile={spacing.space04}>
              In accordance with Applicable Laws, Prosperity Digital will use
              User’s Personal Data for as long as necessary to satisfy the
              purposes for which User’s Personal Data was Collected and/or to
              comply with applicable legal requirements
            </Paragraph>
            <H4 spaceBottomMobile={spacing.space02}>
              9. Security of user’s personal data
            </H4>
            <Paragraph spaceBottomMobile={spacing.space04}>
              Prosperity Digital applies high industry standards and will always
              apply adequate technical and organizational measures, in
              accordance with Applicable Laws to ensure that User’s Personal
              Data is kept secure.
              <br />
              <br />
              In the event of a Breach, Prosperity Digital shall without undue
              delay, and where feasible, not later than seventy-two (72) hours
              after having become aware of it, notify the Breach to the
              competent supervisory authority, unless said Breach is unlikely to
              result in a risk to User’s rights and freedoms. If the Breach is
              likely to result in a high risk to User’s rights and freedoms,
              Prosperity Digital shall communicate this Breach to the User, if
              it is feasible, without undue delay.
            </Paragraph>
            <H4 spaceBottomMobile={spacing.space02}>
              10. Access to personal data and information rights
            </H4>
            <Paragraph spaceBottomMobile={spacing.space04}>
              User has the right to request access to or information about
              his/her/its Personal Data which are Processed by Prosperity
              Digital. Where provided by Applicable Law, the User, his/her
              successors, his/her/its representatives and/or proxies may (i)
              request deletion, correction or revision of User’s Personal Data;
              (ii) oppose the data Processing; (iii) limit the use and
              Disclosure of User’s Personal Data; and (iv) revoke Consent to any
              of the Personal Data Processing activities, if Prosperity Digital
              is relying on User’s Consent and does not have another legal basis
              or legitimate interest to continue Processing User’s Personal
              Data.
              <br />
              <br />
              These rights can be exercised by contacting Prosperity Digital at:
              info@prosperitydigital.ch attaching a copy of User’s ID. If the
              request is submitted by a person other than the User, without
              providing evidence that the request is legitimately made on User’s
              behalf, the request will be rejected.
              <br />
              <br />
              The request is free of charge unless User’s request is unfounded
              or excessive (e.g. if User has already requested such Personal
              Data multiple times in the last twelve months or if the request
              generates an extremely high workload). In such a case, Prosperity
              Digital may charge the User a reasonable request fee according to
              Applicable Laws. Prosperity Digital may refuse, restrict or defer
              the provision of Personal Data where it has the right to do so,
              for example if fulfilling the request will adversely affect the
              rights and freedoms of others.
            </Paragraph>
            <H4 spaceBottomMobile={spacing.space02}>
              11. Portability of personal data
            </H4>
            <Paragraph spaceBottomMobile={spacing.space04}>
              User also have the right to receive his/her/its Personal Data,
              which he/she/it has provided to Prosperity Digital with, in a
              structured, commonly used and machine-readable format and has the
              right to transmit those Personal Data to another Data Controller
              without hindrance from Prosperity Digital.
              <br />
              <br />
              These rights can be exercised by contacting Prosperity Digital at:
              info@prosperitydigital.ch attaching a copy of User’s ID. If the
              request is submitted by a person other than the User, without
              providing evidence that the request is legitimately made on User’s
              behalf, the request will be rejected.
              <br />
              <br />
              The request is free of charge unless User’s request is unfounded
              or excessive (e.g. if User has already requested such Personal
              Data multiple times in the last twelve months or if the request
              generates an extremely high workload). In such a case, Prosperity
              Digital may charge the User a reasonable request fee according to
              Applicable Laws. Prosperity Digital may refuse, restrict or defer
              the provision of Personal Data where it has the right to do so,
              for example if fulfilling the request will adversely affect the
              rights and freedoms of others.
            </Paragraph>
            <H4 spaceBottomMobile={spacing.space02}>
              12. Privacy by design and by default
            </H4>
            <Paragraph spaceBottomMobile={spacing.space04}>
              Prosperity Digital will, both at the time of the determination of
              the means for Processing and at the time of the Processing itself,
              implement appropriate technical and organizational measures, such
              as pseudonymization, which are designed to implement
              data-protection principles, such as data minimization, in an
              effective manner and to integrate the necessary safeguards into
              the Processing in order to meet the requirements of the Applicable
              Laws and protect User’s rights.
              <br />
              <br />
              Prosperity Digital will implement appropriate technical and
              organizational measures, in order to ensure that by default, only
              Personal Data which are necessary for each specific purpose of the
              Processing are Processed.
              <br />
              <br />
              This obligation applies to the amount of User’s Personal Data
              Prosperity Digital Collect, the extent of their Processing, the
              period of storage and their accessibility. These measures will
              ensure that by default User’s Personal Data is not made accessible
              without User’s intervention to an indefinite number of third
              parties.
            </Paragraph>
            <H4 spaceBottomMobile={spacing.space02}>13. User’s rights</H4>
            <Paragraph spaceBottomMobile={spacing.space04}>
              User has a right to ask Prosperity Digital to rectify or update
              inaccurate Personal Data Prosperity Digital Collects and Processes
              and the right to request restriction of User’s Personal Data
              pending such a request being considered. Where Prosperity Digital
              Processes User’s Personal Data on the basis of his/her/its
              Consent, User has the right to withdraw that Consent at any time.
              The withdrawal of Consent shall not affect the lawfulness of
              Processing based on Consent before the withdrawal.
              <br />
              <br />
              User has a right to ask Prosperity Digital to stop Processing
              his/her/its Personal Data, to restrict the Processing of
              his/her/its Personal Data by Prosperity Digital or to request
              deletion of his/her/its Personal Data.
              <br />
              <br />
              User has the right to request erasure of his/her/its Personal Data
              that: (i) is no longer necessary in relation to the purposes for
              which it was Collected or otherwise Processed; (ii) was Collected
              in relation to Processing that User previously Consented, but
              later withdraw such Consent; or (iii) was Collected in relation to
              Processing activities to which User objects, and there are no
              overriding legitimate grounds for Prosperity Digital Processing.
              <br />
              <br />
              User may request to receive his/her/its Personal Data in a
              structured, commonly used and machine-readable format, and to have
              Prosperity Digital transmits User’s Personal Data directly to
              another Data Controller, where technically feasible, unless
              exercise of this right adversely affects the rights and freedoms
              of others (Portability of Personal Data).
              <br />
              <br />
              Users are entitled to object to the Processing of their Personal
              Data for direct marketing purposes, including profiling to the
              extent it is related to such marketing.
              <br />
              <br />
              User is entitled to request to Prosperity Digital for a copy of
              some or all of the Personal Data Prosperity Digital Collects and
              Processes about the User. In certain circumstances Prosperity
              Digital may Process User’s Personal Data through automated
              decision-making, including profiling if this should occur.
              <br />
              <br />
              Where this takes place, User will be informed of such automated
              decision-making that uses his/her/its Personal Data, be given
              information on the logic involved, and be informed of the possible
              consequences of such Processing. In certain circumstances, User
              can request not to be subject to automated decision-making,
              including profiling.
              <br />
              <br />
              The above-mentioned rights can be exercised by contacting
              Prosperity Digital at: info@prosperitydigital.ch, attaching a copy
              of User’s ID. These rights are not absolute (as sometimes there
              may be overriding interests that require the Processing to
              continue, for example), but Prosperity Digital will consider
              User’s request and respond to User with the outcome.
            </Paragraph>
            <H4 spaceBottomMobile={spacing.space02}>
              14. Contacting prosperity digital and complaints
            </H4>
            <Paragraph spaceBottomMobile={spacing.space04}>
              Prosperity Digital will answer any questions or concerns the User
              might have about his/her/its Personal Data.
              <br />
              <br />
              If the User believes that Prosperity Digital infringed his/her/its
              right, Prosperity Digital encourages the User to contact
              Prosperity Digital at: info@prosperitydigital.ch. The User can
              also complain about the Processing of his/her/its Personal Data to
              the Office of the Federal Data Protection and Information
              Commissioner: FDPIC, Feldeggweg 1, 3003 Bern, Switzerland.
              <br />
              <br />
              The User understands that communicating by e-mail/phone may not
              ensure confidentiality, integrity and authenticity. Prosperity
              Digital will not answer any request which will be considered
              unsafe or not ensuring User’s identity authenticity.
            </Paragraph>
            <H4 spaceBottomMobile={spacing.space02}>15. Data controler</H4>
            <Paragraph spaceBottomMobile={spacing.space04}>
              Prosperity Digital is the Data Controller of the User’s Personal
              Data listed under Article 5 of this Privacy Notice.
            </Paragraph>
            <H4 spaceBottomMobile={spacing.space02}>16. Data processor</H4>
            <Paragraph spaceBottomMobile={spacing.space04}>
              The IT Service Provider is Data Processor of the Contact Data
              (Article 5.2) and Newsletter Data (Article 5.3) and Process these
              Personal Data on the basis of a Data Processing Agreement (DPA).
              <br />
              <br />
              Salesforce.com is Data Processor of the Project Data (Article 5.4)
              and Process these Personal Data on the basis of a Data Processing
              Agreement (DPA).
            </Paragraph>
            <H4 spaceBottomMobile={spacing.space02}>
              17. Changes to the privacy notice
            </H4>
            <Paragraph spaceBottomMobile={spacing.space04}>
              Prosperity Digital may modify this Privacy Notice from time to
              time and will post the most current version on the Website.
              <br />
              <br />
              If Prosperity Digital makes any material changes it will notify
              the User by email, prior to the change becoming effective. If a
              modification reduces User’s rights, a pop-up window will inform
              the User immediately when he/she/it will browse the Website and
              the User will have to accept the changes.
            </Paragraph>
            <H4 spaceBottomMobile={spacing.space02}>18. Links</H4>
            <Paragraph spaceBottomMobile={spacing.space04}>
              The Website may contain links which direct the User to third party
              websites, applications, third parties’ content, as well as may
              also contain information about third parties and/or third parties’
              content.
              <br />
              <br />
              Prosperity Digital rejects any liability relating to the privacy
              policy in force on said third party websites or applications, the
              collection and use of User’s Personal Data by the latter and
              relating to the contents of said websites or applications (whether
              the links are hypertext links or deep links).
              <br />
              <br />
              Furthermore, the User acknowledges and agrees that using the
              Website could imply downloading or using third party applications.
              Under no circumstances Prosperity Digital shall be liable for the
              utilization of these others applications, especially regarding the
              Personal Data protection rules.
            </Paragraph>
            <H4 spaceBottomMobile={spacing.space02}>
              19. Jurisdiction and governing law
            </H4>
            <Paragraph spaceBottomMobile={spacing.space04}>
              This Privacy Notice and any questions relating thereto shall be
              governed by the laws of Switzerland, to the exclusion of any rules
              of conflict resulting from private international law.
              <br />
              <br />
              Any dispute relating to this Privacy Notice must exclusively be
              brought before the courts of Lausanne, Switzerland, subject to
              possible recourse to the Federal Court.
            </Paragraph>
            <H4 spaceBottomMobile={spacing.space02}>20. Contact</H4>
            <Paragraph>
              To ask questions or make comments on this Cookies Policy or to
              make a complaint about Prosperity Digital’s compliance with
              applicable privacy laws, please contact Prosperity Digital
              through:
            </Paragraph>
            <BlogUnorderedList>
              <li>info@prosperitydigital.ch; or</li>
              <li>Spark Power SA, Batiment EPFL D, Innovation park</li>
              <li>1015 Lausanne</li>
            </BlogUnorderedList>
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
export default PrivacyPolicy
