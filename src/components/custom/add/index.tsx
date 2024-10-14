import React from 'react'
import * as S from './styles'

import Input from '@/components/base/input'
import Select from '@/components/base/select'
import useMapStore from '@/zustand/map.store'
import useLoadingStore from '@/zustand/loadind.store'
import useCheckListStore from '@/zustand/checklist.store'
import ValidadeFarmerForm from '@/schema/ValidadeFarmerFormSchema'

import { Switch } from '@chakra-ui/react'
import { useFormik } from 'formik'
import { formatISO } from 'date-fns'
import { GenerateUUID } from '@/components/utils/generateUUID'
import { CloseCircleOutline } from 'styled-icons/evaicons-outline'
import { Button, Text, useToast } from '@chakra-ui/react'

const AddFarmer: React.FC = () => {
  const { marker, setDisabled, setAdd, clearMarker } = useMapStore()
  const toast = useToast()

  const { setLoadingPage } = useLoadingStore()
  const { setCheckList } = useCheckListStore()

  const [selectedOption, setSelectedOption] = React.useState<any>('')
  const [isChecked, setIsChecked] = React.useState<boolean>(false)

  const formik = useFormik({
    initialValues: {
      name: '',
      farmerName: '',
      farmerCity: '',
      nameSupervision: '',
      numberOfCows: '',
      amountOfMilk: '',
      latitude: '',
      longitude: '',
      type: selectedOption,
    },
    validationSchema: ValidadeFarmerForm,
    onSubmit: async (values, { setSubmitting }) => {
      setLoadingPage(true)
      console.log(formik.errors)

      const dateFormatted = formatISO(new Date(), {
        representation: 'complete',
      })
      const body = {
        checklists: [
          {
            _id: GenerateUUID(),
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
            created_at: dateFormatted,
            updated_at: dateFormatted,
          },
        ],
      }

      try {
        const response = await fetch(`/api/postCheckList`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        })
        const data = await response.json()

        if (data) {
          getFarmers()
          toast({
            title: `${formik.values.farmerName}`,
            description: 'Cadastro feito',
            status: 'success',
            duration: 9000,
            isClosable: false,
            position: 'top',
          })
          setAdd(false)
          clearMarker()
        }
      } catch (error) {
        console.error('Error fetching datasss:', error)
        toast({
          title: `${formik.values.farmerName}`,
          description: 'Erro ao cadastrar',
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
      console.error('Error fetching datasss:', error)
    } finally {
      setLoadingPage(false)
    }
  }

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

  React.useEffect(() => {
    setDisabled(false)
  }, [])

  return (
    <S.Container>
      <S.WrapperTitle>
        <S.WrapperText>
          <Text fontSize={12}>
            Supervisão recente?{' '}
            <Switch
              id='isRequired'
              size='md'
              isChecked={isChecked}
              onChange={handleChange}
              isRequired
            />
          </Text>
        </S.WrapperText>

        <CloseCircleOutline
          style={{ cursor: 'pointer' }}
          size={22}
          onClick={() => {
            setAdd(false)
            clearMarker()
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
            type='number'
            placeholder='Quantidade de Vacas'
            value={formik.values.numberOfCows}
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
            type='number'
            placeholder='Quantidade de leite produzido'
            value={formik.values.amountOfMilk}
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
            id='latitude'
            name='latitude'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled
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
            id='longitude'
            name='longitude'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled
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
            placeholder={'Selecione'}
            size='md'
            disabled={false}
            isRequired
          />
        </S.WrapperForm>
      </S.Form>

      <S.IconsWrapper>
        <Button
          width={'full'}
          m={2}
          variant={'link'}
          colorScheme='teal'
          onClick={() => setAdd(false)}
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
    </S.Container>
  )
}

export default AddFarmer
