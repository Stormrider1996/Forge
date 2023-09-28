import { breakpoints, colors } from '@variables'
import { FunctionComponent } from 'react'
import styled from 'styled-components'

interface Props {
  active: boolean
  onClick: () => void
  isDark: boolean
}

const PDHamburgerMenu = styled.div<Props>`
  background: none;
  border: none;
  cursor: pointer;
  display: grid;
  gap: 5px;
  position: relative;
  z-index: 99;

  span {
    background: ${(props) =>
      props.active || props.isDark
        ? colors.background.light
        : colors.background.dark};
    border-radius: 2px;
    display: block;
    height: 2px;
    width: 20px;
  }

  @media (min-width: ${breakpoints.menu}) {
    display: none;
  }
`

export const HamburgerMenu: FunctionComponent<Props> = ({
  active,
  onClick,
  isDark
}) => {
  return (
    <PDHamburgerMenu isDark={isDark} active={active} onClick={onClick}>
      <span />
      <span />
      <span />
    </PDHamburgerMenu>
  )
}
