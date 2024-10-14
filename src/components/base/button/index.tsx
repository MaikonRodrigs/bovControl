import React from 'react'
import * as S from './styles'

import { ButtonTypes } from '@/types/ButtonTypes.type'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  btype: ButtonTypes
}

const Button: React.FC<ButtonProps> = ({ children, btype }: ButtonProps) => {
  const typesButton = React.useMemo(() => {
    switch (btype) {
      case 'primary':
        return 'var(--primary)'
      case 'secondary':
        return 'var(--secondary)'
    }
  }, [btype])

  return (
    <S.Container typesButton={typesButton}>
      <S.Wrapper>{children}</S.Wrapper>
    </S.Container>
  )
}

export default Button
