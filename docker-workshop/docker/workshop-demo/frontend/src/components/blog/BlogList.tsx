import { BlogItem } from '@components'
import { FunctionComponent } from 'react'

export const BlogList: FunctionComponent = () => {
  return (
    <>
      <BlogItem
        titleLeft="September 13 ― Alexandre Juncker"
        titleRight="6 minutes read"
        heading="Crypto-mining in times of energy crisis"
      ></BlogItem>
    </>
  )
}
