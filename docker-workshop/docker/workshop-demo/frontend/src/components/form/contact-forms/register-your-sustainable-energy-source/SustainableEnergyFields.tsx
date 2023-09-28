import {
  Checkbox,
  Column,
  ControlGroup,
  ControlTitle,
  ErrorMessage,
  Grid,
  RadioButton
} from '@components'
import { electricalCapacity, sustainableEnergySource } from '@utils'
import { spacing } from '@variables'
import { useFormContext } from 'react-hook-form'

export const SustainableEnergyFields = () => {
  const { formState } = useFormContext()

  return (
    <Grid
      gridTemplateColumnsLaptop="repeat(9, 1fr)"
      spaceBottomMobile="0"
      spaceBottomTablet="0"
      spaceBottomLaptop={spacing.space04}
      spaceBottomDesktop={spacing.space04}
    >
      <Column gridColumnLaptop="1/5">
        <ControlTitle>
          What type of sustainable energy source do you have available?
        </ControlTitle>

        <ControlGroup>
          {sustainableEnergySource.map((item, i) => {
            return (
              <Checkbox
                key={i}
                label={item.label}
                registerName={item.name}
                value={item.value}
              />
            )
          })}

          {formState?.errors.sustainableEnergySource && (
            <ErrorMessage>
              {formState?.errors.sustainableEnergySource?.message as string}
            </ErrorMessage>
          )}
        </ControlGroup>
      </Column>

      <Column gridColumnLaptop="6/10">
        <ControlTitle>Amount of electrical capacity available?</ControlTitle>

        <ControlGroup>
          {electricalCapacity.map((item, i) => {
            return (
              <RadioButton
                key={i}
                label={item.label}
                registerName={item.name}
                value={item.value}
              />
            )
          })}

          {formState?.errors.electricalCapacity && (
            <ErrorMessage>
              {formState?.errors.electricalCapacity?.message as string}
            </ErrorMessage>
          )}
        </ControlGroup>
      </Column>
    </Grid>
  )
}
