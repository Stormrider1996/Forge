import {
  Column,
  ControlGroup,
  ControlTitle,
  ErrorMessage,
  Grid,
  TextArea
} from '@components'
import { spacing } from '@variables'
import { useFormContext } from 'react-hook-form'

export const FieldsMessage = () => {
  const { formState } = useFormContext()

  return (
    <Grid
      gridTemplateColumnsLaptop="repeat(9, 1fr)"
      spaceBottomMobile="0"
      spaceBottomTablet="0"
      spaceBottomLaptop={spacing.space04}
      spaceBottomDesktop={spacing.space04}
    >
      <Column>
        <ControlTitle>
          Provide additional comments or information here
        </ControlTitle>

        <ControlGroup
          spaceBottom={formState?.errors.message ? spacing.space01 : '0'}
        >
          <TextArea registerName="message" />
        </ControlGroup>

        <ErrorMessage>
          {formState?.errors.message?.message as string}
        </ErrorMessage>
      </Column>
    </Grid>
  )
}
