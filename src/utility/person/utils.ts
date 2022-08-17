import { InputFormType } from '@utility/interfaces';
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
        isRequired: true
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
        isRequired: true
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
        isRequired: true
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
        isRequired: true
      },
      {
        name: 'ctps',
        error: 'ctps',
        errorMessage: 'ctps',
        placeholder: 'Nº carteira de trabalho',
        isRequired: true
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
        isRequired: true
      },
      {
        name: 'birthCity',
        error: 'birthCity',
        errorMessage: 'birthCity',
        placeholder: 'Naturalidade',
        isRequired: true
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
        textarea: true
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
        textarea: true
      }
    ]
  }
];

export function formatPersonData(personData: PersonData) {
  return {
    nome: personData.name,
    dataNascimento: new Date(),
    cpf: personData.cpf,
    rg: personData.rg,
    nomeMae: personData.mothersName,
    situacaoCivil: personData.civilSituation,
    genero: personData.gender,
    categoriaGenero: personData.genderCategory,
    racaCor: personData.race,
    quantidadeFilhos: parseInt(personData.childrenQuantity, 10),
    nacionalidade: personData.nationality,
    telefone: personData.telephone,
    naturalidade: personData.birthCity,
    ctps: personData.ctps,
    problemaDeSaude: personData.hasHealthProblem === 'sim' ? true : false,
    situacaoDeRua: personData.isCareSituation === 'sim' ? true : false,
    descricaoSaude: personData.healthDescription,
    portadorDeficiencia: personData.isDisabledPerson === 'sim' ? true : false,
    descricaoDeficiencia: personData.disabledDescription,
    servicosDeReferencia: personData.referenceServices,
    grauEscolar: personData.schoolLevel,
    aperfeicoamentoHabilidades: personData.skills,
    observacoes: personData.observations,
    ocupacao: personData.ocupation,
    detalheOcupacao: personData.ocupationDetails
  };
}
