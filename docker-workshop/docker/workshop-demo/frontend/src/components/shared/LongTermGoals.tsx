import { Paragraph, Reveal } from '@components'
import { breakpoints, colors, spacing } from '@variables'
import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface longTermGoal {
  text: string
}

interface Props {
  longTermGoals: longTermGoal[]
}

const PDLongTermGoals = styled.div`
  border-bottom: 1px solid ${colors.grayscale.x500};
  margin-block-end: ${spacing.space01};
  padding-block-end: ${spacing.baseSpacing};

  @media (min-width: ${breakpoints.laptop}) {
    margin-block-end: ${spacing.space02};
    padding-block-end: ${spacing.space02};
  }
`

export const LongTermGoals: FunctionComponent<Props> = ({ longTermGoals }) => {
  return (
    <>
      {longTermGoals.map((longTermGoal, i) => {
        return (
          <PDLongTermGoals key={i}>
            <Reveal>
              <Paragraph spaceBottomMobile="0">{longTermGoal.text}</Paragraph>
            </Reveal>
          </PDLongTermGoals>
        )
      })}
    </>
  )
}
