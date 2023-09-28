import { ButtonIcon, H3, Icon, Link, Paragraph, Reveal } from '@components'
import { breakpoints, colors, spacing, typography } from '@variables'
import { FunctionComponent } from 'react'
import styled from 'styled-components'

interface Props {
  heading: string
  titleLeft: string
  titleRight: string
}

const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.space01};
  grid-column: 1/-1;
  margin-bottom: ${spacing.space03};

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
  }
`
const BlogitemLeft = styled.div`
  width: 100%;
`

const BlogitemRight = styled.div`
  width: 100%;
`
const ItemInner = styled.div`
  border: none;
  border-bottom: 2px solid #1c282e;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${spacing.space01};
  width: 100%;
`

export const BlogItem: FunctionComponent<Props> = ({
  titleLeft,
  titleRight,
  heading
}) => {
  return (
    <BlogWrapper>
      <BlogitemLeft>
        <ItemInner>
          <Reveal>
            <Paragraph spaceBottomMobile={spacing.space01}>
              {titleLeft}
            </Paragraph>
          </Reveal>
        </ItemInner>
      </BlogitemLeft>

      <BlogitemRight>
        <ItemInner>
          <Reveal delay={0.2}>
            <Paragraph spaceBottomMobile={spacing.space01}>
              {titleRight}
            </Paragraph>
          </Reveal>

          <Reveal delay={0.4}>
            <ButtonIcon href="/news/news-post">
              <Icon iconName="icon-plus"></Icon>
            </ButtonIcon>
          </Reveal>
        </ItemInner>

        <Reveal>
          <H3 fontSize={typography.fontSize.heading05}>
            <Link textColorHover={colors.secondary.x500} href="/news/news-post">
              {heading}
            </Link>
          </H3>
        </Reveal>
      </BlogitemRight>
    </BlogWrapper>
  )
}
