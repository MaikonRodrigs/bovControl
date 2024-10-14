import React from 'react'

import * as S from './styles'

interface CardProps {
  children: React.ReactNode
}

const Card: React.FC<CardProps> = ({ children }: CardProps) => {
  return <S.Container>{children}</S.Container>
}

export default Card
