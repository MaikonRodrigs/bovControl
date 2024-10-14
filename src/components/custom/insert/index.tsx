import React from 'react'

import * as S from './styles'
import { Add } from 'styled-icons/fluentui-system-filled'
import { Button } from '@chakra-ui/react'
import Sidebar from '../sidebar'
import useMapStore from '@/zustand/map.store'

interface InsertProps {}

const Insert: React.FC<InsertProps> = ({}: InsertProps) => {
  const { setAdd, add } = useMapStore()
  return (
    <>
      <S.Container>
        <Button
          width={'full'}
          mt={2}
          variant={'solid'}
          colorScheme='teal'
          zIndex={0}
          onClick={() => setAdd(!add)}
        >
          <Add size={22} />
        </Button>
      </S.Container>
      {add && <Sidebar />}
    </>
  )
}

export default Insert
