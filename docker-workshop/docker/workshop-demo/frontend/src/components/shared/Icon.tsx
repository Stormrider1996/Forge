import { breakpoints } from '@variables'
import Image from 'next/image'
import { FunctionComponent } from 'react'
import styled from 'styled-components'

import iconArrowRight from '/public/icons/icon-arrow-right.svg'
import iconCircleCheckmark from '/public/icons/icon-circle-checkmark.svg'
import iconEnergy from '/public/icons/icon-energy.svg'
import iconSource from '/public/icons/icon-source.svg'
import iconWater from '/public/icons/icon-water.svg'
import iconWindmill from '/public/icons/icon-windmill.svg'
import plusIcon from '/public/vectors/blogplusicon.svg'
import plusCircleIconDesktop from '/public/vectors/plusDesktop.svg'
import plusCircleIconMobile from '/public/vectors/plusMobile.svg'

interface Props {
  hideOnDesktop?: boolean
  hideOnMobile?: boolean
  iconName:
    | 'icon-arrow-right' //
    | 'icon-circle-checkmark'
    | 'icon-circle-plus-desktop'
    | 'icon-circle-plus-mobile'
    | 'icon-energy'
    | 'icon-plus'
    | 'icon-source'
    | 'icon-water'
    | 'icon-windmill'
}

const PDIcon = styled.div<Props>`
  --display-desktop: ${(props) =>
    props.hideOnDesktop ? 'none' : 'inline-block'};

  --display-mobile: ${(props) =>
    props.hideOnMobile ? 'none' : 'inline-block'};

  display: var(--display-mobile);
  flex-shrink: 0;

  @media (min-width: ${breakpoints.desktop}) {
    display: var(--display-desktop);
  }
`

export const Icon: FunctionComponent<Props> = ({
  hideOnDesktop,
  hideOnMobile,
  iconName
}) => {
  const getIconData = () => {
    if (iconName === 'icon-arrow-right') return iconArrowRight
    if (iconName === 'icon-circle-checkmark') return iconCircleCheckmark
    if (iconName === 'icon-circle-plus-desktop') return plusCircleIconDesktop
    if (iconName === 'icon-circle-plus-mobile') return plusCircleIconMobile
    if (iconName === 'icon-energy') return iconEnergy
    if (iconName === 'icon-plus') return plusIcon
    if (iconName === 'icon-source') return iconSource
    if (iconName === 'icon-water') return iconWater
    if (iconName === 'icon-windmill') return iconWindmill
  }

  const icon = getIconData()

  return (
    <PDIcon
      hideOnDesktop={hideOnDesktop}
      hideOnMobile={hideOnMobile}
      iconName={iconName}
    >
      <Image
        alt="icon"
        src={icon.src}
        width={icon.width}
        height={icon.height}
      />
    </PDIcon>
  )
}
