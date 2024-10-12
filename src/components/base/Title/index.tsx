'use client'

import React from 'react'

import * as S from './styles'

interface TitleProps {
  children: React.ReactNode
  color?: 'primary' | 'secondary' | 'third'
}

const Title: React.FC<TitleProps> = ({
  children,
  color = 'primary',
}: TitleProps) => {
  return (
    <S.Container>
      <S.Title color={color}>{children}</S.Title>
    </S.Container>
  )
}

export default Title
