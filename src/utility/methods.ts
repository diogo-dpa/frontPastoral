import { isAfter, sub } from 'date-fns';
import { MAJOR_AGE, MINOR_AGE } from './consts';

export const getEnvironmentVariable = (name: string) => {
  const environment = process.env.NODE_ENV;

  if (environment === 'development') {
    return process.env[name];
  } else {
    return JSON.parse(process.env[name]);
  }
};

export const validateDate = (dateValue: string | undefined) => {
  if (dateValue) {
    const splittedDate = dateValue.split('/');
    const year = Number(splittedDate[2]);
    const month = Number(splittedDate[1]);
    const day = Number(splittedDate[0]);
    const todayDate = new Date();

    if (
      !isNaN(day) &&
      !isNaN(month) &&
      !isNaN(year) &&
      isAfter(
        sub(todayDate, { years: MINOR_AGE }),
        new Date(year, month, day)
      ) &&
      day > 0 &&
      day <= 31 &&
      month > 0 &&
      month <= 12 &&
      year >= todayDate.getFullYear() - MAJOR_AGE
    ) {
      return true;
    }
  }
  return false;
};

export const validateCPF = (cpf: string) => {
  if (typeof cpf !== 'string') return false;
  cpf = cpf.replace(/[\s.-]*/gim, '');
  if (
    !cpf ||
    cpf.length != 11 ||
    cpf == '00000000000' ||
    cpf == '11111111111' ||
    cpf == '22222222222' ||
    cpf == '33333333333' ||
    cpf == '44444444444' ||
    cpf == '55555555555' ||
    cpf == '66666666666' ||
    cpf == '77777777777' ||
    cpf == '88888888888' ||
    cpf == '99999999999'
  ) {
    return false;
  }
  let soma = 0;
  let resto;
  for (let i = 1; i <= 9; i++)
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  resto = (soma * 10) % 11;
  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(cpf.substring(9, 10))) return false;
  soma = 0;
  for (let i = 1; i <= 10; i++)
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  resto = (soma * 10) % 11;
  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(cpf.substring(10, 11))) return false;

  return true;
};

export const convertStringBRLToDateFormat = (dateBRLFormat: string) => {
  if (!dateBRLFormat) return null;
  const splitedDate = dateBRLFormat.split('/');
  return new Date(
    Number(splitedDate[2]),
    Number(splitedDate[1]) - 1,
    Number(splitedDate[0])
  );
};

export const formatDateToPTBRDayMonthYear = (value: string | null) => {
  if (value === null) return null;
  const convertedDate = new Date(value);
  return new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  }).format(convertedDate);
};

export const formatDateToPTBR = (value: string | null) => {
  if (value === null) return null;
  const convertedDate = new Date(value);
  return new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  }).format(convertedDate);
};

export const removeSpecialCharacters = (value: string) => {
  if (value === undefined) return '';
  const er = /[^a-z0-9]/gi;
  return value.replace(er, '');
};
