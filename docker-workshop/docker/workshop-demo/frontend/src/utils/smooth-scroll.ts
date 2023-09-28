import Lenis from '@studio-freight/lenis'

export const smoothScroll = () => {
  const scroll = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: false,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false
  })

  const raf = (time: number) => {
    scroll.raf(time)

    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
}
