import { H1, H2, H3, H4, H5, H6, Paragraph, Section } from '@components'
import { colors } from '@variables'
import { NextPage } from 'next'

const selfMining: NextPage = () => {
  return (
    <Section backgroundColor={colors.background.dark}>
      <H1 textColor={colors.text.light}>Heading 1</H1>
      <H2 textColor={colors.text.light}>Heading 2</H2>
      <H3 textColor={colors.text.light}>Heading 3</H3>
      <H4 textColor={colors.text.light}>Heading 4</H4>
      <H5 textColor={colors.text.light}>Heading 5</H5>
      <H6 textColor={colors.text.light}>Heading 6</H6>
      <Paragraph>Hero 1</Paragraph>
    </Section>
  )
}

export default selfMining
