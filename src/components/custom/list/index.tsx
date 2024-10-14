import React from 'react'
import Text from '@/components/base/text'

import * as S from './styles'
import { PersonCircle } from 'styled-icons/bootstrap'
import Label from '@/components/base/label'
import Description from '@/components/base/description'
import { formatDate } from '@/components/utils/formatDate'

interface ListProps {
  name: string
  nameFarmer: string
  cityFarmer: string
  creation: string
  onClickView: () => void
  onClickDelete: () => void
}

const List: React.FC<ListProps> = ({
  name,
  nameFarmer,
  cityFarmer,
  creation,
  onClickView,
  onClickDelete,
}: ListProps) => {
  return (
    <S.Container>
      <S.Content>
        <S.NameWrapper>
          <PersonCircle size={22} color={'black'} />
          <Label>{name}</Label> <br />
        </S.NameWrapper>
        <S.ContainerInfos>
          <div>
            <Description size={'think'}>Nome da Fazenda</Description>
            <Text>{nameFarmer}</Text>
          </div>

          <div>
            <Description size={'think'}>Cidade da Fazenda</Description>
            <Text>{cityFarmer}</Text>
          </div>
          <div>
            <Description size={'think'}>Data de criação</Description>
            <Description>{formatDate(creation)}</Description>
          </div>
          <S.IconsContainer>
            <S.IconView
              size={22}
              color={'var(--secondary)'}
              onClick={() => onClickView()}
            />
            <S.IconDelete
              size={22}
              color={'var(--third)'}
              onClick={() => onClickDelete()}
            />
          </S.IconsContainer>
        </S.ContainerInfos>
      </S.Content>
    </S.Container>
  )
}

export default List
