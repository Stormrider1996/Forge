import { breakpoints, colors } from '@variables'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import React, {
  FunctionComponent,
  MutableRefObject,
  useEffect,
  useRef
} from 'react'
import styled from 'styled-components'

interface Props {
  coverColor: string
  imageHeight: number
  imageSrc: string
  imageWidth: number
}

interface CoverProps {
  coverColor: string
}

const ImageContainer = styled.div`
  position: relative;
`

const PDRevealImage = styled.div<Props>`
  position: relative;
  transform-origin: left;
  width: 100%;

  @media (min-width: ${breakpoints.laptop}) {
    height: 100%;
  }
`

const Cover = styled.div<CoverProps>`
  --cover-color: ${(props) => props.coverColor || colors.background.dark};

  background: var(--cover-color);
  height: 100%;
  left: 0;
  object-fit: contain;
  position: absolute;
  top: 0;
  transform: scaleX(1);
  transform-origin: right;
  width: 100%;
`

export const RevealImage: FunctionComponent<Props> = ({
  imageSrc,
  imageWidth,
  imageHeight,
  coverColor
}) => {
  const CoverRef = useRef<HTMLElement>() as MutableRefObject<HTMLDivElement>
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const elementAnimation = gsap.timeline({
      scrollTrigger: {
        refreshPriority: 0,
        start: '10% bottom',
        trigger: CoverRef.current
      }
    })

    elementAnimation.fromTo(
      CoverRef.current,
      {
        scaleX: 1
      },
      {
        ease: 'expo.inOut',
        duration: 1.5,
        scaleX: 0
      }
    )
  })

  useEffect(() => {
    window.addEventListener('resize', () => {
      setTimeout(() => ScrollTrigger.refresh(), 200)
    })
  })

  return (
    <PDRevealImage
      imageSrc={imageSrc}
      imageWidth={imageWidth}
      imageHeight={imageHeight}
      coverColor={coverColor}
    >
      <ImageContainer>
        <Image
          alt="image"
          height={imageHeight}
          objectFit="contain"
          src={imageSrc}
          width={imageWidth}
          priority
        />

        <Cover coverColor={coverColor} ref={CoverRef} />
      </ImageContainer>
    </PDRevealImage>
  )
}
