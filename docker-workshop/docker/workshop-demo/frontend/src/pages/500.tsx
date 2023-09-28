import { Button, Flex, H1, Hr, Paragraph, Section } from '@components'
import { colors, spacing } from '@variables'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

import background from '/public/images/page-error-500.jpg'

const Error404: NextPage = () => {
  const router = useRouter()

  return (
    <>
      <Section
        backgroundImage={background.src}
        spaceBottomDesktop="0"
        spaceBottomLaptop="0"
        spaceBottomMobile="0"
        spaceBottomTablet="0"
      >
        <Flex flexDirection="column" elementHeight="100%">
          <H1 fontWeight={700} textColor={colors.text.light}>
            500
          </H1>

          <Paragraph textColor={colors.text.light}>
            Internal server error
          </Paragraph>

          <Paragraph textColor={colors.text.light}>
            The server encountered an error and could not complete your request.
          </Paragraph>

          <Button buttonType="buttonBlue" onClick={() => router.push('/')}>
            Back to Homepage
          </Button>
          <Hr
            spaceTop={spacing.space05}
            spaceBottom={spacing.space05}
            color={colors.background.light}
          />
        </Flex>
      </Section>
    </>
  )
}

export default Error404
