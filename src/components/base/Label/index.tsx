import React from 'react'

import * as S from './styles'

interface LabelProps {
  children: React.ReactNode
}

const Label: React.FC<LabelProps> = ({ children }: LabelProps) => {
  return (
    <S.Container>
      <S.Label>{children}</S.Label>
    </S.Container>
  )
}

export default Label
