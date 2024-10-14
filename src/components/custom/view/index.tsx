import React from 'react'

import * as S from './styles'
import MapComponent from '../map'
import Informations from '../informations'

const ViewFarmerInfo: React.FC = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <Informations />
        <S.MapWrapper>
          <MapComponent />
        </S.MapWrapper>
      </S.Wrapper>
    </S.Container>
  )
}

export default ViewFarmerInfo
