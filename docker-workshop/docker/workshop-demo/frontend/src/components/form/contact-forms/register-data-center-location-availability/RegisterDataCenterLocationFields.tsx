import {
  Checkbox,
  Column,
  ControlGroup,
  ControlTitle,
  ErrorMessage,
  Grid,
  InputField,
  RadioButton
} from '@components'
import {
  dataCenterlocation,
  electricalCapacity,
  energySource,
  listingType,
  locationOffer,
  locationType
} from '@utils'
import { spacing } from '@variables'
import { useFormContext } from 'react-hook-form'

export const RegisterDataCenterLocationFields = () => {
  const { formState } = useFormContext()

  return (
    <>
      <ControlTitle>Location type and information</ControlTitle>

      <Grid
        gridTemplateColumnsLaptop="repeat(9, 1fr)"
        spaceBottomMobile="0"
        spaceBottomTablet="0"
        spaceBottomLaptop={spacing.space04}
        spaceBottomDesktop={spacing.space04}
      >
        <Column gridColumnLaptop="1/5">
          <ControlGroup>
            {locationType.map((item, i) => {
              return (
                <RadioButton
                  key={i}
                  label={item.label}
                  registerName={item.name}
                  value={item.value}
                />
              )
            })}

            {formState?.errors.locationType && (
              <ErrorMessage>
                {formState?.errors.locationType?.message as string}
              </ErrorMessage>
            )}
          </ControlGroup>
        </Column>
      </Grid>

      <Grid
        gridTemplateColumnsLaptop="repeat(9, 1fr)"
        spaceBottomMobile="0"
        spaceBottomTablet="0"
        spaceBottomLaptop={spacing.space04}
        spaceBottomDesktop={spacing.space04}
      >
        <Column gridColumnLaptop="1/5">
          <ControlGroup>
            {dataCenterlocation.map((item, i) => {
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
          <ControlGroup>
            <InputField
              inputType="text"
              registerName="longitude"
              label="Longitude"
            />
            <InputField
              inputType="text"
              registerName="latitude"
              label="Latitude"
            />
          </ControlGroup>
        </Column>
      </Grid>

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
            {energySource.map((item, i) => {
              return (
                <Checkbox
                  key={i}
                  label={item.label}
                  registerName={item.name}
                  value={item.value}
                />
              )
            })}

            {formState?.errors.energySource && (
              <ErrorMessage>
                {formState?.errors.energySource?.message as string}
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

      <Grid
        gridTemplateColumnsLaptop="repeat(9, 1fr)"
        spaceBottomMobile="0"
        spaceBottomTablet="0"
        spaceBottomLaptop={spacing.space04}
        spaceBottomDesktop={spacing.space04}
      >
        <Column gridColumnLaptop="1/5">
          <ControlTitle>What type of listing do you consider?</ControlTitle>

          <ControlGroup>
            {listingType.map((item, i) => {
              return (
                <RadioButton
                  key={i}
                  label={item.label}
                  registerName={item.name}
                  value={item.value}
                />
              )
            })}

            {formState?.errors.listingType && (
              <ErrorMessage>
                {formState?.errors.listingType?.message as string}
              </ErrorMessage>
            )}
          </ControlGroup>
        </Column>

        <Column gridColumnLaptop="6/10">
          <ControlTitle>What does your location offer?</ControlTitle>

          <ControlGroup>
            {locationOffer.map((item, i) => {
              return (
                <Checkbox
                  key={i}
                  label={item.label}
                  registerName={item.name}
                  value={item.value}
                />
              )
            })}

            {formState?.errors.locationOffer && (
              <ErrorMessage>
                {formState?.errors.locationOffer?.message as string}
              </ErrorMessage>
            )}
          </ControlGroup>
        </Column>
      </Grid>
    </>
  )
}
