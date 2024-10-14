import React from 'react'

import * as S from './styles'
import Description from '@/components/base/description'

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
          <Description size='think'>
            {page}/{totalPages}
          </Description>
        </S.Pagination>
        <S.Next size={32} color={`var(--primary)`} onClick={onClickNext} />
      </S.Container>
    </>
  )
}

export default Pagination
