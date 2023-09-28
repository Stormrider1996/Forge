import Image from 'next/image'
import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface Props {
  imageHeight: number
  imageSrc: string
  imageWidth: number
}

const ImageContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  position: relative;
  width: 100%;
`

export const BackgroundHeroGrid: FunctionComponent<Props> = ({
  imageSrc,
  imageWidth,
  imageHeight
}) => {
  return (
    <ImageContainer>
      <Image
        width={imageWidth}
        height={imageHeight}
        objectFit="contain"
        alt="image"
        src={imageSrc}
      />
    </ImageContainer>
  )
}
