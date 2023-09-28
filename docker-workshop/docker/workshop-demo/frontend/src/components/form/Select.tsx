import { ControlTitle, Flex, Hr } from '@components'
import { contactState } from '@states'
import {
  SvgDropdownIndicator,
  SvgIconCircleMinus,
  SvgIconCirclePlus,
  SvgIconCloseCircle
} from '@svg'
import { colors, spacing, typography } from '@variables'
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState
} from 'react'
import { useFormContext } from 'react-hook-form'
import { StylesConfig } from 'react-select'
import CreatableSelect from 'react-select/creatable'
import styled from 'styled-components'

interface Props {
  instructions?: string
  options: Option[]
  placeholder: string
  registerName: string
}

interface Option {
  readonly label: string
  quantity: number
  readonly value: string
}

const customStyles: StylesConfig = {
  menu: (styles) => ({
    ...styles,
    border: 'none',
    borderRadius: 0,
    padding: 0
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    display: 'none'
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    alignItems: 'center',
    display: 'flex'
  }),
  placeholder: (styles) => ({
    ...styles,
    color: colors.grayscale.x400
  }),
  input: (styles) => ({
    ...styles,
    margin: 0,
    padding: 0
  }),
  valueContainer: (styles) => ({
    ...styles,
    margin: 0,
    padding: 0
  }),
  container: (styles) => ({
    ...styles,
    padding: 0
  }),
  control: (styles, state) => ({
    ...styles,
    boxShadow: 'none',
    border: state.isFocused ? 'none' : 'none',
    outline: state.isFocused ? 'none' : 'none',
    borderBottom: `1px solid ${colors.grayscale.x400}`,
    borderRadius: 0,
    paddingBlock: spacing.spaceSmall,
    paddingInline: 0,
    margin: 0,
    width: '100%'
  })
}

const List = styled.div`
  margin-top: ${spacing.space01};
`

const QuantityContainer = styled((props) => <Flex {...props} />)<{
  disabled?: boolean
}>`
  --opacity: ${(props) => (props.disabled ? '0' : '1')};
  --pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};

  opacity: var(--opacity);
  pointer-events: var(--pointer-events);
`

const QuantityController = styled.div`
  cursor: pointer;
`

const Quantity = styled.input`
  border: none;
  margin: 0;
  padding: 0;
  text-align: center;
`

const Instructions = styled.div<{ hasError: boolean }>`
  --text-color: ${(props) =>
    props.hasError ? colors.error : colors.grayscale.x600};

  color: var(--text-color);
  cursor: default;
  font-size: ${typography.fontSize.inputLabel};
  line-height: ${typography.lineHeight};
  padding-block: ${spacing.spaceSmall};
`

const DropdownIndicator = () => {
  return <SvgDropdownIndicator />
}

export const Select: FunctionComponent<Props> = ({
  instructions,
  options,
  placeholder,
  registerName
}) => {
  const { formState, setValue, getValues } = useFormContext()
  const [, updateState] = useState({})
  const { data } = contactState()
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([])

  const forceUpdate = useCallback(() => updateState({}), [])

  const error = formState.errors[registerName as string] // nosemgrep

  useEffect(() => {
    setValue('miningHardware', selectedOptions)
  }, [getValues, selectedOptions, setValue])

  const createOptionHelper = (label: string) => ({
    label,
    value: label.toLowerCase().replace(/\W/g, '-'),
    quantity: 1
  })

  const checkIfDuplicate = (newOption: Option) => {
    return selectedOptions.includes(newOption)
  }

  const handleCreate = (inputValue: string) => {
    forceUpdate()
    const newOption = createOptionHelper(inputValue)
    const isDuplicate = checkIfDuplicate(newOption)

    if (!isDuplicate) {
      setSelectedOptions([...selectedOptions, newOption])
      forceUpdate()
    }
  }

  const handleSelect = (option: Option) => {
    const isDuplicate = checkIfDuplicate(option)

    if (!isDuplicate) {
      setSelectedOptions([...selectedOptions, option])
      forceUpdate()
    }
  }

  const handleDelete = (itemToDelete: Option, i: number) => {
    const cloneArr = selectedOptions
    cloneArr[i].quantity = 1
    setSelectedOptions(cloneArr.filter((item) => item !== itemToDelete))
  }

  const onAdd = (quantity: number, i: number) => {
    const newArr = selectedOptions
    newArr[i].quantity++
    setSelectedOptions(newArr)

    forceUpdate()
    setValue('miningHardware', selectedOptions)
  }

  const onReduce = (quantity: number, i: number) => {
    if (quantity === 1) {
      return
    }

    const newArr = selectedOptions
    newArr[i].quantity--
    setSelectedOptions(newArr)

    forceUpdate()
    setValue('miningHardware', selectedOptions)
  }

  const handleChangeQuantity = (quantity: number, i: number) => {
    const newArr = selectedOptions
    newArr[i].quantity = quantity
    setSelectedOptions(newArr)

    forceUpdate()
    setValue('miningHardware', selectedOptions)
  }

  useEffect(() => {
    if (data) {
      setSelectedOptions([])
    }
  }, [data])

  return (
    <>
      <div>
        <CreatableSelect
          styles={customStyles}
          placeholder={placeholder}
          value={placeholder}
          components={{ DropdownIndicator }}
          options={options}
          onChange={(option) => handleSelect(option as Option)}
          onCreateOption={(option) => handleCreate(option)}
        />

        {!selectedOptions?.length && (
          <Instructions hasError={!!error?.message}>
            {(error?.message as string) || instructions}
          </Instructions>
        )}
      </div>

      {!!selectedOptions?.length && (
        <ControlTitle>Enter the selected mining hardware quantity</ControlTitle>
      )}

      {!!selectedOptions.length && (
        <List>
          {selectedOptions?.map((item, i) => (
            <div key={i}>
              <Hr
                color={colors.grayscale.x500}
                spaceBottom={spacing.baseSpacing}
              />
              <Flex
                spaceBottom={spacing.baseSpacing}
                justifyContent="space-between"
                alignItems="center"
              >
                <Flex
                  gapMobile={spacing.baseSpacing}
                  gapTablet={spacing.baseSpacing}
                  gapLaptop={spacing.baseSpacing}
                  gapDesktop={spacing.baseSpacing}
                >
                  <QuantityController onClick={() => handleDelete(item, i)}>
                    <SvgIconCloseCircle />
                  </QuantityController>
                  <span>{item?.label}</span>
                </Flex>

                <QuantityContainer
                  disabled={!options.includes(item)}
                  alignItems="center"
                  gap={spacing.baseSpacing}
                >
                  <QuantityController
                    onClick={() => onReduce(item.quantity, i)}
                  >
                    <SvgIconCircleMinus />
                  </QuantityController>

                  <Quantity
                    type="number"
                    min={1}
                    max={1000}
                    value={item.quantity}
                    onChange={(e) => handleChangeQuantity(+e.target.value, i)}
                  />

                  <QuantityController onClick={() => onAdd(item.quantity, i)}>
                    <SvgIconCirclePlus />
                  </QuantityController>
                </QuantityContainer>
              </Flex>
            </div>
          ))}
        </List>
      )}
    </>
  )
}
