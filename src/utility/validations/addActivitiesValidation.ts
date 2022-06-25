import * as yup from 'yup';

export const schema = yup
  .object({
    activityType: yup.string().required('Campo obrigatório'),
    dateTime: yup.string().required('Campo obrigatório'),
    participantsQuantity: yup.string().required('Campo obrigatório'),
    place: yup.string().required('Campo obrigatório'),
    responsible: yup.string().required('Campo obrigatório'),
    subject: yup.string().required('Campo obrigatório')
  })
  .required();
