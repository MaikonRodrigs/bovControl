'use client'

import React from 'react'
import * as S from './styles'

interface LabelProps {
  children: React.ReactNode
  color?: 'primary' | 'secondary' | 'third'
}

const Title: React.FC<LabelProps> = ({
  children,
  color = 'primary',
}: LabelProps) => {
  return (
    <S.Container>
      <S.Label color={color}>{children}</S.Label>
    </S.Container>
  )
}

export default Title
