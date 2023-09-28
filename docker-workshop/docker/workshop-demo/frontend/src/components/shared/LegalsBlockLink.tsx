import { ButtonIcon, H6, Hr, Reveal } from '@components'
import { SvgArrowWhite } from '@svg'
import { colors, spacing } from '@variables'
import { FunctionComponent } from 'react'
import styled from 'styled-components'

interface Props {
  title: string
  href: string
}

export const LegalsBlockContainer = styled.div`
  border-bottom: 2px solid #f7f9fa;
  margin-bottom: ${spacing.space01};

  &:last-child {
    margin-bottom: 0;
  }
`
const LegalsBlockdBody = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-block-end: 0.625rem;
  width: 100%;
`

const BusinessText = styled.div`
  display: flex;
  flex-direction: column;
`

export const LegalsBlockLink: FunctionComponent<Props> = ({ title, href }) => {
  return (
    <LegalsBlockContainer>
      <LegalsBlockdBody>
        <Reveal>
          <BusinessText>
            <H6 spaceBottomMobile="0">{title}</H6>
          </BusinessText>
        </Reveal>

        <Reveal delay={0.2}>
          {/* nosemgrep*/}
          <ButtonIcon href={href}>
            <SvgArrowWhite />
          </ButtonIcon>
        </Reveal>
      </LegalsBlockdBody>

      <Reveal>
        <Hr color={colors.grayscale.x500} spaceBottom="0" heavy />
      </Reveal>
    </LegalsBlockContainer>
  )
}
