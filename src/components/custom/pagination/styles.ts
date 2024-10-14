import styled from 'styled-components'
import {
  SkipNextCircle,
  SkipPreviousCircle,
} from 'styled-icons/boxicons-regular'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin: 16px 0 0 0;
`

export const Pagination = styled.div``
export const Next = styled(SkipNextCircle)`
  cursor: pointer;
`
export const Prev = styled(SkipPreviousCircle)`
  cursor: pointer;
`
