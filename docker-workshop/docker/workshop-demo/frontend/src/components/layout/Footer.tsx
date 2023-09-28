import { Button, H4, Link, Subscribe } from '@components'
import { SvgLogoLarge } from '@svg'
import { breakpoints, colors, spacing } from '@variables'
import Image from 'next/image'
import ReactLink from 'next/link'
import { useRouter } from 'next/router'
import footerimg from 'public/images/footerimg.png'
import { FunctionComponent } from 'react'
import styled from 'styled-components'

interface LinkProps {
  linkHref: string
  linkText: string
}

interface Props {
  fontWeight?: string
  link: LinkProps
  subLinks: LinkProps[]
}

const PDFooter = styled.footer`
  background-color: ${colors.shades.light.x100};
  overflow: hidden;
  padding-block: ${spacing.space04} ${spacing.space02};
  padding-inline: ${spacing.grid.wrapper};
`
const FooterGrid = styled.div`
  column-gap: ${spacing.grid.gap};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;

  @media (min-width: ${breakpoints.laptop}) {
    grid-template-columns: repeat(12, 1fr);
  }
`

const FooterLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: links;
  grid-column: span 4;
  margin-bottom: ${spacing.space02};

  @media (min-width: ${breakpoints.laptop}) {
    grid-area: 1 / 1 / 3 / 7;
    margin-bottom: 0;
  }
`

const InputWrapper = styled.div`
  grid-column: span 4;
  margin-bottom: ${spacing.space02};

  @media (min-width: ${breakpoints.laptop}) {
    grid-area: 1 / 8 / 2 / 13;
  }
