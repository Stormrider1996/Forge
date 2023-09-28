import {
  Column,
  ControlGroup,
  ErrorMessage,
  Grid,
  InputField,
  RadioButton
} from '@components'
import { basicInfo, hearAboutUs } from '@utils'
import { spacing } from '@variables'
import { useFormContext } from 'react-hook-form'

export const FieldsGeneral = () => {
  const { formState } = useFormContext()

  return (
    <Grid
      spaceBottomMobile="0"
      spaceBottomTablet="0"
      spaceBottomLaptop={spacing.space04}
      spaceBottomDesktop={spacing.space05}
      gridTemplateColumnsLaptop="repeat(9, 1fr)"
    >
      <Column gridColumnLaptop="1/5">
        {/*
        Basic info
        */}
        <ControlGroup>
          {basicInfo.map((item, i) => {
            return (
              <InputField
                key={i}
                inputType={item.inputType}
                instructions={item.instructions}
                label={item.label}
                registerName={item.name}
              />
            )
          })}
        </ControlGroup>
      </Column>

      <Column gridColumnLaptop="6/10">
        {/*
        Hear about us
        */}
        <ControlGroup>
          <>
            {hearAboutUs.map((item, i) => {
              return (
                <RadioButton
                  key={i}
                  label={item.label}
                  registerName={item.name}
                  value={item.value}
                />
              )
            })}

            {formState?.errors.hearAboutUs && (
              <ErrorMessage>
                {formState?.errors.hearAboutUs?.message as string}
              </ErrorMessage>
            )}
          </>
        </ControlGroup>
      </Column>
    </Grid>
  )
}
