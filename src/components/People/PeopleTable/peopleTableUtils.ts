import { HeadCell } from './interfaces';

export const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Nome'
  },
  {
    id: 'birthDate',
    numeric: false,
    disablePadding: false,
    label: 'Data de Nascimento'
  },
  {
    id: 'birthCity',
    numeric: false,
    disablePadding: false,
    label: 'Naturalidade'
  },
  {
    id: 'createdAt',
    numeric: false,
    disablePadding: false,
    label: 'Cadastrado em'
  },
  {
    id: null,
    numeric: false,
    disablePadding: false,
    label: ''
  }
];

export function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export const peopleDataModal = [
  {
    section: [
      {
        label: 'Nome',
        field: 'name',
        highlight: true
      },
      {
        label: 'Cadastrado em',
        field: 'createdAt',
        highlight: true
      }
    ]
  },
  {
    section: [
      {
        label: 'CPF',
        field: 'cpf',
        highlight: true
      },
      {
        label: 'RG',
        field: 'rg'
      }
    ]
  },
  {
    section: [
      {
        label: 'Data de nascimento',
        field: 'birthDate',
        highlight: true
      },
      {
        label: 'Naturalidade',
        field: 'birthCity',
        highlight: true
      }
    ]
  },
  {
    section: [
      {
        label: 'Nome da mãe',
        field: 'mothersName'
      },
      {
        label: 'Estado civil',
        field: 'civilSituation'
      }
    ]
  },
  {
    section: [
      {
        label: 'Gênero',
        field: 'gender'
      },
      {
        label: 'Categoria gênero',
        field: 'genderCategory'
      }
    ]
  },
  {
    section: [
      {
        label: 'Raça',
        field: 'race'
      }
    ]
  },
  {
    section: [
      {
        label: 'Quantidade de filhos',
        field: 'childrenQuantity'
      },
      {
        label: 'Nacionalidade',
        field: 'nationality'
      }
    ]
  },
  {
    section: [
      {
        label: 'Telefone',
        field: 'telephone'
      },
      {
        label: 'CTPS',
        field: 'ctps'
      }
    ]
  },
  {
    section: [
      {
        label: 'Problema de saúde',
        field: 'hasHealthProblem'
      },
      {
        label: 'Situação de rua',
        field: 'isCareSituation'
      }
    ]
  },
  {
    section: [
      {
        label: 'Dificiência',
        field: 'isDisabledPerson'
      },
      {
        label: 'Descrição deficiência',
        field: 'disabledDescription'
      }
    ]
  },
  {
    section: [
      {
        label: 'Descrição saúde',
        field: 'healthDescription'
      },
      {
        label: 'Descrição serviços',
        field: 'referenceServices'
      }
    ]
  },
  {
    section: [
      {
        label: 'Nível escolar',
        field: 'schoolLevel'
      },
      {
        label: 'Habilidades',
        field: 'skills'
      }
    ]
  },
  {
    section: [
      {
        label: 'Observações',
        field: 'observations'
      }
    ]
  },
  {
    section: [
      {
        label: 'Ocupação',
        field: 'ocupation'
      },
      {
        label: 'Detalhes ocupação',
        field: 'ocupationDetails'
      }
    ]
  }
];
