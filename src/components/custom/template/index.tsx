'use client'

import React from 'react'

import * as S from './styles'

interface TemplateProps {
  children: React.ReactNode
}

const Template: React.FC<TemplateProps> = ({ children }: TemplateProps) => {
  return <S.Container>{children}</S.Container>
}

export default Template
 