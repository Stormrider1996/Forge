import { Hr, Icon, Reveal } from '@components'
import { colors, spacing } from '@variables'
import { FunctionComponent } from 'react'
import styled from 'styled-components'

interface Props {
  list: string[]
}

const PDList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${spacing.space02};
  list-style: none;
  padding: 0;
`

const Item = styled.div`
  align-items: center;
  display: grid;
  gap: ${spacing.space02};
  grid-template-columns: auto 1fr;
  padding-block-end: ${spacing.space02};
`

export const CheckList: FunctionComponent<Props> = ({ list }) => {
  if (!list.length) {
    return null
  }

  return (
    <PDList>
      {list.map((item, i) => {
        return (
          <li key={i}>
            <Item>
              <Reveal>
                <Icon iconName="icon-circle-checkmark" />
              </Reveal>

              <Reveal delay={0.4}>
                <span>{item}</span>
              </Reveal>
            </Item>

            <Reveal delay={0.2}>
              <Hr color={colors.shades.light.x50} spaceBottom="0" />
            </Reveal>
          </li>
        )
      })}
    </PDList>
  )
}