`

const FooterImgWrapper = styled.div`
  column-gap: ${spacing.grid.gap};
  display: grid;
  grid-column: span 4;
  grid-template-columns: repeat(5, 1fr);

  @media (min-width: ${breakpoints.laptop}) {
    grid-area: 2 / 8 / 3 / 13;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1/-1;
  grid-row: 1;
  justify-content: flex-end;
  position: relative;
  z-index: 2;

  @media (min-width: ${breakpoints.desktop}) {
    grid-column: 1/6;
    margin-bottom: 0;
  }
`

const FooterImgContainer = styled.div`
  grid-column: 3/5;
  grid-row: 1;
  height: 239px;
  position: relative;
  width: 239px;
  z-index: 1;

  @media (min-width: ${breakpoints.laptop}) {
    width: 400px;
    height: 400px;
    grid-column: 3/7;
  }
`

const FooterLogo = styled.span`
  grid-column: span 4;
  margin-block-end: ${spacing.space01};
  margin-block-start: ${spacing.space02};

  @media (min-width: ${breakpoints.laptop}) {
    grid-area: 3 / 1 / 4 / 7;
    margin-bottom: 0;
  }
`

const FooterSocialNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.125rem;
  grid-column: span 4;
  margin-block-end: ${spacing.space02};
  margin-block-start: ${spacing.space02};

  @media (min-width: ${breakpoints.laptop}) {
    grid-area: 3 / 8 / 4 / 13;
    flex-direction: row;
    gap: 0;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0;
  }
`

const BlockLinkWrapper = styled.div`
  border: none;
  border-bottom: 1px solid rgba(88, 101, 104, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 27px;

  &:last-of-type {
    margin-bottom: 0;
  }
`

const LinkItem = styled.div<{ fontWeight?: number }>`
  color: ${colors.grayscale.x400};
  font-weight: ${(props) => props.fontWeight || 400};
  grid-column: span 4;
  margin-bottom: 27px;

  @media (min-width: ${breakpoints.tablet}) {
    grid-column: span 2;
  }
`
const LinkNav = styled.div`
  column-gap: ${spacing.grid.gap};
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (min-width: ${breakpoints.laptop}) {
    grid-template-columns: repeat(6, 1fr);
  }
`

const FooterBlockLink: FunctionComponent<Props> = ({ link, subLinks }) => {
  return (
    <BlockLinkWrapper>
      <LinkItem fontWeight={600}>
        {/* nosemgrep*/}
        <Link href={link.linkHref}>
          <a>{link.linkText}</a>
        </Link>
      </LinkItem>
      {!!subLinks.length && (
        <LinkNav>
          {subLinks.map((item, i) => {
            return (
              <LinkItem key={i}>
                {/* nosemgrep*/}
                <Link href={item.linkHref}>
                  <a>{item.linkText}</a>
                </Link>
              </LinkItem>
            )
          })}
        </LinkNav>
      )}
    </BlockLinkWrapper>
  )
}

export const Footer: FunctionComponent = () => {
  const router = useRouter()

  const isContactSectionVisible = [
    '/',
    '/self-mining',
    '/managed-solutions',
    '/company',
    '/team',
    '/roadmap'
  ].includes(router.pathname)

  return (
    <PDFooter>
      <FooterGrid>
        <InputWrapper>
          <Subscribe />
        </InputWrapper>
        <FooterLinkContainer>
          <FooterBlockLink
            link={{ linkText: 'Overview', linkHref: '/' }}
            subLinks={[
              { linkText: 'Self-mining', linkHref: '/self-mining' },
              { linkText: 'Managed solutions', linkHref: '/managed-solutions' }
            ]}
          />
          <FooterBlockLink
            link={{ linkText: 'Roadmap', linkHref: '/roadmap' }}
            subLinks={[]}
          />
          <FooterBlockLink
            link={{ linkText: 'Company', linkHref: '/company' }}
            subLinks={[
              { linkText: 'Vision', linkHref: '/company#vision-and-mission' },
              { linkText: 'Mission', linkHref: '/company#vision-and-mission' }
            ]}
          />
          <FooterBlockLink
            link={{ linkText: 'Team', linkHref: '/team' }}
            subLinks={[]}
          />
          <FooterBlockLink
            link={{ linkText: 'Get in touch', linkHref: '/contact' }}
            subLinks={[]}
          />
          <FooterBlockLink
            link={{ linkText: 'News', linkHref: '/news' }}
            subLinks={[]}
          />
          <FooterBlockLink
            link={{ linkText: 'Legals', linkHref: '/legals' }}
            subLinks={[
              { linkText: 'Cookie Policy', linkHref: '/legals/cookie-policy' },
              {
                linkText: 'Privacy Policy',
                linkHref: '/legals/privacy-policy'
              },
              {
                linkText: 'Terms and Conditions',
                linkHref: '/legals/terms-and-conditions'
              }
            ]}
          />
        </FooterLinkContainer>

        <FooterSocialNav>
          <Link href="https://www.linkedin.com/company/prosperity-digital-ag/">
            LinkedIn
          </Link>
          <Link href="https://twitter.com/ProsperityDigi">Twitter</Link>

          <Link href="https://www.instagram.com/prosperitydigital_ag/">
            Instagram
          </Link>

          <Link href="https://www.youtube.com/channel/UCB1SBk0fAHhjPpmltDX-Idg">
            YouTube
          </Link>
        </FooterSocialNav>

        {isContactSectionVisible && (
          <FooterImgWrapper>
            <TextContainer>
              <H4 spaceBottomMobile={spacing.space01}>
                We are easy to talk to
              </H4>
              <Button
                buttonType="buttonBlack"
                onClick={() => router.push('/contact')}
              >
                Get in touch
              </Button>
            </TextContainer>

            <FooterImgContainer>
              <Image
                src={footerimg.src}
                width={footerimg.width}
                height={footerimg.height}
                alt="decor"
              />
            </FooterImgContainer>
          </FooterImgWrapper>
        )}

        <FooterLogo>
          <ReactLink href="/">
            <a aria-label="Prosperity Digital">
              <SvgLogoLarge />
            </a>
          </ReactLink>
        </FooterLogo>
      </FooterGrid>
    </PDFooter>
  )
}
