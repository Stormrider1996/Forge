import {
  Checkbox,
  Column,
  ControlGroup,
  ControlTitle,
  ErrorMessage,
  Grid
} from '@components'
import { idea1, idea2 } from '@utils'
import { spacing } from '@variables'
import { useFormContext } from 'react-hook-form'

export const ApplyForFundingFields = () => {
  const { formState } = useFormContext()

  return (
    <>
      <ControlTitle>
        What is your idea related to? (Select one or more options listed bellow)
      </ControlTitle>

      <Grid
        gridTemplateColumnsLaptop="repeat(9, 1fr)"
        spaceBottomMobile="0"
        spaceBottomTablet="0"
        spaceBottomLaptop={spacing.space04}
        spaceBottomDesktop={spacing.space04}
      >
        <Column gridColumnLaptop="1/5">
          <ControlGroup>
            {idea1.map((item, i) => {
              return (
                <Checkbox
                  key={i}
                  label={item.label}
                  registerName={item.name}
                  value={item.value}
                />
              )
            })}

            {formState?.errors.idea && (
              <ErrorMessage>
                {formState?.errors.idea?.message as string}
              </ErrorMessage>
            )}
          </ControlGroup>
        </Column>

        <Column gridColumnLaptop="6/10">
          <ControlGroup>
            {idea2.map((item, i) => {
              return (
                <Checkbox
                  key={i}
                  label={item.label}
                  registerName={item.name}
                  value={item.value}
                />
              )
            })}
          </ControlGroup>
        </Column>
      </Grid>
    </>
  )
}
