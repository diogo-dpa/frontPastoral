import * as yup from 'yup';
import {
  BIRTH_DATE_DIGITS,
  CPF_DOCUMENT_DIGITS,
  CTPS_DOCUMENT_DIGITS,
  RG_DOCUMENT_DIGITS
} from '../consts';
import { validateCPF, validateDate } from '../methods';

export const newPersonFormSchema = yup
  .object({
    name: yup.string().required('Campo obrigatório'),
    cpf: yup
      .string()
      .min(CPF_DOCUMENT_DIGITS, 'CPF inválido')
      .test('valid_cpf', 'Valor inválido', validateCPF)
      .required('Campo obrigatório'),
    rg: yup
      .string()
      .min(RG_DOCUMENT_DIGITS, 'RG inválido')
      .matches(new RegExp('[0-9]{1,2}.?[0-9]{3}.?[0-9]{3}'), 'Valor inválido')
      .required('Campo obrigatório'),
    birthDate: yup
      .string()
      .test('Regex', 'Data inválida', curr => validateDate(curr))
      .min(BIRTH_DATE_DIGITS, 'Valor inválido')
      .required('Campo obrigatório'),
    mothersName: yup.string().required('Campo obrigatório'),
    civilSituation: yup.string().required('Campo obrigatório'),
    gender: yup.string().required('Campo obrigatório'),
    genderCategory: yup.string().required('Campo obrigatório'),
    race: yup.string().required('Campo obrigatório'),
    childrenQuantity: yup
      .string()
      .matches(new RegExp('^[0-9]*$'), 'Valor inválido')
      .required('Campo obrigatório'),
    nationality: yup.string().required('Campo obrigatório'),
    birthCity: yup.string().required('Campo obrigatório'),
    telephone: yup
      .string()
      .matches(
        new RegExp('[(]?[0-9]{2}[)]? ?[0-9]{4}-?[0-9]{4}|^$|/^w+$/'),
        'Valor inválido'
      ),
    ctps: yup
      .string()
      .min(CTPS_DOCUMENT_DIGITS, 'Valor inválido')
      .required('Campo obrigatório'),
    hasHealthProblem: yup.string().required('Campo obrigatório'),
    isCareSituation: yup.string().required('Campo obrigatório'),
    isDisabledPerson: yup.string().required('Campo obrigatório'),
    disabledDescription: yup.string(),
    healthDescription: yup.string(),
    referenceServices: yup.string(),
    schoolLevel: yup.string().required('Campo obrigatório'),
    skills: yup.string(),
    observations: yup.string(),
    ocupation: yup.string().required('Campo obrigatório'),
    ocupationDetails: yup.string()
  })
  .required();
