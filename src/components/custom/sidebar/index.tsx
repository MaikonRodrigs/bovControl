import React from 'react'
import MapComponent from '../map'

import * as S from './styles'
import AddFarmer from '../add'

const Sidebar: React.FC = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <AddFarmer />
        <S.MapWrapper>
          <MapComponent />
        </S.MapWrapper>
      </S.Wrapper>
    </S.Container>
  )
}

export default Sidebar
