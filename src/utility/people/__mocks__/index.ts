import { PersonData } from '../interfaces';

export const mockedInPersonData: PersonData = {
  name: 'Teste da Silva',
  birthDate: '23/08/2022',
  cpf: '000.111.222-33',
  rg: '11.222.888',
  mothersName: 'Teste Mãe da Silva',
  civilSituation: 'solteiro',
  gender: 'M',
  genderCategory: 'Cisgênero',
  race: 'Parda',
  childrenQuantity: '0',
  nationality: 'Brasileiro',
  birthCity: 'Sabará',
  telephone: '3133334444',
  ctps: '1112223',
  hasHealthProblem: 'nao',
  isCareSituation: 'sim',
  isDisabledPerson: 'nao',
  disabledDescription: 'Descição sobre a dificiência',
  healthDescription: 'Descrição sobre a saúde',
  referenceServices: 'Não tem experiência prévia',
  schoolLevel: 'medio-completo',
  skills: 'Artesanato',
  observations: 'Nenhuma observação',
  ocupation: 'desempregado',
  ocupationDetails: 'Nenhum detalhe',
  createdAt: new Date().toString()
};

export const mockedOutPersonData = {
  ...mockedInPersonData,
  name: 'TESTE DA SILVA',
  birthDate: new Date(2022, 7, 23),
  cpf: '00011122233',
  rg: '11222888',
  mothersName: 'TESTE MÃE DA SILVA',
  childrenQuantity: 0,
  hasHealthProblem: false,
  isCareSituation: true,
  isDisabledPerson: false
};
