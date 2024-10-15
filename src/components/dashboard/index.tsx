import React from 'react'

import Card from '@/components/custom/card'
import List from '@/components/custom/list'
import Modal from '../base/modal'
import Insert from '../custom/insert'
import Pagination from '../custom/pagination'
import useMapStore from '@/zustand/map.store'
import ViewFarmerInfo from '../custom/view'
import useLoadingStore from '@/zustand/loadind.store'
import useCheckListStore from '@/zustand/checklist.store'

import { Text } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import { LatLngTuple } from 'leaflet'

const DashboardView: React.FC = () => {
  const [page, setPage] = React.useState<number>(1)
  const [offset, setOffset] = React.useState<number>(0)
  const [modal, setModal] = React.useState<boolean>(false)

  const { checkList, setCheckList } = useCheckListStore()
  const { setLoadingPage, loadingPage } = useLoadingStore()
  const toast = useToast()
  const { setView, view, setMarker, setCurrentFarmer, currentFarmer } =
    useMapStore()

  const NextPage = React.useCallback(() => {
    const totalPages = Math.ceil(checkList.length / 4)
    if (page >= totalPages) return

    setPage((prevPage) => prevPage + 1)
    setOffset((prevOffset) => prevOffset + 4)
  }, [checkList, page])

  const PrevPage = React.useCallback(() => {
    if (offset <= 0) return

    setPage((prevPage) => Math.max(prevPage - 1, 1))
    setOffset((prevOffset) => Math.max(prevOffset - 4, 0))
  }, [checkList, page])

  const onClickView = React.useMemo(() => {
    return (item: (typeof checkList)[0]) => {
      const { latitude, longitude } = item.location
      const markerFarmer: LatLngTuple = [latitude, longitude]
      setMarker(markerFarmer)
      setCurrentFarmer(item)
      setView(true)
    }
  }, [checkList])

  async function getFarmers() {
    setLoadingPage(true)
    try {
      const response = await fetch('/api/getCheckList', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json()
      setCheckList(data)
    } catch (error) {
      console.error('Error fetching datasss:', error)
    } finally {
      setLoadingPage(false)
    }
  }

  async function onClickDelete() {
    setModal(false)
    setLoadingPage(true)
    try {
      const response = await fetch(
        `/api/deleteCheckList?id=${currentFarmer?._id}`,
        {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      const data = await response.json()
      if (data) {
        getFarmers()
        toast({
          title: `${currentFarmer?.farmer.name}`,
          description: 'Foi excluida com sucesso',
          status: 'warning',
          duration: 9000,
          isClosable: false,
          position: 'top',
        })
      }
    } catch (error) {
      toast({
        title: `${currentFarmer?.farmer.name}`,
        description: 'Erro ao excluir',
        status: 'error',
        duration: 9000,
        isClosable: false,
        position: 'top',
      })
    } finally {
      setLoadingPage(false)
    }
  }
  const orderedCheckList = checkList
    ?.slice()
    .sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
    )

  return (
    <>
      <Card>
        <div
          style={{ textAlign: 'center', width: '100%', marginBottom: '20px' }}
        >
          <Text fontSize={32}>Lista de Fazendeiros @BovControl</Text>
        </div>
        <hr />
        {!loadingPage && <Insert />}
        {checkList &&
          orderedCheckList
            ?.slice(offset, offset + 4)
            .map((items, idx: number) => (
              <List
                key={items._id}
                name={items.from.name}
                cityFarmer={items.farmer.city}
                nameFarmer={items.farmer.name}
                creation={items.created_at}
                onClickView={() => onClickView(items)}
                onClickDelete={() => {
                  setModal(true)
                  setCurrentFarmer(items)
                }}
              />
            ))}
        <Pagination
          onClickPrev={() => PrevPage()}
          onClickNext={() => NextPage()}
          page={page}
          totalItems={checkList.length}
        />
      </Card>
      {view && <ViewFarmerInfo />}
      <Modal
        isOpen={modal}
        title='Confirmar Exclusão?'
        confirmedtext='Excluir'
        onClose={() => setModal(false)}
        handleConfirmed={() => onClickDelete()}
      >
        Tem certeza que deseja excluir a fazenda {currentFarmer?.farmer.name}?
        <br />
        <br />
        Esse processo não poderá ser desfeito!
      </Modal>
    </>
  )
}

export default DashboardView
