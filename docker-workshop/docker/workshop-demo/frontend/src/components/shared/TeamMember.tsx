import {
  H5,
  H6,
  Hr,
  Link,
  MediaNinja,
  Paragraph,
  Parallax,
  Reveal,
  RevealImage
} from '@components'
import { breakpoints, colors, spacing } from '@variables'
import { FunctionComponent } from 'react'
import styled from 'styled-components'

interface Props {
  name: string
  position: string
  textPartOne: string
  textPartTwo: string
  imageSrc: string
  imageWidth: number
  imageHeight: number
  gridColumnReverse?: boolean
  link: string
}

interface GridColumReverse {
  gridColumnReverse?: boolean
}

const TeamMemberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.space03};
  margin-block-end: ${spacing.space03};

  @media (min-width: ${breakpoints.laptop}) {
    column-gap: ${spacing.grid.gap};
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    margin-block-end: ${spacing.space04};

    &:last-child {
      margin-block-end: 0;
    }
  }
`
const TeamMemberContent = styled.div<GridColumReverse>`
  @media (min-width: ${breakpoints.laptop}) {
    --grid-column: ${(props) => {
      if (props.gridColumnReverse) return '6/11'
      return 'span 4'
    }};
    display: flex;
    flex-direction: column;
    grid-column: var(--grid-column);
  }
`

const TeamMemberImg = styled.div<GridColumReverse>`
  --grid-column: ${(props) => {
    if (props.gridColumnReverse) return 'span 4'
    return '6/11'
  }};
  grid-column: var(--grid-column);
  grid-row: 1;
  height: 100%;
  width: 100%;
`

export const TeamMember: FunctionComponent<Props> = ({
  name,
  position,
  textPartOne,
  textPartTwo,
  imageSrc,
  imageWidth,
  imageHeight,
  gridColumnReverse,
  link
}) => {
  return (
    <TeamMemberWrapper>
      <TeamMemberContent gridColumnReverse={gridColumnReverse}>
        <Reveal>
          <H5 spaceBottomMobile={spacing.space01}>{name}</H5>
        </Reveal>

        <Reveal>
          <H6
            spaceBottomLaptop={spacing.space04}
            spaceBottomMobile={spacing.space02}
          >
            {position}
          </H6>
        </Reveal>

        <Reveal>
          <Paragraph spaceBottomMobile={spacing.space01}>
            {textPartOne}
          </Paragraph>
        </Reveal>

        <Reveal>
          <Paragraph spaceBottomMobile={spacing.space01}>
            {textPartTwo}
          </Paragraph>
        </Reveal>

        <Reveal>
          <Hr color={colors.primary.x500} heavy></Hr>
        </Reveal>
        <Reveal>
          {/* nosemgrep*/}
          <Link href={link}>LinkedIn</Link>
        </Reveal>
      </TeamMemberContent>

      <TeamMemberImg gridColumnReverse={gridColumnReverse}>
        <MediaNinja showOnLaptop showOnDesktop>
          <RevealImage
            coverColor={colors.background.body}
            imageWidth={imageWidth}
            imageHeight={imageHeight}
            imageSrc={imageSrc}
          />
        </MediaNinja>

        <MediaNinja showOnMobile showOnTablet>
          <Parallax
            imageHeight={imageHeight}
            imageSrc={imageSrc}
            imageWidth={imageWidth}
            travelDistance={200}
          />
        </MediaNinja>
      </TeamMemberImg>
    </TeamMemberWrapper>
  )
}
