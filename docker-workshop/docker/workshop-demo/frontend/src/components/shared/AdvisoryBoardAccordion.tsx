import { Flex, H3, Link, Paragraph } from '@components'
import { SvgPlusDesktop } from '@svg'
import { spacing, typography } from '@variables'
import React, { FunctionComponent, useState } from 'react'
import styled from 'styled-components'

interface Props {
  name: string
  expertise: string
  link: string
  biography: string
}
const Icon = styled.div`
  display: inline-block;
`
const PDAccordion = styled.div`
  border-bottom: 2px solid #1c282e;
  display: block;
  margin-bottom: ${spacing.space01};
  transition: all 0.5s ease-in-out;

  &:last-child {
    margin-bottom: 0;
  }
`
const Text = styled.div`
  padding-block-end: ${spacing.baseSpacing};
  transition: all 0.5s ease-in-out;
`
const ContentContainer = styled.div`
  margin-block-end: ${spacing.baseSpacing};
`
const IconContainer = styled.div<{ isAccordionOpen: boolean }>`
  display: flex;
  transform: ${(props) =>
    props.isAccordionOpen ? 'rotate(45deg)' : 'rotate(0)'};
  transition: 0.1s ease-in-out;
  img,
  svg {
    display: block;
  }
`

export const AdvisoryBoardAccordion: FunctionComponent<Props> = ({
  name,
  expertise,
  link,
  biography
}) => {
  const [isAccordionOpen, setisOpen] = useState(false)

  const toggleAccordion = () => {
    setisOpen(!isAccordionOpen)
  }

  return (
    <>
      <PDAccordion>
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <ContentContainer>
            <H3 fontSize={typography.fontSize.heading05}>{name}</H3>
            <Paragraph>{expertise}</Paragraph>
            <Link href={link}>LinkedIn</Link> {/* nosemgrep*/}
          </ContentContainer>

          <IconContainer isAccordionOpen={isAccordionOpen}>
            <Icon onClick={toggleAccordion}>
              <SvgPlusDesktop />
            </Icon>
          </IconContainer>
        </Flex>
        {isAccordionOpen && <Text>{biography}</Text>}
      </PDAccordion>
    </>
  )
}
