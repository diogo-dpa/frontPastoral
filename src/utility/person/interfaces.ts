export interface PersonData {
  name: string;
  birthDate: string;
  cpf: string;
  rg: string;
  mothersName: string;
  civilSituation: string;
  gender: 'M' | 'F' | 'Other' | '';
  genderCategory: 'Cisgênero' | 'Transgênero' | '';
  race:
    | 'Branca'
    | 'Preta'
    | 'Parda'
    | 'Indígena'
    | 'Amarela'
    | 'Não declarado'
    | '';
  childrenQuantity: string;
  nationality: string;
  birthCity: string;
  telephone: string;
  ctps: string;
  hasHealthProblem: 'sim' | 'nao' | '';
  isCareSituation: 'sim' | 'nao' | '';
  isDisabledPerson: 'sim' | 'nao' | '';
  disabledDescription?: string;
  healthDescription?: string;
  referenceServices?: string;
  schoolLevel: string;
  skills?: string;
  observations?: string;
  ocupation: string;
  ocupationDetails?: string;
}
