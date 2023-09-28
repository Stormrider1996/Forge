import { Column, ControlGroup, Grid, Select } from '@components'
import { miningHardwareOptions } from '@utils'
import { spacing } from '@variables'

interface OptionProps {
  label: string
  value: string
  quantity: number
}

const options: OptionProps[] = []

export const createHardwareOption = (label: string) => ({
  label,
  value: label.toLowerCase().replace(/\s/g, ''),
  quantity: 1
})

const generateOptions = () => {
  miningHardwareOptions.forEach((item) =>
    options.push(createHardwareOption(item))
  )
}

generateOptions()

export const RegisterHostingNeedsFields = () => {
  return (
    <Grid
      gridTemplateColumnsLaptop="repeat(9, 1fr)"
      spaceBottomMobile="0"
      spaceBottomTablet="0"
      spaceBottomLaptop={spacing.space04}
      spaceBottomDesktop={spacing.space04}
    >
      <Column gridColumnLaptop="1/8">
        <ControlGroup>
          <Select
            instructions="Enter or select your mining hardware from the list"
            options={options}
            registerName="miningHardware"
            placeholder="Mining hardware type"
          />
        </ControlGroup>
      </Column>
    </Grid>
  )
}
