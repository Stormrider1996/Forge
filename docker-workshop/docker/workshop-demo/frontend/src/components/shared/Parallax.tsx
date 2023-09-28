import { breakpoints } from '@variables'
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
  containerHeightDesktop?: string
  containerHeightMobile?: string
  imageHeight: number
  imageSrc: string
  imageWidth: number
  travelDistance: number
}

const ImageContainer = styled.div`
  display: block;
  margin-left: -5%;
  width: 110%;

  img {
    display: block;
  }

  @media (min-width: ${breakpoints.laptop}) {
    position: relative;
    width: unset;
    max-width: 100%;
    margin: 0;
  }
`
// nosemgrep
const PDParallax = styled.div<Props>`
  max-width: 100%;
  position: relative;
  z-index: 2;

  img {
    width: 100%;
    display: block;
  }

  * {
    display: block;
    line-height: 1;
  }

  ${ImageContainer} {
    height: ${(props) => props.containerHeightMobile || 'auto'};
  }

  @media (min-width: ${breakpoints.laptop}) {
    ${ImageContainer} {
      height: ${(props) => props.containerHeightDesktop || 'auto'};

      img {
        width: auto;
      }
    }
  }
`

export const Parallax: FunctionComponent<Props> = ({
  imageSrc,
  imageWidth,
  imageHeight,
  travelDistance,
  containerHeightMobile,
  containerHeightDesktop
}) => {
  const imageRef = useRef<HTMLElement>() as MutableRefObject<HTMLDivElement>
  gsap.registerPlugin(ScrollTrigger)

  const mm = gsap.matchMedia()

  useEffect(() => {
    mm.add(`(max-width: ${breakpoints.laptop})`, () => {
      gsap.fromTo(
        imageRef.current,
        {
          scrollTrigger: {
            scrub: true,
            trigger: imageRef.current
          },
          x: -150
        },
        {
          scrollTrigger: {
            scrub: true,
            end: 'center center',
            trigger: imageRef.current
          },
          x: 0
        }
      )
    })

    mm.add(`(min-width: ${breakpoints.laptop})`, () => {
      gsap.to(imageRef.current, {
        scrollTrigger: {
          scrub: true,
          trigger: imageRef.current
        },
        y: travelDistance
      })
    })
  }, [mm, travelDistance])

  useEffect(() => {
    window.addEventListener('resize', () => {
      setTimeout(() => ScrollTrigger.refresh(), 200)
    })
  })

  //window.addEventListener('resize', ScrollTrigger.refresh())

  return (
    <PDParallax
      ref={imageRef}
      imageSrc={imageSrc}
      imageWidth={imageWidth}
      imageHeight={imageHeight}
      travelDistance={travelDistance}
      containerHeightDesktop={containerHeightDesktop}
      containerHeightMobile={containerHeightMobile}
    >
      <ImageContainer>
        <Image
          width={imageWidth}
          height={imageHeight}
          objectFit="contain"
          alt="image"
          src={imageSrc}
          priority
        />
      </ImageContainer>
    </PDParallax>
  )
}
