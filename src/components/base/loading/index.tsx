'use client'

import React from 'react'
import * as S from './styles'

import useLoadingStore from '@/zustand/loadind.store'

export function Loading() {
  return (
    <S.Wrapper>
      <S.Dot delay='0.1s' />
      <S.Dot delay='0.2s' />
      <S.Dot delay='0.3s' />
    </S.Wrapper>
  )
}

const LoadingComponent: React.FC = () => {
  const { loadingPage } = useLoadingStore()

  return loadingPage && <Loading />
}

export default LoadingComponent
