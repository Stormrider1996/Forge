import {
  Column,
  ControlGroup,
  ControlTitle,
  ErrorMessage,
  Grid,
  RadioButton
} from '@components'
import { investmentValue, privateEquity } from '@utils'
import { spacing } from '@variables'
import { useFormContext } from 'react-hook-form'

export const InvestmentInterestFields = () => {
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
          {privateEquity.map((item, i) => {
            return (
              <RadioButton
                key={i}
                label={item.label}
                registerName={item.name}
                value={item.value}
              />
            )
          })}

          {formState?.errors.privateEquity && (
            <ErrorMessage>
              {formState?.errors.privateEquity?.message as string}
            </ErrorMessage>
          )}
        </ControlGroup>
      </Column>

      <Column gridColumnLaptop="6/10">
        <ControlTitle>Amount of electrical capacity available?</ControlTitle>

        <ControlGroup>
          {investmentValue.map((item, i) => {
            return (
              <RadioButton
                key={i}
                label={item.label}
                registerName={item.name}
                value={item.value}
              />
            )
          })}

          {formState?.errors.investmentValue && (
            <ErrorMessage>
              {formState?.errors.investmentValue?.message as string}
            </ErrorMessage>
          )}
        </ControlGroup>
      </Column>
    </Grid>
  )
}
