import React from 'react'
import * as S from './styles'

import { Text } from '@chakra-ui/react'
import { PersonCircle } from 'styled-icons/bootstrap'
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
          <Text fontSize={20} fontWeight={600}>{name}</Text> <br />
        </S.NameWrapper>
        <S.ContainerInfos>
          <div>
            <Text fontSize={12} fontWeight={700}>Nome da Fazenda</Text>
            <Text fontSize={14}>{nameFarmer}</Text>
          </div>

          <div>
            <Text fontSize={12} fontWeight={700}>Cidade da Fazenda</Text>
            <Text fontSize={14}>{cityFarmer}</Text>
          </div>
          <div>
            <Text fontSize={12} fontWeight={700}>Data de criação</Text>
            <Text fontSize={14}>{formatDate(creation)}</Text>
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
