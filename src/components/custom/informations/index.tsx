import React from 'react'
import * as S from './styles'

import Input from '@/components/base/input'
import Select from '@/components/base/select'
import useMapStore from '@/zustand/map.store'
import useLoadingStore from '@/zustand/loadind.store'
import useCheckListStore from '@/zustand/checklist.store'
import ValidadeFarmerForm from '@/schema/ValidadeFarmerFormSchema'

import { Text } from '@chakra-ui/react'
import { Switch } from '@chakra-ui/react'
import { useFormik } from 'formik'
import { LatLngTuple } from 'leaflet'
import { Button, useToast } from '@chakra-ui/react'
import { CloseCircleOutline } from 'styled-icons/evaicons-outline'

const Informations: React.FC = () => {
  const {
    marker,
    setMarker,
    currentFarmer,
    setDisabled,
    disabled,
    setView,
    clearMarker,
  } = useMapStore()
  const toast = useToast()

  const { setLoadingPage } = useLoadingStore()
  const { setCheckList } = useCheckListStore()
  const [selectedOption, setSelectedOption] = React.useState<any>(
    currentFarmer?.type,
  )
  const [isChecked, setIsChecked] = React.useState<boolean>(
    currentFarmer?.had_supervision || false,
  )

  const formik = useFormik({
    initialValues: {
      name: currentFarmer?.from.name,
      farmerName: currentFarmer?.farmer.name,
      farmerCity: currentFarmer?.farmer.city,
      nameSupervision: currentFarmer?.to.name,
      numberOfCows: currentFarmer?.number_of_cows_head,
      amountOfMilk: currentFarmer?.amount_of_milk_produced,
      latitude: currentFarmer?.location.latitude,
      longitude: currentFarmer?.location.longitude,
      type: currentFarmer?.type,
    },
    validationSchema: ValidadeFarmerForm,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      setLoadingPage(true)

      const body = {
        type: selectedOption,
        amount_of_milk_produced: Number(values.amountOfMilk),
        number_of_cows_head: Number(values.numberOfCows),
        had_supervision: isChecked,
        farmer: {
          name: values.farmerName,
          city: values.farmerCity,
        },
        from: {
          name: values.name,
        },
        to: {
          name: values.nameSupervision,
        },
        location: {
          latitude: marker?.[0],
          longitude: marker?.[1],
        },
      }

      try {
        const response = await fetch(
          `/api/updateCheckList?id=${currentFarmer?._id}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
          },
        )
        const data = await response.json()

        if (data) {
          setDisabled(!disabled)
          getFarmers()
          toast({
            title: `${formik.values.farmerName}`,
            description: 'Valores atualizado com sucesso',
            status: 'success',
            duration: 9000,
            isClosable: false,
            position: 'top',
          })
        }
      } catch (error) {
        console.error('Error fetching data:', error)
        toast({
          title: `${formik.values.farmerName}`,
          description: 'Erro ao atualizar as informaçoes',
          status: 'error',
          duration: 9000,
          isClosable: false,
          position: 'top',
        })
      } finally {
        setLoadingPage(false)
        setSubmitting(false)
      }
    },
  })

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
      console.error('Error fetching data:', error)
    } finally {
      setLoadingPage(false)
    }
  }

  React.useEffect(() => {
    setDisabled(true)
  }, [])

  const options = [
    { value: 'BPA', label: 'BPA' },
    { value: 'Antibiótico', label: 'Antibiótico' },
    { value: 'BPF', label: 'BPF' },
  ]

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked)
  }

  function onClickCancel() {
    const { latitude, longitude } = currentFarmer!.location
    const markerFarmer: LatLngTuple = [latitude, longitude]
    setMarker(markerFarmer)
    setDisabled(!disabled)
  }

  return (
    <S.Container>
      <S.WrapperTitle>
        <S.WrapperText>
          <Text fontSize={14}>
            Supervisão recente?{' '}
            <Switch
              id='isRequired'
              size='md'
              isChecked={isChecked}
              isDisabled={disabled}
              onChange={handleChange}
              isRequired
            />
          </Text>
        </S.WrapperText>

        <CloseCircleOutline
          style={{ cursor: 'pointer' }}
          size={22}
          onClick={() => {
            setView(false)
            clearMarker()
            setDisabled(true)
          }}
        />
      </S.WrapperTitle>

      <S.Form>
        <S.WrapperForm>
          <S.WrapperText>
            <Text fontSize={12}>Fazendeiro</Text>
          </S.WrapperText>
          <Input
            type='text'
            placeholder='Insira o nome do Fazendeiro'
            disabled={disabled}
            id='name'
            name='name'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            style={{
              border:
                formik.touched.name && formik.errors.name
                  ? '1px solid red'
                  : '1px solid #ccc',
            }}
          />
        </S.WrapperForm>
        <S.WrapperForm>
          <S.WrapperText>
            <Text fontSize={12}>Nome da Fazenda</Text>
          </S.WrapperText>

          <Input
            type='text'
            placeholder='Insira o nome da Fazenda'
            value={formik.values.farmerName}
            disabled={disabled}
            id='farmerName'
            name='farmerName'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{
              border:
                formik.touched.farmerName && formik.errors.farmerName
                  ? '1px solid red'
                  : '1px solid #ccc',
            }}
          />
        </S.WrapperForm>
        <S.WrapperForm>
          <S.WrapperText>
            <Text fontSize={12}>Cidade da Fazenda</Text>
          </S.WrapperText>
          <Input
            type='text'
            placeholder='Insira a cidade da Fazenda'
            value={formik.values.farmerCity}
            disabled={disabled}
            id='farmerCity'
            name='farmerCity'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{
              border:
                formik.touched.farmerCity && formik.errors.farmerCity
                  ? '1px solid red'
                  : '1px solid #ccc',
            }}
          />
        </S.WrapperForm>
        <S.WrapperForm>
          <S.WrapperText>
            <Text fontSize={12}>Nome do supervisor</Text>
          </S.WrapperText>
          <Input
            type='text'
            placeholder='Insira o nome do supervisor'
            value={formik.values.nameSupervision}
            disabled={disabled}
            id='nameSupervision'
            name='nameSupervision'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{
              border:
                formik.touched.nameSupervision && formik.errors.nameSupervision
                  ? '1px solid red'
                  : '1px solid #ccc',
            }}
          />
        </S.WrapperForm>
        <S.WrapperForm>
          <S.WrapperText>
            <Text fontSize={12}>Numeros de vaca</Text>
          </S.WrapperText>
          <Input
            type='text'
            placeholder='Quantidade de Vacas'
            value={formik.values.numberOfCows}
            disabled={disabled}
            id='numberOfCows'
            name='numberOfCows'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{
              border:
                formik.touched.numberOfCows && formik.errors.numberOfCows
                  ? '1px solid red'
                  : '1px solid #ccc',
            }}
          />
        </S.WrapperForm>
        <S.WrapperForm>
          <S.WrapperText>
            <Text fontSize={12}>Quantidade de leite produzido</Text>
          </S.WrapperText>
          <Input
            type='text'
            placeholder='Quantidade de leite produzido'
            value={formik.values.amountOfMilk}
            disabled={disabled}
            id='amountOfMilk'
            name='amountOfMilk'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{
              border:
                formik.touched.amountOfMilk && formik.errors.amountOfMilk
                  ? '1px solid red'
                  : '1px solid #ccc',
            }}
          />
        </S.WrapperForm>
        <S.WrapperForm>
          <S.WrapperText>
            <Text fontSize={12}>Latitude</Text>
          </S.WrapperText>
          <Input
            type='text'
            placeholder='Latitude'
            value={marker?.[0]}
            disabled={disabled}
            id='latitude'
            name='latitude'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </S.WrapperForm>
        <S.WrapperForm>
          <S.WrapperText>
            <Text fontSize={12}>Latitude</Text>
          </S.WrapperText>
          <Input
            type='text'
            placeholder='Longitude'
            value={marker?.[1]}
            disabled={disabled}
            id='longitude'
            name='longitude'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </S.WrapperForm>
        <S.WrapperForm>
          <S.WrapperText>
            <Text fontSize={12}>Selecione</Text>
          </S.WrapperText>
          <Select
            options={options}
            value={selectedOption}
            onChange={handleSelectChange}
            placeholder={currentFarmer ? currentFarmer.type : 'Selecione'}
            size='md'
            disabled={disabled}
          />
        </S.WrapperForm>
      </S.Form>

      {disabled ? (
        <S.IconsWrapper>
          <Button
            width={'full'}
            m={2}
            variant={'outline'}
            colorScheme='teal'
            onClick={() => setDisabled(!disabled)}
          >
            <Text fontSize={16}>EDITAR</Text>
          </Button>
        </S.IconsWrapper>
      ) : (
        <S.IconsWrapper>
          <Button
            width={'full'}
            m={2}
            variant={'link'}
            colorScheme='teal'
            onClick={() => onClickCancel()}
          >
            <Text fontSize={16}>Cancelar</Text>
          </Button>
          <Button
            width={'full'}
            m={2}
            variant={'solid'}
            colorScheme='teal'
            onClick={() => formik.handleSubmit()}
          >
            <Text fontSize={16}>Salvar</Text>
          </Button>
        </S.IconsWrapper>
      )}
    </S.Container>
  )
}

export default Informations
