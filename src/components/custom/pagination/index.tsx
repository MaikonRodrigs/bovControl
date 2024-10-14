import React from 'react'

import * as S from './styles'
import { Text } from '@chakra-ui/react'

interface PaginationProps {
  onClickPrev: () => void
  onClickNext: () => void
  totalItems: number
  page: number
}

const Pagination: React.FC<PaginationProps> = ({
  onClickPrev,
  onClickNext,
  totalItems,
  page,
}: PaginationProps) => {
  const calculateTotalPages = (
    totalItems: number,
    itemsPerPage: number = 5,
  ): number => {
    return Math.ceil(totalItems / itemsPerPage)
  }

  const totalPages = calculateTotalPages(totalItems)

  return (
    <>
      <hr />
      <S.Container>
        <S.Prev size={32} color={`var(--primary)`} onClick={onClickPrev} />
        <S.Pagination>
          <Text fontSize={12}>
            {page}/{totalPages}
          </Text>
        </S.Pagination>
        <S.Next size={32} color={`var(--primary)`} onClick={onClickNext} />
      </S.Container>
    </>
  )
}

export default Pagination
