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

const CookiePolicy: NextPage = () => {
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
        <title>Cookies Policy | Prosperity Digital</title>

        <meta
          name="description"
          content="Get acquainted with Prosperity Digital’s legal documentation — Terms and Conditions, Cookies Policy, and Privacy Notice."
        />

        <meta
          name="twitter:title"
          content="Cookies Policy | Prosperity Digital"
        />
        <meta
          name="twitter:description"
          content="Get acquainted with Prosperity Digital’s legal documentation — Terms and Conditions, Cookies Policy, and Privacy Notice."
        />
        <meta
          property="og:title"
          content="Cookies Policy | Prosperity Digital"
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
            <H3>Cookies Policy Prosperity Digital</H3>
          </Column>
        </Grid>
      </Section>

      {/*
       * Content
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
              Whenever the User uses the Website, Cookies and other tracking
              technologies can be used in various ways, such as making the
              Website works, analyzing traffic, or for advertisement purposes.
              <br />
              <br />
              These technologies are either used by Prosperity Digital, Batiment
              D Innovation Park EPFL, 1015 Lausanne, Switzerland, directly or by
              Prosperity Digital’s partners.
              <br />
              <br />
              Capitalized terms defined in the Terms available at the following
              address: [please add] and in the Privacy Notice available at the
              following address: [please add] apply to this Cookies Policy.
            </Paragraph>

            <H4 spaceBottomMobile={spacing.space02}>1. Cookies’ description</H4>
            <Paragraph spaceBottomMobile={spacing.space04}>
              A Cookie is a piece of information that is placed automatically on
              User’s electronic device’s hard drive when he/she/it accesses the
              Website and which is listed in this Cookies Policy.
              <br />
              <br />
              The Cookie uniquely identifies User’s browser to the server.
              Cookies also allow to store of information on the server (for
              example language preferences, technical information, click or path
              information, etc.) to help make the User&apos;s experience of the
              Website better and to conduct Website analysis and Website
              performance review.
            </Paragraph>
            <H4 spaceBottomMobile={spacing.space02}>
              2. Purpose of cookies’ collection
            </H4>
            <Paragraph>
              To make full use of the Website, User’s computer, tablet or mobile
              phone will need to accept Cookies. Prosperity Digital uses Cookies
              to give the User a better experience. For example, Prosperity
              Digital uses Cookies in the following ways:
            </Paragraph>
            <BlogUnorderedList spaceBottom={spacing.space04}>
              <li>
                to ensure that User has a seamless experience on the Website;
              </li>
              <li>
                to provide information that can help Prosperity Digital to
                understand what interested the User about the Website and what
                did not. This helps Prosperity Digital to provide the User with
                more personalized features, and more relevant information on
                subsequent visits;
              </li>
              <li>
                to record information such as the date and time of the
                connection on the Website, the type of navigator used to browse
                the Website, the language is chosen, IP address to enable
                Prosperity Digital to tailor the Website to User’s preferences;
                and
              </li>
              <li>
                to make internal research and analysis about the utilization of
                the Website;
              </li>
              <li>to ensure the security of the Website.</li>
            </BlogUnorderedList>
            <H4 spaceBottomMobile={spacing.space02}>
              3. Type of personal data processed through cookies
            </H4>
            <Paragraph spaceBottomMobile={spacing.space04}>
              The types of information that Prosperity Digital Collects through
              Cookies include IP address; device ID; viewed pages; browser type;
              browser version; browsing information; device; operating system;
              screen resolution; referrer; referrer type; entry; entry page;
              pages visited; links clicked on the Website; Internet service
              provider; timestamp; the referring URL; date and time of
              connection to the Website; place of consultation of the Website,
              geolocalization data; time spent on the Website; content
              consulted; language settings and preferences; and any others
              features used or activities engaged in within the Website.
            </Paragraph>
            <H4 spaceBottomMobile={spacing.space02}>4. Type of cookies used</H4>
            <H5>4.1 Essential Cookies</H5>
            <Paragraph spaceBottomMobile={spacing.space02}>
              Some Cookies are essential for the User to be able to experience
              the full functionalities of the Website. Essential Cookies prevent
              any security threats. They are not used in order to Collect or
              store any of User’s Personal Data. For example, Essential Cookies
              allow User to browse the Website within the scope of the Terms.
              <br />
              <br />
              These are Cookies that are required for the operation of the
              Website.
            </Paragraph>
            <H5>4.2 Performance Cookies</H5>
            <Paragraph spaceBottomMobile={spacing.space02}>
              These Cookies store information like the number of visits on the
              Website, which pages of the Website have been visited, the source
              of the visit etc. This helps to improve the way the Website works
              and to ensure that Users are finding what they are looking for.
              <br />
              <br />
              Statistics Cookies also help Prosperity Digital understands and
              analyzes how well the Website performs and where it needs
              improvement. They allow Prosperity Digital to recognise and count
              the number of visits of the Website by the Users and to see how
              the Users move around when browsing the Website. Prosperity
              Digital also use Google Analytics Cookies as detailed hereunder.
            </Paragraph>
            <H5>4.3 Marketing Cookies</H5>
            <Paragraph spaceBottomMobile={spacing.space02}>
              These Cookies store information like the number of visits on the
              Website, which pages of the Website have been visited, the source
              of the visit etc. This helps to improve the way the Website works
              and to ensure that Users are finding what they are looking for.
              <br />
              <br />
              Statistics Cookies also help Prosperity Digital understands and
              analyzes how well the Website performs and where it needs
              improvement. They allow Prosperity Digital to recognise and count
              the number of visits of the Website by the Users and to see how
              the Users move around when browsing the Website. Prosperity
              Digital also use Google Analytics Cookies as detailed hereunder.
            </Paragraph>
            <H5>4.4 Functional Cookies</H5>
            <Paragraph spaceBottomMobile={spacing.space02}>
              These are the Cookies that may help certain non-essential
              functionalities of the Website. These functionalities include
              embedding content like videos or sharing contents of the Website
              on social media websites or third-parties’ applications.
            </Paragraph>
            <H5>4.5 Preferences Cookies</H5>
            <Paragraph spaceBottomMobile={spacing.space02}>
              These Cookies help Prosperity Digital stores User’s settings and
              browsing preferences like language preferences so that User has a
              better and efficient experience on future visits to the Website.
              <br />
              <br />
              These Cookies are also used to recognize the User when he/she/it
              returns to the Website in order to greet the User by name,
              remember his/her/its preferences and maintain his/her/its
              relationships with other Users.
            </Paragraph>
            <H5>4.6 Targeting Cookies</H5>
            <Paragraph spaceBottomMobile={spacing.space04}>
              These Cookies record User’s visit to the Website, the pages
              he/she/it has visited and the links he/she/it has followed.
              Prosperity Digital will use this information to make the Website
              and any marketing communication displayed on it more relevant to
              the User’s interests.
            </Paragraph>
            <H4 spaceBottomMobile={spacing.space02}>
              5. Cookies’ restriction and consent
            </H4>
            <Paragraph spaceBottomMobile={spacing.space02}>
              If the User would prefer to restrict, block or delete Cookies from
              the Website, he/she/it can use his/her/its web browser to achieve
              this.
              <br />
              <br /> If the User decides not to allow Prosperity Digital to use
              Cookies, please be aware that the User will be unable to use all
              the Functionalities of the Website.
              <br />
              <br /> In order to control the collection of Personal Data for
              analytical purposes through Google Analytics from certain browser
              types, the User may want to visit the following link:
              https://tools.google.com/dlpage/gaoptout.
            </Paragraph>
            <TearmsColorBlock bottomSpacing={spacing.space04}>
              <Paragraph spaceBottomMobile="0">
                By ticking the box “This website uses cookies to improve user
                experience. Accept” the User expressly Consents that Prosperity
                Digital uses the type of Cookies defined in Article 4 of this
                Cookies Policy and that Prosperity Digital Processes the
                Personal Data listed under Article 3 of this Cookies Policy.
              </Paragraph>
            </TearmsColorBlock>
            <H4 spaceBottomMobile={spacing.space02}>6. Google Analytics</H4>
            <Paragraph spaceBottomMobile={spacing.space04}>
              The Website uses Google Analytics, an Internet website analysis
              service supplied by Google Inc. (“Google”).
              <br />
              <br />
              Google Analytics uses Cookies to help to analyse the use made of
              the Website by its Users. The Cookies’ Data concerning the User’s
              use of the Website (including his/her/its IP address) will be
              forwarded to and stored by, Google on servers located outside of
              Switzerland. Google will use this Personal Data to evaluate the
              User’s use of the Website, compile reports on the websites
              activity for its publisher and provide other services relating to
              the activity of the Website and the use of the Internet. Google
              may release these Personal Data to third parties if there is a
              legal obligation to do so or when the third parties Process these
              Personal Data for the account of Google including, in particular,
              the publisher of the Website. Google will not cross-reference
              User’s IP address with any other data held by Google.
              <br />
              <br />
              The User may deactivate the use of Cookies by selecting the
              appropriate parameters on his/her/its browser
              (https://tools.google.com/dlpage/gaoptout). However, deactivation
              of this kind might prevent the use of certain functions of the
              Website. By using the Website, the User specifically Consents to
              the Processing of his/her/its Personal Data by Google under the
              conditions and for the purposes described in this Cookies Policy
              and in the Privacy Notice.
            </Paragraph>
            <H4 spaceBottomMobile={spacing.space02}>7. Contact</H4>
            <Paragraph>
              To ask questions or make comments on this Cookies Policy or to
              make a complaint about Prosperity Digital’s compliance with
              applicable privacy laws, please contact Prosperity Digital
              through:
            </Paragraph>
            <BlogUnorderedList>
              <li>info@prosperitydigital.ch; or</li>
              <li>Batiment D Innovation Park EPFL,</li>
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
export default CookiePolicy
