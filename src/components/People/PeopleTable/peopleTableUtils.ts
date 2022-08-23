import { HeadCell, Order } from './interfaces';

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

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
export function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

export function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (a: { [key in Key]: string }, b: { [key in Key]: string }) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
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
