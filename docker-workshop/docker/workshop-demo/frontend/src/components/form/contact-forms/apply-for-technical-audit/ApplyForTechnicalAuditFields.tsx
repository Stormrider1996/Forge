import {
  Checkbox,
  Column,
  ControlGroup,
  ControlTitle,
  ErrorMessage,
  Grid,
  Hr,
  RadioButton
} from '@components'
import {
  auditNature,
  dataCenterLayers1,
  dataCenterLayers2,
  reasonForJoining
} from '@utils'
import { colors, spacing } from '@variables'
import { useFormContext } from 'react-hook-form'

export const ApplyForTechnicalAuditFields = () => {
  const { formState, watch } = useFormContext()

  const isJoinOurBusinessNetworkVisible =
    watch('auditNature')?.toLowerCase() ===
    "i want my data center to join the prosperity digital's business network"

  const isWantDataCenterInfrastructureAudited =
    watch('auditNature')?.toLowerCase() ===
    "i want my data center's infrastructure to be audited"

  const generateSpaceBottom = () => {
    if (
      isJoinOurBusinessNetworkVisible ||
      isWantDataCenterInfrastructureAudited
    ) {
      return spacing.space01
    }

    return spacing.space04
  }

  return (
    <>
      <ControlTitle>What&apos;s the nature of your audit?</ControlTitle>

      <Grid
        gridTemplateColumnsLaptop="repeat(9, 1fr)"
        spaceBottomMobile="0"
        spaceBottomTablet="0"
        spaceBottomLaptop={generateSpaceBottom()}
        spaceBottomDesktop={generateSpaceBottom()}
      >
        <Column>
          <ControlGroup>
            {auditNature.map((item, i) => {
              return (
                <RadioButton
                  key={i}
                  label={item.label}
                  registerName={item.name}
                  value={item.value}
                />
              )
            })}

            {formState?.errors?.auditNature && (
              <ErrorMessage>
                {formState?.errors?.auditNature?.message as string}
              </ErrorMessage>
            )}
          </ControlGroup>
        </Column>
      </Grid>

      {isJoinOurBusinessNetworkVisible && (
        <>
          <Hr color={colors.primary.x50} spaceBottom={spacing.space01} />

          <Grid
            gridTemplateColumnsLaptop="repeat(9, 1fr)"
            spaceBottomMobile={spacing.space04}
          >
            <Column>
              <ControlTitle>
                Why do you wish to join our business network?
              </ControlTitle>

              <ControlGroup>
                {reasonForJoining.map((item, i) => {
                  return (
                    <RadioButton
                      key={i}
                      label={item.label}
                      registerName={item.name}
                      value={item.value}
                    />
                  )
                })}

                {formState?.errors?.reasonForJoining && (
                  <ErrorMessage>
                    {formState?.errors?.reasonForJoining?.message as string}
                  </ErrorMessage>
                )}
              </ControlGroup>
            </Column>
          </Grid>
        </>
      )}

      {isWantDataCenterInfrastructureAudited && (
        <>
          <Hr color={colors.primary.x50} spaceBottom={spacing.space01} />

          <Grid
            gridTemplateColumnsLaptop="repeat(9, 1fr)"
            spaceBottomMobile="0"
            spaceBottomTablet="0"
            spaceBottomLaptop={spacing.space04}
            spaceBottomDesktop={spacing.space04}
          >
            <Column>
              <ControlTitle>
                Which data center layers do you want to be audited?
              </ControlTitle>
            </Column>
            <Column gridColumnLaptop="1/5">
              <ControlGroup>
                {dataCenterLayers1.map((item, i) => {
                  return (
                    <Checkbox
                      key={i}
                      label={item.label}
                      registerName={item.name}
                      value={item.value}
                    />
                  )
                })}

                {formState?.errors?.dataCenterLayers && (
                  <ErrorMessage>
                    {formState?.errors?.dataCenterLayers?.message as string}
                  </ErrorMessage>
                )}
              </ControlGroup>
            </Column>

            <Column gridColumnLaptop="6/10">
              <ControlGroup>
                {dataCenterLayers2.map((item, i) => {
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
      )}
    </>
  )
}
