import React from 'react'

import * as S from './styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string
}

const Input: React.FC<InputProps> = ({ type, ...props }: InputProps) => {
  return <S.Input type={type} {...props} />
}

export default Input
