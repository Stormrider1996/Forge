import { colors, spacing } from '@variables'
import Image, { ImageProps } from 'next/image'
import { FunctionComponent } from 'react'
import styled from 'styled-components'

interface Props {
  image: ImageProps
  textLink?: string
  href?: string
}
// nosemgrep
const PDBlogImg = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-block-end: ${spacing.space02};
  margin-inline: auto;
  text-align: center;
  img {
    height: auto !important;
    width: auto;
  }
`

const BlogLink = styled.a`
  // nosemgrep
  color: ${colors.grayscale.x500};
  cursor: pointer;
  margin-block-start: ${spacing.space02};
  text-decoration: none;
`

export const BlogImg: FunctionComponent<Props> = ({
  image,
  textLink,
  href
}) => {
  return (
    <PDBlogImg>
      <Image
        alt="Blog image"
        src={image.src}
        width={image.width}
        height={image.height}
      />
      {/* nosemgrep*/}
      <BlogLink href={href}>{textLink}</BlogLink>
    </PDBlogImg>
  )
}
