import { Children } from '@interface'
import { spacing, typography } from '@variables'
import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface Props {
  children: Children
}

const PDWysiwyg = styled.div`
  img {
    width: 100%;
    display: block;
    margin-block-end: ${spacing.baseSpacing};
  }

  p {
    font-family: ${typography.fontFamily.text};
    line-height: ${typography.lineHeight.text};
    margin-block-end: ${spacing.baseSpacing};
    font-size: ${typography.fontSize.text};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${typography.fontFamily.heading};
  }

  h1 {
    font-size: ${typography.fontSize.heading01};
  }

  h2 {
    font-size: ${typography.fontSize.heading02};
  }
  h3 {
    font-size: ${typography.fontSize.heading03};
  }
  h4 {
    font-size: ${typography.fontSize.heading04};
  }
  h5 {
    font-size: ${typography.fontSize.heading05};
  }
  h6 {
    font-size: ${typography.fontSize.heading06};
  }
`

export const Wysiwyg: FunctionComponent<Props> = ({ children }) => {
  return <PDWysiwyg>{children}</PDWysiwyg>
}
