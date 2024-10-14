'use client'

import React from 'react'
<<<<<<< HEAD
import * as S from '@/components/base/label/styles'
=======
import * as S from '@/components/base/Label/styles'
>>>>>>> c531217d8b4eb2f994f84be6ea3ab2c1c21d1974

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
