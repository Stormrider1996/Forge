import { colors } from '@variables'
import styled from 'styled-components'

import { Pictogram } from './Pictogram'

const PDPictogramGridMobile = styled.div`
  display: grid;
  grid-column: 1/-1;
  grid-row: 1;
  grid-template-columns: repeat(5, 1fr);
  margin: 0;
  pointer-events: none;
  position: relative;
`

const Box = styled.div`
  border-bottom: 0.0625rem solid ${colors.shades.light.x200};
  border-left: 0.0625rem solid ${colors.shades.light.x200};
  flex-shrink: 0;
  position: relative;

  &:before {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  * {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`

export const PictogramGridMobile = () => {
  return (
    <PDPictogramGridMobile>
      {/*
       * Row 1
       */}
      <Box className="illustration-box illustration-box-1">
        <Pictogram animationDelay="-0.3s" iconName="icon-nuclear-power" />
      </Box>
      <Box className="illustration-box illustration-box-2"></Box>
      <Box className="illustration-box illustration-box-3"></Box>
      <Box className="illustration-box illustration-box-4"></Box>
      <Box className="illustration-box illustration-box-5"></Box>
      {/*
       * Row 2
       */}
      <Box className="illustration-box illustration-box-6"></Box>
      <Box className="illustration-box illustration-box-7"></Box>
      <Box className="illustration-box illustration-box-8"></Box>
      <Box className="illustration-box illustration-box-9"></Box>
      <Box className="illustration-box illustration-box-10">
        <Pictogram iconName="icon-solar-power" />
      </Box>
      {/*
       * Row 3
       */}
      <Box className="illustration-box illustration-box-11"></Box>
      <Box className="illustration-box illustration-box-12">
        <Pictogram iconName="icon-data-center" />
      </Box>
      <Box className="illustration-box illustration-box-13">
        <Pictogram iconName="icon-data-center" />
      </Box>
      <Box className="illustration-box illustration-box-14"></Box>
      <Box className="illustration-box illustration-box-15"></Box>
      {/*
       * Row 4
       */}
      <Box className="illustration-box illustration-box-16"></Box>
      <Box className="illustration-box illustration-box-17">
        <Pictogram iconName="icon-data-center" />
      </Box>
      <Box className="illustration-box illustration-box-18">
        <Pictogram iconName="icon-data-center" />
      </Box>
      <Box className="illustration-box illustration-box-19"></Box>
      <Box className="illustration-box illustration-box-20"></Box>
      {/*
       * Row 5
       */}
      <Box className="illustration-box illustration-box-21"></Box>
      <Box className="illustration-box illustration-box-22">
        <Pictogram iconName="icon-data-center" />
      </Box>
      <Box className="illustration-box illustration-box-23">
        <Pictogram animationDelay="-0.3s" iconName="icon-nuclear-power" />
      </Box>
      <Box className="illustration-box illustration-box-24"></Box>
      <Box className="illustration-box illustration-box-25"></Box>
      {/*
       * Row 6
       */}
      <Box className="illustration-box illustration-box-26"></Box>
      <Box className="illustration-box illustration-box-27"></Box>
      <Box className="illustration-box illustration-box-28"></Box>
      <Box className="illustration-box illustration-box-29"></Box>
      <Box className="illustration-box illustration-box-30">
        <Pictogram iconName="icon-data-center" />
      </Box>
      {/*
       * Row 7
       */}
      <Box className="illustration-box illustration-box-31"></Box>
      <Box className="illustration-box illustration-box-32">
        <Pictogram iconName="icon-hydro-power" />
      </Box>
      <Box className="illustration-box illustration-box-33"></Box>
      <Box className="illustration-box illustration-box-34"></Box>
      <Box className="illustration-box illustration-box-35"></Box>
      {/*
       * Row 8
       */}
      <Box className="illustration-box illustration-box-36"></Box>
      <Box className="illustration-box illustration-box-37"></Box>
      <Box className="illustration-box illustration-box-38"></Box>
      <Box className="illustration-box illustration-box-39"></Box>
      <Box className="illustration-box illustration-box-40"></Box>
      {/*
       * Row 9
       */}
      <Box className="illustration-box illustration-box-41"></Box>
      <Box className="illustration-box illustration-box-42"></Box>
      <Box className="illustration-box illustration-box-43"></Box>
      <Box className="illustration-box illustration-box-44"></Box>
      <Box className="illustration-box illustration-box-45"></Box>
      {/*
       * Row 10
       */}
      <Box className="illustration-box illustration-box-46"></Box>
      <Box className="illustration-box illustration-box-47">
        <Pictogram iconName="icon-data-center" />
      </Box>
      <Box className="illustration-box illustration-box-48"></Box>
      <Box className="illustration-box illustration-box-49"></Box>
      <Box className="illustration-box illustration-box-50"></Box>
    </PDPictogramGridMobile>
  )
}
