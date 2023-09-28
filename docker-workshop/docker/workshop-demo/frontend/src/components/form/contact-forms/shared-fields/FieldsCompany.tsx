import { Column, ControlGroup, Grid, InputField } from '@components'
import { companyEmailPhone, companyInfo, companyRegistrationVat } from '@utils'
import { spacing } from '@variables'

export const FieldsCompany = () => {
  return (
    <Grid
      gridTemplateColumnsLaptop="repeat(9, 1fr)"
      spaceBottomMobile="0"
      spaceBottomTablet="0"
      spaceBottomLaptop={spacing.space04}
      spaceBottomDesktop={spacing.space04}
    >
      <Column gridColumnLaptop="1/5">
        {/*
                  Company general
                  */}
        <ControlGroup>
          {companyInfo.map((item, i) => {
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
                  Company registration and vat
                  */}
        <ControlGroup spaceBottom={spacing.space04}>
          {companyRegistrationVat.map((item, i) => {
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

        <ControlGroup>
          {companyEmailPhone.map((item, i) => {
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
    </Grid>
  )
}
