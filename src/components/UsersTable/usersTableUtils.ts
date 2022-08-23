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
