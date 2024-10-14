import React from 'react'
import {
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
} from '@chakra-ui/react'

interface Option {
  value: string
  label: string
}

interface SelectProps extends ChakraSelectProps {
  options: Option[]
  placeholder?: string
  value?: string
  disabled: boolean
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const Select: React.FC<SelectProps> = ({
  options,
  placeholder = 'Selecione',
  disabled,
  value,
  onChange,
  ...props
}) => {
  return (
    <ChakraSelect
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      variant={'outline'}
      background={'white'}
      colorScheme='teal'
      disabled={disabled}
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </ChakraSelect>
  )
}

export default Select
