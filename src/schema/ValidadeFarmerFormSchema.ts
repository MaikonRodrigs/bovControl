import * as Yup from 'yup'

const ValidadeFarmerForm = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  farmerName: Yup.string().required('Nome do fazendeiro é obrigatório'),
  farmerCity: Yup.string().required('Cidade do fazendeiro é obrigatória'),
  nameSupervision: Yup.string().required('Nome de supervisão é obrigatório'),
  numberOfCows: Yup.number()
    .required('Número de vacas é obrigatório')
    .positive('O número de vacas deve ser positivo')
    .integer('O número de vacas deve ser um número inteiro'),
  amountOfMilk: Yup.number()
    .required('Quantidade de leite é obrigatória')
    .positive('A quantidade de leite deve ser positiva'),
})

export default ValidadeFarmerForm
