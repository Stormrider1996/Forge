import { H3, Paragraph } from '@components'
import { breakpoints, spacing, transitions, typography } from '@variables'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import React, {
  FunctionComponent,
  MutableRefObject,
  useLayoutEffect,
  useRef,
  useState
} from 'react'
import styled, { css } from 'styled-components'

interface Pillar {
  description: string
  subtitle: string
  title: string
  textColor?: string
}

type LinePosition = 'bottom' | 'top'

interface Props {
  backgroundColor?: string
  backgroundImage?: string
  lineColor?: string
  linePosition: LinePosition
  pillars: Pillar[]
  textColor?: string
  title?: string
}

const Intro = styled.div`
  font-family: ${typography.fontFamily.text};
  font-size: ${typography.fontSize.heading05};
  margin-block-end: ${spacing.baseSpacing};
`

const Line = styled.div<{ pillarsLength: number; linePosition: LinePosition }>`
  border-bottom: 2px solid var(--line-color);
  margin-block-end: ${(props) =>
    props.linePosition === 'top' ? spacing.space03 : 0};

  margin-block-start: ${(props) =>
    props.linePosition === 'top' ? 0 : spacing.space03};

  white-space: nowrap;
  width: 100%;

  @media (min-width: ${breakpoints.laptop}) {
    width: 100%;

    ${(props) =>
      props.linePosition === 'bottom' &&
      css`
        width: calc(33.3% * ${props.pillarsLength});
      `};

    margin-block-end: ${(props) =>
      props.linePosition === 'top' ? spacing.space04 : 0};

    margin-block-start: ${(props) =>
      props.linePosition === 'top' ? 0 : spacing.space04};
    border-bottom: 2px solid var(--line-color);
  }

  @media (min-width: ${breakpoints.desktop}) {
    margin-block-end: ${(props) =>
      props.linePosition === 'top' ? spacing.space05 : 0};

    margin-block-start: ${(props) =>
      props.linePosition === 'top' ? 0 : spacing.space05};
    border-bottom: 2px solid var(--line-color);
  }
`

const Pillar = styled.div<{ linePosition: LinePosition }>`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding: 0 ${spacing.grid.gap} 0 0;
  white-space: normal;
  width: 100%;

  @media (min-width: ${breakpoints.laptop}) {
    width: calc((100% - (${spacing.grid.gap} * 2)) / 3);
    padding: 0;
  }
`

// nosemgrep
const Pillars = styled.div<{ scrolled: boolean }>`
  display: flex;
  white-space: nowrap;

  @media (min-width: ${breakpoints.laptop}) {
    gap: ${spacing.grid.gap};

    ${Pillar}:nth-child(2) {
      opacity: 1;
    }

    ${Pillar}:nth-child(4) {
      opacity: ${(props) => (props.scrolled ? '1' : 0)};
      transition: ${transitions.s03};
    }
  }
`

const PillarsContainer = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
`

const PillarTitle = styled((props) => <H3 {...props} />)`
  min-height: 150px;

  @media (min-width: ${breakpoints.tablet}) {
    min-height: 280px;
  }
`

const Title = styled.h2`
  font-size: ${typography.fontSize.heading06};
  font-weight: 400;
  margin-block-end: ${spacing.space04};
`

const ScrollSection = styled.div<Props>`
  --background-color: ${(props) => props.backgroundColor || 'none'};
  --background-image: ${(props) => `url(${props.backgroundImage})` || 'none'};
  --line-color: ${(props) => props.lineColor || 'transparent'};
  --line-position: ${(props) => props.linePosition || 'unset'};
  --text-color: ${(props) => props.textColor};

  ${(props) =>
    props.backgroundImage &&
    css`
      background-image: var(--background-image);
      background-position: var(--background-position);
      background-size: cover;
    `}

  background-color: var(--background-color);
  color: var(--text-color);
  overflow: hidden;
  padding-block-end: ${spacing.space03};
  padding-block-start: ${spacing.space03};
  padding-inline: ${spacing.grid.wrapper};
  position: relative;

  @media (min-width: ${breakpoints.laptop}) {
    padding-block-end: ${spacing.space04};
    padding-block-start: ${spacing.space04};
  }

  @media (min-width: ${breakpoints.desktop}) {
    padding-block-end: ${spacing.space05};
    padding-block-start: ${spacing.space05};
  }
`

export const SectionScrollable: FunctionComponent<Props> = ({
  backgroundColor,
  backgroundImage,
  lineColor,
  linePosition,
  pillars,
  textColor,
  title
}) => {
  const [scrolled, setScrolled] = useState<boolean>(false)
  const ref = useRef() as MutableRefObject<HTMLDivElement>

  const mm = gsap.matchMedia()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const container = document.querySelector('.container')
      const pillars = gsap.utils.toArray('.panel')
      const pillarsContainer = document.querySelector('.pillarsContainer')

      mm.add(
        `(max-width: ${breakpoints.laptop})`,
        () => {
          gsap.to(pillars, {
            xPercent: -100 * (pillars.length - 1),
            ease: 'none',
            scrollTrigger: {
              pin: true,
              refreshPriority: 1,
              scrub: true,
              start: 'center center',
              trigger: container
            }
          })
        },
        ref
      )

      if (pillars.length > 3) {
        mm.add(
          `(min-width: ${breakpoints.laptop})`,
          () => {
            gsap.to(pillarsContainer, {
              xPercent: -100 / (pillars.length - 1),
              ease: 'none',
              scrollTrigger: {
                pin: true,
                refreshPriority: 1,
                scrub: true,
                start: 'center center',
                trigger: container,
                onToggle: (self) => setScrolled(!!self.progress)
              }
            })
          },
          ref
        ) // <-- Selector scope!!
      }
    })

    return () => ctx.revert()
  }, [])

  setTimeout(() => ScrollTrigger.refresh(), 200)

  return (
    <ScrollSection
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
      className="container"
      lineColor={lineColor}
      linePosition={linePosition}
      pillars={pillars}
      ref={ref}
      textColor={textColor}
      title={title}
    >
      {linePosition === 'top' && (
        <Line pillarsLength={pillars.length} linePosition={linePosition} />
      )}

      <Title>
        {title} {PillarsContainer.scrollWidth}
      </Title>

      <PillarsContainer className="pillarsContainer">
        <Pillars scrolled={scrolled}>
          {pillars.map((pillar, i) => {
            return (
              <Pillar linePosition={linePosition} key={i} className="panel">
                <Intro>{pillar.subtitle}</Intro>

                <PillarTitle>{pillar.title}</PillarTitle>

                <Paragraph spaceBottomMobile="0">
                  {pillar.description}
                </Paragraph>
              </Pillar>
            )
          })}
        </Pillars>

        {linePosition === 'bottom' && (
          <Line pillarsLength={pillars.length} linePosition={linePosition} />
        )}
      </PillarsContainer>
    </ScrollSection>
  )
}
