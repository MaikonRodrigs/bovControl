'use client'

import React from 'react'

import * as S from './styles'

interface TextProps {
  children: React.ReactNode
  color?: 'primary' | 'secondary' | 'third'
}

const Text: React.FC<TextProps> = ({
  children,
  color = 'primary',
}: TextProps) => {
  return (
    <S.Container>
      <S.Text color={color}>{children}</S.Text>
    </S.Container>
  )
}

export default Text
