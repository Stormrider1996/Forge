import {
  Column,
  ControlGroup,
  ControlTitle,
  ErrorMessage,
  Grid,
  RadioButton
} from '@components'
import { contactedBy } from '@utils'
import { spacing } from '@variables'
import { useFormContext } from 'react-hook-form'

export const FieldsContactedBy = () => {
  const { formState } = useFormContext()

  return (
    <Grid
      gridTemplateColumnsLaptop="repeat(9, 1fr)"
      spaceBottomMobile="0"
      spaceBottomTablet="0"
      spaceBottomLaptop={spacing.space04}
      spaceBottomDesktop={spacing.space05}
    >
      <Column>
        <ControlTitle>You are contacting Prosperity Digital</ControlTitle>

        <ControlGroup>
          {contactedBy.map((item, i) => {
            return (
              <RadioButton
                key={i}
                label={item.label}
                registerName={item.name}
                value={item.value}
              />
            )
          })}

          {formState?.errors.contactedBy && (
            <ErrorMessage>
              {formState?.errors.contactedBy?.message as string}
            </ErrorMessage>
          )}
        </ControlGroup>
      </Column>
    </Grid>
  )
}
