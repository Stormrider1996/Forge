import { breakpoints, spacing } from '@variables'
import { FunctionComponent } from 'react'
import styled, { css } from 'styled-components'

import { H4 } from '../typography'
import { Button } from './Button'
import { Column } from './Column'
import { Grid } from './Grid'
import { Reveal } from './Reveal'

interface Props {
  backgroundImage?: string
  backgroundColor?: string
  text?: string
  buttonText?: string
  action: () => void
}

interface WrapperProps {
  backgroundImage?: string
  backgroundColor?: string
}

const PDSectionCta = styled.div<WrapperProps>`
  --background-color: ${(props) => props.backgroundColor || 'none'};
  --background-image: ${(props) => `url(${props.backgroundImage})` || 'none'};

  ${(props) =>
    props.backgroundImage &&
    css`
      background-image: var(--background-image);
      background-position: var(--background-position);
      background-size: cover;
    `}

  padding-block: ${spacing.space03};
  padding-inline: ${spacing.grid.wrapper};

  @media (min-width: ${breakpoints.laptop}) {
    padding-block: ${spacing.space04};
  }
`

export const SectionCta: FunctionComponent<Props> = ({
  action,
  backgroundImage,
  backgroundColor,
  buttonText,
  text
}) => {
  return (
    <PDSectionCta
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
    >
      <Grid>
        <Column gridColumnLaptop="span 6">
          <Reveal>
            <H4
              spaceBottomLaptop={spacing.space03}
              spaceBottomMobile={spacing.space02}
            >
              {text}
            </H4>
          </Reveal>

          <Reveal>
            <Button buttonType="buttonBlack" onClick={action}>
              {buttonText}
            </Button>
          </Reveal>
        </Column>
      </Grid>
    </PDSectionCta>
  )
}
