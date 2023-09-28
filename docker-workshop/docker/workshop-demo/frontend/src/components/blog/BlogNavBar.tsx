import { H6, Paragraph, Reveal } from '@components'
import { breakpoints, colors, spacing } from '@variables'
import { FunctionComponent } from 'react'
import styled from 'styled-components'

interface Props {
  author: string
  category: string
  date: string
}

const NavCard = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1/-1;
  margin-block-end: ${spacing.space01};

  @media (min-width: ${breakpoints.desktop}) {
    grid-column: span 3;
  }
`

const PDBlogNavBar = styled.div`
  color: ${colors.text.light};
  column-gap: ${spacing.grid.gap};
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  margin-block-end: ${spacing.space03};
  width: 100%;
`

export const BlogNavBar: FunctionComponent<Props> = ({
  author,
  category,
  date
}) => {
  return (
    <PDBlogNavBar>
      <NavCard>
        <Reveal delay={0.2}>
          <Paragraph spaceBottomMobile="0.813rem">Author</Paragraph>
          <H6 spaceBottomMobile="0">{author}</H6>
        </Reveal>
      </NavCard>

      <NavCard>
        <Reveal delay={0.4}>
          <Paragraph spaceBottomMobile="0.813rem">Category</Paragraph>
          <H6 spaceBottomMobile="0">{category}</H6>
        </Reveal>
      </NavCard>

      <NavCard>
        <Reveal delay={0.8}>
          <Paragraph spaceBottomMobile="0.813rem">Date</Paragraph>
          <H6 spaceBottomMobile="0">{date}</H6>
        </Reveal>
      </NavCard>
    </PDBlogNavBar>
  )
}
