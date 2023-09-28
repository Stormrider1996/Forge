import {
  SvgDataCenter,
  SvgDataCenterLoading,
  SvgNuclearPowerPlant,
  SvgSolarPower,
  SvgWindPower
} from '@svg'
import { FunctionComponent } from 'react'
import styled from 'styled-components'

interface Props {
  animationDelay?: string
  iconName:
    | 'icon-solar-power' //
    | 'icon-data-center'
    | 'icon-data-center-loading'
    | 'icon-nuclear-power'
    | 'icon-hydro-power'
    | 'icon-wind-power'
}

interface PictogramProps {
  animationDelay?: string
}

/* Nuclear power */
const NuclearPower = styled.div<PictogramProps>`
  --animation-delay: ${(props) => props.animationDelay || 0};

  animation: scale 2s infinite ease-in-out;
  animation-delay: var(--animation-delay);
  transform: scale(0.5);
  transform-origin: center;

  @keyframes scale {
    0%,
    100% {
      transform: scale(0.5);
    }
    50% {
      transform: scale(1);
    }
  }
`

/* Hydro power*/
const HydroPower = styled.div<PictogramProps>`
  --animation-delay: ${(props) => props.animationDelay || 0};

  .waves {
    height: 100%;
    overflow: hidden;
    position: absolute;
    width: 100%;
  }

  .wave {
    animation: waves-left 4s linear infinite;
    background-image: url('/icons/icon-hydro-power.svg');
    background-repeat: repeat-x;
    background-size: contain;
    height: 100%;
    left: -100%;
    position: absolute;
    right: 0;
    width: 200%;

    @keyframes waves-left {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(50%);
      }
    }
  }
`

/* Solar power */
const SolarPower = styled.div<PictogramProps>`
  --animation-delay: ${(props) => props.animationDelay || 0};

  .sun-rays {
    animation: sun-rays 10s linear infinite;
    animation-delay: var(--animation-delay);
    transform-origin: center;
  }

  @keyframes sun-rays {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

/* Data center loading */
const DataCenterLoading = styled.div<PictogramProps>`
  --animation-delay: ${(props) => props.animationDelay || 0};

  .bar-1 {
    animation: loading 3.5s 0s infinite;
  }
  .bar-2 {
    animation: loading 3.5s 0.2s infinite;
  }
  .bar-3 {
    animation: loading 3.5s 0.4s infinite;
  }
  .bar-4 {
    animation: loading 3.5s 0.6s infinite;
  }

  @keyframes loading {
    0% {
      opacity: 0;
      transform: scale(1);
    }
    45%,
    65% {
      opacity: 1;
      transform: scale(1);
    }
    75%,
    100% {
      opacity: 0;
      transform: scale(1);
    }
  }
`

/* Wind power */
const WindPower = styled.div<PictogramProps>`
  --animation-delay: ${(props) => props.animationDelay || 0};

  .elise {
    animation: rotation 3s linear infinite;
    animation-delay: var(--animation-delay);
    transform-origin: 50% 36.25%;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

export const Pictogram: FunctionComponent<Props> = ({
  iconName,
  animationDelay
}) => {
  switch (iconName) {
    case 'icon-solar-power':
      return (
        <SolarPower animationDelay={animationDelay}>
          <SvgSolarPower />
        </SolarPower>
      )

    case 'icon-data-center':
      return <SvgDataCenter />

    case 'icon-data-center-loading':
      return (
        <DataCenterLoading animationDelay={animationDelay}>
          <SvgDataCenterLoading />
        </DataCenterLoading>
      )

    case 'icon-nuclear-power':
      return (
        <NuclearPower animationDelay={animationDelay}>
          <SvgNuclearPowerPlant />
        </NuclearPower>
      )

    case 'icon-hydro-power':
      return (
        <HydroPower animationDelay={animationDelay}>
          <div className="waves">
            <div className="wave"></div>
          </div>
        </HydroPower>
      )

    case 'icon-wind-power':
      return (
        <WindPower animationDelay={animationDelay}>
          <SvgWindPower />
        </WindPower>
      )
  }

  return null
}
