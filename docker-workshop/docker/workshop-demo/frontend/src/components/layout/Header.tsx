import { Flex, HamburgerMenu } from '@components'
import { SvgLogoHeader } from '@svg'
import { breakpoints, colors, spacing, transitions } from '@variables'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FunctionComponent, useCallback, useEffect, useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

interface Props {
  isHidden: boolean
  isDark: boolean
  isTransparent: boolean
}

const MobileStyles = createGlobalStyle`

  html,
  body {
    position: fixed;
    overflow: hidden;
  }
`

const Logo = styled.div`
  display: flex;
  flex-shrink: 0;
  position: relative;
  z-index: 99;
`

const MenuMobile = styled.div`
  background: ${colors.background.dark};
  bottom: 0;
  display: block;
  left: 0;
  overflow: auto;
  padding: 18px ${spacing.grid.wrapper};
  padding-inline: ${spacing.grid.wrapper};
  position: fixed;
  right: 0;
  text-align: left;
  top: 0;
  z-index: 10;

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-block-end: ${spacing.space01};
      text-align: right;

      &.active {
        a {
          border-bottom: 1px solid ${colors.secondary.x500};
        }
      }

      a {
        color: ${colors.text.light};
        font-weight: 400;
      }
    }
  }
`

const Menu = styled.ul`
  display: none;

  @media (min-width: ${breakpoints.menu}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${spacing.space01};
    list-style: none;
  }
`

const MenuItem = styled.li<{ isActive: boolean; isDark: boolean }>`
  --active-color: ${(props) =>
    props.isDark ? colors.secondary.x500 : colors.primary.x500};
  --cursor: ${(props) => (props.isActive ? 'default' : 'auto')};
  --pointer-events: ${(props) => (props.isActive ? 'none' : 'auto')};
  --transform: ${(props) => (props.isActive ? 'scaleX(1)' : 'scaleX(0)')};

  cursor: var(--cursor);
  pointer-events: var(--pointer-events);
  position: relative;

  &:after {
    background: var(--active-color);
    bottom: 0;
    content: '';
    display: block;
    height: 2px;
    left: 0;
    position: absolute;
    transform: var(--transform);
    width: 100%;
  }

  @media (min-width: ${breakpoints.tablet}) {
    padding-block: ${spacing.space01};
  }
`

const PDHeader = styled.header<Props>`
  --background-color: ${(props) => {
    if (props.isTransparent) return 'transparent'
    if (props.isDark) return colors.background.dark
    return colors.shades.light.x50
  }};

  --border-color: ${(props) => {
    if (props.isTransparent) return colors.background.light
    if (props.isDark) return colors.background.light
    return 'transparent'
  }};

  --menu-color: ${(props) => {
    if (props.isTransparent) return colors.text.dark
    if (props.isDark) return colors.text.light
  }};

  --position: ${(props) => (props.isTransparent ? 'fixed' : 'sticky')};

  --text-color: ${(props) => {
    if (props.isTransparent) return colors.text.light
    if (props.isDark) return colors.text.light
    return colors.text.dark
  }};

  --tranform: ${(props) =>
    props.isHidden ? 'translateY(-110%)' : 'translateY(0)'};

  background: var(--background-color);
  border-bottom: 1px solid var(--border-color);

  left: 0;
  padding: 18px ${spacing.grid.wrapper};

  position: var(--position);
  right: 0;
  top: 0;
  transform: var(--tranform);
  transition: transform ${transitions.s06};
  z-index: 9;

  a {
    color: var(--text-color);

    &:hover {
      color: var(--menu-color);
    }
  }

  @media (min-width: ${breakpoints.menu}) {
    padding: 0 ${spacing.grid.wrapper};
  }
`

export const Header: FunctionComponent = () => {
  const [y, setY] = useState(0)
  const [isHidden, setIsHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const router = useRouter()

  const isDark = [
    '/contact',
    '/contact/general-contact',
    '/roadmap',
    '/team',
    '/news',
    '/news/news-post'
  ].includes(router.pathname)

  const isTransparent = ['/400', '/404', '/500'].includes(router.pathname)

  const headerLinks = [
    { title: 'Overview', href: '/' },
    { title: 'Self-mining', href: '/self-mining' },
    { title: 'Managed solutions', href: '/managed-solutions' },
    { title: 'Roadmap', href: '/roadmap' },
    { title: 'Team', href: '/team' },
    { title: 'Company', href: '/company' },
    { title: 'News', href: '/news' },
    { title: 'Get in Touch', href: '/contact' }
  ]

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleNavigation = useCallback(() => {
    if (y > window.scrollY) {
      setIsHidden(false)
    } else if (y < window.scrollY && window.scrollY > 300) {
      setIsHidden(true)
    }
    setY(window.scrollY)
  }, [y])

  useEffect(() => {
    window.addEventListener('scroll', handleNavigation)

    return () => {
      window.removeEventListener('scroll', handleNavigation)
    }
  }, [handleNavigation, isHidden])

  return (
    <>
      <PDHeader
        isDark={isDark}
        isTransparent={isTransparent}
        isHidden={isHidden}
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Logo>
            <Link href="/">
              <a aria-label="Prosperity Digital">
                <SvgLogoHeader
                  fill={
                    isTransparent || isDark
                      ? colors.shades.light.x50
                      : colors.grayscale.x500
                  }
                />
              </a>
            </Link>
          </Logo>

          <Menu>
            {headerLinks.map((link, i) => (
              <MenuItem
                key={i}
                isDark={isDark}
                isActive={router.pathname === link.href}
              >
                {/* nosemgrep*/}
                <Link href={link.href}>
                  <a>{link.title}</a>
                </Link>
              </MenuItem>
            ))}
          </Menu>

          <HamburgerMenu
            isDark={isDark}
            active={menuOpen}
            onClick={onToggleMenu}
          />
        </Flex>
      </PDHeader>

      {menuOpen && (
        <MenuMobile>
          <Flex
            alignItems="center"
            justifyContent="space-between"
            spaceBottom={spacing.space01}
          >
            <Logo onClick={onToggleMenu}>
              <Link href="/">
                <a>
                  <SvgLogoHeader
                    fill={
                      menuOpen ? colors.shades.light.x50 : colors.grayscale.x500
                    }
                  />
                </a>
              </Link>
            </Logo>

            <HamburgerMenu
              isDark={isDark}
              active={menuOpen}
              onClick={onToggleMenu}
            />
          </Flex>

          <ul>
            {headerLinks.map((link, i) => (
              <li
                className={router.pathname === link.href ? 'active' : ''}
                key={i}
                onClick={onToggleMenu}
              >
                {/* nosemgrep*/}
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </MenuMobile>
      )}

      {menuOpen && <MobileStyles />}
    </>
  )
}
