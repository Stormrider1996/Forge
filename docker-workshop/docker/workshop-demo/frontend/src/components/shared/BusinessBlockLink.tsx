import { ButtonIcon, H4, Hr, MediaNinja, Paragraph, Reveal } from '@components'
import { Children } from '@interface'
import { breakpoints, colors, spacing } from '@variables'
import { FunctionComponent } from 'react'
import styled from 'styled-components'

interface Props {
  title: string
  description: string
  href?: string
  iconDesktop?: Children
  iconMobile?: Children
}

const BusinessCardContainer = styled.div`
  border: none;
  margin-bottom: ${spacing.space01};

  &:last-child {
    margin-bottom: 0;
  }
`
const BusinessCardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.space01};

  margin-bottom: 1.5rem;
  width: 100%;

  @media (min-width: ${breakpoints.laptop}) {
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-end;
    gap: ${spacing.space05};
  }
`

const BusinessText = styled.div`
  display: flex;
  flex-direction: column;
`

export const BusinessBlockLink: FunctionComponent<Props> = ({
  description,
  href,
  iconDesktop,
  iconMobile,
  title
}) => {
  return (
    <BusinessCardContainer>
      <BusinessCardBody>
        <Reveal>
          <BusinessText>
            <H4>{title}</H4>
            <Paragraph spaceBottomMobile="0">{description}</Paragraph>
          </BusinessText>
        </Reveal>

        {href && (
          <Reveal delay={0.3} hasImage>
            {/* nosemgrep*/}
            <ButtonIcon href={href}>
              <MediaNinja showOnLaptop showOnDesktop>
                {iconDesktop}
              </MediaNinja>
              <MediaNinja showOnMobile showOnTablet>
                {iconMobile}
              </MediaNinja>
            </ButtonIcon>
          </Reveal>
        )}
      </BusinessCardBody>

      <Reveal>
        <Hr color={colors.grayscale.x500} spaceBottom="0" heavy />
      </Reveal>
    </BusinessCardContainer>
  )
}
