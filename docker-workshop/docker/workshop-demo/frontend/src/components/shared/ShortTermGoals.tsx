import { Flex, MediaNinja, Paragraph, Reveal } from '@components'
import {
  SvgIconCheckmarkFull,
  SvgIconCheckmarkFullSmall,
  SvgIconCheckmarkHalf,
  SvgIconCheckmarkHalfSmall
} from '@svg'
import { breakpoints, colors, spacing } from '@variables'
import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface shortTermGoal {
  text: string
  complete: boolean
}

interface Props {
  shortTermGoals: shortTermGoal[]
}

const PDShortTermGoals = styled.div`
  border-bottom: 1px solid ${colors.grayscale.x500};
  margin-block-end: ${spacing.space01};
  padding-block-end: ${spacing.baseSpacing};

  @media (min-width: ${breakpoints.laptop}) {
    margin-block-end: ${spacing.space02};
    padding-block-end: ${spacing.space02};
  }
`

export const ShortTermGoals: FunctionComponent<Props> = ({
  shortTermGoals
}) => {
  return (
    <>
      {shortTermGoals.map((goal, i) => {
        return (
          <PDShortTermGoals key={i}>
            <Flex
              flexWrap="no-wrap"
              alignItems="center"
              gapMobile={spacing.space01}
            >
              <Reveal>
                {goal.complete ? (
                  <>
                    <MediaNinja showOnLaptop showOnDesktop>
                      <SvgIconCheckmarkFull />
                    </MediaNinja>

                    <MediaNinja showOnMobile showOnTablet>
                      <SvgIconCheckmarkFullSmall />
                    </MediaNinja>
                  </>
                ) : (
                  <>
                    <MediaNinja showOnLaptop showOnDesktop>
                      <SvgIconCheckmarkHalf />
                    </MediaNinja>

                    <MediaNinja showOnMobile showOnTablet>
                      <SvgIconCheckmarkHalfSmall />
                    </MediaNinja>
                  </>
                )}
              </Reveal>

              <Reveal delay={0.2}>
                <Paragraph spaceBottomMobile="0">{goal.text}</Paragraph>
              </Reveal>
            </Flex>
          </PDShortTermGoals>
        )
      })}
    </>
  )
}
