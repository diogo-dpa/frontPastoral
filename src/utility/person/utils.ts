import { InputFormType } from '@utility/interfaces';
import {
  civilSituationOptions,
  genderCategoryOptions,
  genderOptions,
  raceOptions,
  schoolLevelOptions,
  yesOrNoOptions
} from './config';

export const personInputsFields: InputFormType[] = [
  {
    section: [
      {
        name: 'name',
        error: 'name',
        errorMessage: 'name',
        placeholder: 'Nome completo'
      }
    ]
  },
  {
    section: [
      {
        name: 'cpf',
        error: 'cpf',
        errorMessage: 'cpf',
        placeholder: 'CPF'
      },
      {
        name: 'rg',
        error: 'rg',
        errorMessage: 'rg',
        placeholder: 'RG'
      }
    ]
  },
  {
    section: [
      {
        name: 'birthDate',
        error: 'birthDate',
        errorMessage: 'birthDate',
        placeholder: 'Data de nascimento'
      },
      {
        name: 'mothersName',
        error: 'mothersName',
        errorMessage: 'mothersName',
        placeholder: 'Nome da mãe'
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
        selectLabel: 'Estado civil'
      },
      {
        name: 'gender',
        error: 'gender',
        errorMessage: 'gender',
        placeholder: 'Gênero',
        selectOptions: genderOptions,
        selectLabel: 'Gênero'
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
        selectLabel: 'Categoria gênero'
      },
      {
        name: 'race',
        error: 'race',
        errorMessage: 'race',
        placeholder: 'Raça',
        selectOptions: raceOptions,
        selectLabel: 'Raça'
      }
    ]
  },
  {
    section: [
      {
        name: 'childrenQuantity',
        error: 'childrenQuantity',
        errorMessage: 'childrenQuantity',
        placeholder: 'Quantidade de filhos'
      },
      {
        name: 'ctps',
        error: 'ctps',
        errorMessage: 'ctps',
        placeholder: 'Nº carteira de trabalho'
      }
    ]
  },
  {
    section: [
      {
        name: 'nationality',
        error: 'nationality',
        errorMessage: 'nationality',
        placeholder: 'Nacionalidade'
      },
      {
        name: 'birthCity',
        error: 'birthCity',
        errorMessage: 'birthCity',
        placeholder: 'Naturalidade'
      }
    ]
  },
  {
    section: [
      {
        name: 'telephone',
        error: 'telephone',
        errorMessage: 'telephone',
        placeholder: 'Telefone'
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
        selectLabel: 'Tem problema de saúde?'
      },
      {
        name: 'isCareSituation',
        error: 'isCareSituation',
        errorMessage: 'isCareSituation',
        placeholder: 'Situação de rua?',
        selectOptions: yesOrNoOptions,
        selectLabel: 'Está em situação de rua?'
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
        textarea: true
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
        textarea: true
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
        selectLabel: 'Grau de escolaridade'
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
        textarea: true
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
        textarea: true
      }
    ]
  },
  {
    section: [
      {
        name: 'ocupation',
        error: 'ocupation',
        errorMessage: 'ocupation',
        placeholder: 'Ocupação'
      },
      {
        name: 'ocupationDetails',
        error: 'ocupationDetails',
        errorMessage: 'ocupationDetails',
        placeholder: 'Detalhes ocupação',
        textarea: true
      }
    ]
  }
];
