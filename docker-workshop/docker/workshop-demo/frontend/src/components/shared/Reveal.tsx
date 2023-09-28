import { Children } from '@interface'
import { gsap } from 'gsap'
import { FunctionComponent, MutableRefObject, useEffect, useRef } from 'react'
import styled from 'styled-components'

interface Props {
  children: Children
  delay?: number
  hasImage?: boolean
}

const PDReveal = styled.div<Props>`
  --hasImg: ${(props) => (props.hasImage ? '0' : 'unset')};

  flex-shrink: var(--hasImg);
`

export const Reveal: FunctionComponent<Props> = ({
  children,
  delay,
  hasImage
}) => {
  const ref = useRef() as MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const elementAnimation = gsap.timeline({
      scrollTrigger: {
        refreshPriority: 0,
        start: 'bottom bottom',
        trigger: ref.current
      }
    })

    elementAnimation.fromTo(
      ref.current,
      {
        delay: delay,
        autoAlpha: 0,
        y: 30
      },
      {
        delay: delay,
        autoAlpha: 1,
        y: 0
      }
    )
  }, [delay])

  return (
    <PDReveal hasImage={hasImage} ref={ref}>
      {children}
    </PDReveal>
  )
}
