import {
  CTPS_DOCUMENT_DIGITS,
  MAX_INPUT_DIGITS,
  MAX_INPUT_FEW_DIGITS,
  MAX_INPUT_INTERMEDIATE_DIGITS,
  RG_DOCUMENT_DIGITS_MAX,
  TELEPHONE_DIGITS
} from '@utility/consts';
import { InputFormType } from '@utility/interfaces';
import {
  convertStringBRLToDateFormat,
  removeSpecialCharacters
} from '@utility/methods';
import {
  civilSituationOptions,
  genderCategoryOptions,
  genderOptions,
  ocupationOptions,
  raceOptions,
  schoolLevelOptions,
  yesOrNoOptions
} from './config';
import { PersonData } from './interfaces';

export const personInputsFields: InputFormType[] = [
  {
    section: [
      {
        name: 'name',
        error: 'name',
        errorMessage: 'name',
        placeholder: 'Nome completo',
        isRequired: true,
        maxLength: MAX_INPUT_DIGITS
      }
    ]
  },
  {
    section: [
      {
        name: 'cpf',
        error: 'cpf',
        errorMessage: 'cpf',
        placeholder: 'CPF',
        isRequired: true,
        regexMask: '999.999.999-99'
      },
      {
        name: 'rg',
        error: 'rg',
        errorMessage: 'rg',
        placeholder: 'RG',
        isRequired: true,
        maxLength: RG_DOCUMENT_DIGITS_MAX
      }
    ]
  },
  {
    section: [
      {
        name: 'birthDate',
        error: 'birthDate',
        errorMessage: 'birthDate',
        placeholder: 'Data de nascimento',
        isRequired: true,
        regexMask: '99/99/9999'
      },
      {
        name: 'mothersName',
        error: 'mothersName',
        errorMessage: 'mothersName',
        placeholder: 'Nome da mãe',
        isRequired: true,
        maxLength: MAX_INPUT_DIGITS
      }
    ]
  },
  {
    section: [
      {
        name: 'civilSituation',
        error: 'civilSituation',
        errorMessage: 'civilSituation',
        placeholder: 'Estado civil',
        selectOptions: civilSituationOptions,
        selectLabel: 'Estado civil',
        isRequired: true
      },
      {
        name: 'gender',
        error: 'gender',
        errorMessage: 'gender',
        placeholder: 'Gênero',
        selectOptions: genderOptions,
        selectLabel: 'Gênero',
        isRequired: true
      }
    ]
  },
  {
    section: [
      {
        name: 'genderCategory',
        error: 'genderCategory',
        errorMessage: 'genderCategory',
        placeholder: 'Categoria gênero',
        selectOptions: genderCategoryOptions,
        selectLabel: 'Categoria gênero',
        isRequired: true
      },
      {
        name: 'race',
        error: 'race',
        errorMessage: 'race',
        placeholder: 'Raça',
        selectOptions: raceOptions,
        selectLabel: 'Raça',
        isRequired: true
      }
    ]
  },
  {
    section: [
      {
        name: 'childrenQuantity',
        error: 'childrenQuantity',
        errorMessage: 'childrenQuantity',
        placeholder: 'Quantidade de filhos',
        isRequired: true,
        maxLength: MAX_INPUT_FEW_DIGITS
      },
      {
        name: 'ctps',
        error: 'ctps',
        errorMessage: 'ctps',
        placeholder: 'Nº carteira de trabalho',
        isRequired: true,
        maxLength: CTPS_DOCUMENT_DIGITS
      }
    ]
  },
  {
    section: [
      {
        name: 'nationality',
        error: 'nationality',
        errorMessage: 'nationality',
        placeholder: 'Nacionalidade',
        isRequired: true,
        maxLength: MAX_INPUT_INTERMEDIATE_DIGITS
      },
      {
        name: 'birthCity',
        error: 'birthCity',
        errorMessage: 'birthCity',
        placeholder: 'Naturalidade',
        isRequired: true,
        maxLength: MAX_INPUT_INTERMEDIATE_DIGITS
      }
    ]
  },
  {
    section: [
      {
        name: 'telephone',
        error: 'telephone',
        errorMessage: 'telephone',
        placeholder: 'Telefone',
        helperText: 'Formato: 99 99999999 ou 99888887777',
        maxLength: TELEPHONE_DIGITS
      }
    ]
  },
  {
    section: [
      {
        name: 'hasHealthProblem',
        error: 'hasHealthProblem',
        errorMessage: 'hasHealthProblem',
        placeholder: 'Problema de saúde?',
        selectOptions: yesOrNoOptions,
        selectLabel: 'Tem problema de saúde?',
        isRequired: true
      },
      {
        name: 'isCareSituation',
        error: 'isCareSituation',
        errorMessage: 'isCareSituation',
        placeholder: 'Situação de rua?',
        selectOptions: yesOrNoOptions,
        selectLabel: 'Está em situação de rua?',
        isRequired: true
      }
    ]
  },
  {
    section: [
      {
        name: 'healthDescription',
        error: 'healthDescription',
        errorMessage: 'healthDescription',
        placeholder: 'Descrição da saúde',
        textarea: true,
        maxLength: MAX_INPUT_DIGITS
      }
    ]
  },
  {
    section: [
      {
        name: 'isDisabledPerson',
        error: 'isDisabledPerson',
        errorMessage: 'isDisabledPerson',
        placeholder: 'Portador de Deficiência?',
        selectOptions: yesOrNoOptions,
        selectLabel: 'Portador de Deficiência?',
        isRequired: true
      },
      {
        name: 'disabledDescription',
        error: 'disabledDescription',
        errorMessage: 'disabledDescription',
        placeholder: 'Descrição da deficiência',
        textarea: true,
        maxLength: MAX_INPUT_DIGITS
      }
    ]
  },
  {
    section: [
      {
        name: 'referenceServices',
        error: 'referenceServices',
        errorMessage: 'referenceServices',
        placeholder: 'Referências de serviços',
        textarea: true,
        maxLength: MAX_INPUT_DIGITS
      }
    ]
  },
  {
    section: [
      {
        name: 'schoolLevel',
        error: 'schoolLevel',
        errorMessage: 'schoolLevel',
        placeholder: 'Grau de escolaridade',
        selectOptions: schoolLevelOptions,
        selectLabel: 'Grau de escolaridade',
        isRequired: true
      }
    ]
  },
  {
    section: [
      {
        name: 'skills',
        error: 'skills',
        errorMessage: 'skills',
        placeholder: 'Habilidades',
        textarea: true,
        maxLength: MAX_INPUT_DIGITS
      }
    ]
  },
  {
    section: [
      {
        name: 'observations',
        error: 'observations',
        errorMessage: 'observations',
        placeholder: 'Observações',
        textarea: true,
        maxLength: MAX_INPUT_DIGITS
      }
    ]
  },
  {
    section: [
      {
        name: 'ocupation',
        error: 'ocupation',
        errorMessage: 'ocupation',
        placeholder: 'Ocupação',
        isRequired: true,
        selectOptions: ocupationOptions,
        selectLabel: 'Ocupação'
      },
      {
        name: 'ocupationDetails',
        error: 'ocupationDetails',
        errorMessage: 'ocupationDetails',
        placeholder: 'Detalhes ocupação',
        textarea: true,
        maxLength: MAX_INPUT_DIGITS
      }
    ]
  }
];

export function formatPersonData(personData: PersonData) {
  return {
    ...personData,
    nome: personData.name.toUpperCase(),
    cpf: removeSpecialCharacters(personData.cpf),
    rg: removeSpecialCharacters(personData.rg),
    mothersName: personData.mothersName.toUpperCase(),
    dataNascimento: convertStringBRLToDateFormat(personData.birthDate),
    quantidadeFilhos: parseInt(personData.childrenQuantity, 10),
    problemaDeSaude: personData.hasHealthProblem === 'sim' ? true : false,
    situacaoDeRua: personData.isCareSituation === 'sim' ? true : false,
    portadorDeficiencia: personData.isDisabledPerson === 'sim' ? true : false
  };
}
